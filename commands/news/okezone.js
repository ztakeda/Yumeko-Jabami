const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "okezone",
    alias: ["okezonenews"],
    desc: "Latest News From Okezone",
    type: "news",
    example: `%prefix%command`,
    start: async(yumeko, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/okezone", {}, "apikey"))
        let caption = `Latest News From Okezone\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        yumeko.sendFile(m.from, fetch.result[0].berita_thumb, "", m, { caption })
    }
}
