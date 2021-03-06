module.exports = {
    name: "tweetmaker",
    alias: ["twc","tweetcomment"],
    use: "<query>",
    desc: "Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(yumeko, m, { text }) => {
        yumeko.sendFile(m.from, global.api("zenz", "/creator/maketweet", {
            text: text, 
            text2: m.pushName
        }, "apikey"), "", m)
    },
    isQuery: true
}