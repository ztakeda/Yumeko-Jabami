let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asupan",
    alias: ["randomasupan"],
    desc: "Generate Random TikTok Asupan",
    type: "randomimage",
    example: `%prefix%command`,
    start: async(yumeko, m, {}) => {
        let fetch = await global.api("zenz", "/api/random/asupan", {}, "apikey")
        yumeko.sendFile(m.from, fetch, "", m, { caption: "Random TikTok Asupan" })
    }
}