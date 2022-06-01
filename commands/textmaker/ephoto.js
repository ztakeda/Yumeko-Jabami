module.exports = {
    name: "ephoto",
    alias: ["ephoto360"],
    use: "<query>",
    desc: "Create Maker From https://ephoto360.com/",
    type: "textmaker",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    start: async(yumeko, m, { text, args, prefix, command }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch(type) {
            case "logo":
                if (!text2) return m.reply(`Example : ${prefix + command} logo yumeko|Jabami`)
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/logo", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `Ephoto Logo`})
            break
            case "logo2":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/logo2", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Logo 2`})
            break
            case "logo3":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/logo3", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Logo 3`})
            break
            case "logo4":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/logo4", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Logo 4`})
            break
            case "logogaming":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/logogaming", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Logo Gaming`})
            break
            case "logogirl":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/logogirl", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Logo Girl`})
            break
            case "logogold":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/logogold", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Logo Gold`})
            break
            case "spiderlogo":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/spiderlogo", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Spider Logo`})
            break
            case "freefire":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/ffcover", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Free Fire Cover`})
            break
            case "crossfire":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/crossfire", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Cross Fire`})
            break
            case "valorant":
                if (!text2) return m.reply(`Example : ${prefix + command} valorant Kimi|NO|Namae`)
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/valorant", { text: text1, text2: text2, text3: text2 }, "apikey"), "", m, { caption: `Ephoto Valorant`})
            break
            case "galaxy":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/galaxy", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Galaxy`})
            break
            case "glass":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/glass", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Glass`})
            break
            case "neon":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/neon", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Neon`})
            break
            case "beach":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/beach", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Beach`})
            break
            case "sparkling":
                if (!text2) return m.reply(`Example : ${prefix + command} logo yumeko|Zoldyck`)
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/sparkling", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `Ephoto Sparkling`})
            break
            case "awan":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/awan", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Awan`})
            break
            case "flower":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/flower", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Flower`})
            break
            case "bohlam":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/bohlam", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Bohlam`})
            break
            case "kaligrafi":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/kaligrafi", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Kaligrafi`})
            break
            case "coklat":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/coklat", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Coklat`})
            break
            case "quotes":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/quotes", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Quotes`})
            break
            case "grafity":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/grafity", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Grafity`})
            break
            case "grafity3d":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/grafity3d", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Grafity3d`})
            break
            case "typography":
                if (!text2) return m.reply(`Example : ${prefix + command} logo yumeko|Zoldyck`)
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/typography", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `Ephoto Typography`})
            break
            case "marmer":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/marmer", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Marmer`})
            break
            case "musimsemi":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/musimsemi", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Musim Semi`})
            break
            case "piringkaligrafi":
                if (!text2) return m.reply(`Example : ${prefix + command} logo yumeko|Zoldyck`)
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/piringkaligrafi", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `Ephoto Piring Kaligrafi`})
            break
            case "proyektor":
                if (!text2) return m.reply(`Example : ${prefix + command} proyektor Kimi|NO|Namae`)
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/proyektor", { text: text1, text2: text2, text3: text2 }, "apikey"), "", m, { caption: `Ephoto Proyektor`})
            break
            case "quotesonline":
                if (!text2) return m.reply(`Example : ${prefix + command} logo yumeko|Zoldyck`)
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/quotesonline", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `Ephoto Quotesonline`})
            break
            case "ruby":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/ruby", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Ruby`})
            break
            case "shadowtext":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/shadowtext", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Shadowtext`})
            break
            case "starlogo":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/starlogo", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Starlogo`})
            break
            case "starnight":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/starnight", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Starnight`})
            break
            case "starnight2":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/starnight2", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Starnight2`})
            break
            case "blackpink":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/blackpink", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Blackpink`})
            break
            case "cake":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/cake", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Cake`})
            break
            case "flashlight":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/flashlight", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Flashlight`})
            break
            case "puppycute":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/puppycute", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Puppy Cute`})
            break
            case "yasuologo":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/yasuologo", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Yasuo Logo`})
            break
            case "certificate":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/certificate", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Random Certificate`})
            break
            case "igcertificate":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/igcertificate", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Instagram Certificate`})
            break
            case "ytcertificate":
                yumeko.sendFile(m.from, global.api("zenz", "/ephoto/ytcertificate", { text: text1 }, "apikey"), "", m, { caption: `Ephoto YouTube Certificate`})
            break
        }
    },
    isQuery: true
}

function type() {
    return ["logo","logo2","logo3","logo4","logogaming","logogirl","logogold","spiderlogo","freefire","crossfire","valorant",
    "galaxy","glass","neon","beach","sparkling","awan","flower","bohlam","kaligrafi","coklat","quotes","grafity","grafity3d",
    "typography","marmer","musimsemi","piringkaligrafi","proyektor","quotesonline","ruby","shadowtext","starlogo","starnight",
    "starnight2","blackpink","cake","flashlight","puppycute","yasuologo","certificate","igcertificate","ytcertificate"]
}
