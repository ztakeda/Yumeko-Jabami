const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wikipedia",
    alias: ["wiki"],
    use: "<query>",
    desc: "Get Information From Wikipedia",
    type: "information",
    example: `%prefix%command <query>`,
    start: async(yumeko, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/wikipedia", { query: text }, "apikey"))
        let caption = `Wikipedia Dari ${text} :\n\n`
        let i = fetch.result
        caption += `${i.isi}\n`
        yumeko.sendText(m.from, caption, m)
    },
    isQuery: true
}