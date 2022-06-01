const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "dailynews",
    alias: ["dailynews"],
    desc: "Latest News From Dailynews",
    type: "news",
    example: `%prefix%command`,
    start: async(yumeko, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/dailynews", {}, "apikey"))
        let caption = `Latest News From Dailynews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        yumeko.sendFile(m.from, fetch.result[0].berita_thumb, "", m, { caption })
    }
}
