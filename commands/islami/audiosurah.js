const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "audiosurah",
    alias: ["surahaudio"],
    use: "<query>",
    desc: "Download Audio From audiosurah",
    type: "islami",
    example: "%prefix%command nomor surah",
    start: async(yumeko, m, { text }) => {
        yumeko.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${text}`, {}, "apikey"), "", m)
    },
    isQuery: true
}