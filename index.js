require("./global")
const { default: makeWASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, delay, jidNormalizedUser, makeWALegacySocket, useSingleFileLegacyAuthState, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG } = require("@adiwajshing/baileys")
const fs = require("fs")
const util = require("util")
const chalk = require("chalk")
const pino = require("pino")
const yargs = require("yargs")
const path = require("path")
const { Boom } = require("@hapi/boom")
const { Collection, Simple, Store } = require("./lib")
const Welcome = require("./lib/Welcome");
const { exit } = require("process")
const config = JSON.parse(fs.readFileSync('./config.json'))
const { serialize, WAConnection } = Simple
const Commands = new Collection()
global.prefa = /^[#$+.?_&<>!/\\]/
Commands.prefix = prefa

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in config.APIs ? config.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: config.APIs.apikey } : {}) })) : '')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

const { state, saveState } = global.opts["legacy"] ? useSingleFileLegacyAuthState(`./${config.sessionName.legacy}`) : useSingleFileAuthState(`./${config.sessionName.multi}`)

const readCommands = () => {
    let dir = path.join(__dirname, "./commands")
    let dirs = fs.readdirSync(dir)
    let listCommand = {}
    try {
        dirs.forEach(async (res) => {
            let groups = res.toLowerCase()
            Commands.type = dirs.filter(v => v !== "_").map(v => v)
            listCommand[groups] = []
            let files = fs.readdirSync(`${dir}/${res}`).filter((file) => file.endsWith(".js"))
            //console.log(files)
            for (const file of files) {
                const command = require(`${dir}/${res}/${file}`)
                listCommand[groups].push(command)
                Commands.set(command.name, command)
                delay(100)
                global.reloadFile(`${dir}/${res}/${file}`)
            }
        })
        Commands.list = listCommand
    } catch (e) {
        console.error(e)
    }
}

const connect = async () => {
    await readCommands()
    let { version, isLatest } = await fetchLatestBaileysVersion()
    let connOptions = {
        printQRInTerminal: true,
        logger: pino({ level: "silent" }),
        auth: state,
        version: version
    }
    const yumeko = new WAConnection(global.opts["legacy"] ? makeWALegacySocket(connOptions) : makeWASocket(connOptions))
    if (config.APIs.apikey == "YOURAPIKEY") {
        console.log(chalk.black(chalk.bgRedBright('Apikey is not valid, please check at config.json')))
        exit()
    }
    global.Store = Store.bind(yumeko)

    yumeko.ev.on("creds.update", saveState)

    yumeko.ev.on("connection.update", async(update) => {
        if (update.connection == "open" && yumeko.type == "legacy") {
            yumeko.user = {
                id: yumeko.state.legacy.user.id,
                jid: yumeko.state.legacy.user.id,
                name: yumeko.state.legacy.user.name
            }
        }
        const { lastDisconnect, connection } = update
        if (connection) {
            console.info(`Connection Status : ${connection}`)
        }

        if (connection == "close") {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); yumeko.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); connect(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); connect(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); yumeko.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); connect(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); connect(); }
            else yumeko.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
    })

    // Welcome
    yumeko.ev.on("group-participants.update", async (m) => {
		Welcome(yumeko, m);
	});

    yumeko.ev.on("messages.upsert", async (chatUpdate) => {
        m = serialize(yumeko, chatUpdate.messages[0])

        if (!m.message) return
        if (m.key && m.key.remoteJid == "status@broadcast") return
        if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return
        require("./yumeko")(yumeko, m, Commands, chatUpdate)
    })

    if (yumeko.user && yumeko.user?.id) yumeko.user.jid = jidNormalizedUser(yumeko.user?.id)
    yumeko.logger = (yumeko.type == "legacy") ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({ }) : DEFAULT_CONNECTION_CONFIG.logger.child({ })
}

connect()
