const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animeplanet",
    alias: [],
    use: "<query>",
    desc: "Search Anime From Animeplanet",
    type: "animeweb",
    example: `%prefix%command <query>`,
    start: async(yumeko, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/anime/animeplanet", { query: text }, "apikey"))
        let caption = `Animeplanet Search :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.manga_name}\n`
            caption += `⭔ Link : ${i.manga_url}\n\n`
        }
        //yumeko.sendFile(m.from, fetch.result[0].manga_thumb, "", m, { caption }) yg gambarnya kena internet positif
        yumeko.sendText(m.from, caption, m)
    },
    isQuery: true
}