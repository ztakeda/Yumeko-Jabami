const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "inews",
    alias: ["inews"],
    desc: "Latest News From inews",
    type: "news",
    example: `%prefix%command`,
    start: async(yumeko, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/inews", {}, "apikey"))
        let caption = `Latest News From inews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Jenis Berita : ${i.berita_jenis}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        yumeko.sendText(m.from, caption, m)
    }
}
