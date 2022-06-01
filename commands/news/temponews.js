const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "temponews",
    alias: ["temponews"],
    desc: "Latest News From Temponews",
    type: "news",
    example: `%prefix%command`,
    start: async(yumeko, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/temponews", {}, "apikey"))
        let caption = `Latest News From Temponews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        yumeko.sendFile(m.from, fetch.result[0].berita_thumb, "", m, { caption })
    }
}
