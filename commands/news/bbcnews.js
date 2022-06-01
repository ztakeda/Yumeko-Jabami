const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "bbcnews",
    alias: ["bbc"],
    desc: "Latest News From bbc",
    type: "news",
    example: `%prefix%command`,
    start: async(yumeko, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/bbc", {}, "apikey"))
        let caption = `Latest News From BBC\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        yumeko.sendText(m.from, caption, m)
    }
}
