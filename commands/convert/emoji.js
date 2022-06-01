const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "emoji",
    alias: ["emot", "emoticon"],
    use: "<query>",
    desc: "Convert Emoji To Sticker",
    type: "convert",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nEmoji : %prefix%command 🤔\nEmoji 2 : %prefix%command 🤔 <type>`,
    start: async(yumeko, m, { args }) => {
        let [a, b] = args
        let fetch = await fetchUrl(global.api("zenz", "/creator/emoji", {query: a}, "apikey"))
        if (b) {
            switch(b.toLowerCase()) {
                case "apple": 
                    yumeko.sendFile(m.from, fetch.result.apple, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "google":
                    yumeko.sendFile(m.from, fetch.result.google, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "samsung":
                    yumeko.sendFile(m.from, fetch.result.samsung, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "microsoft":
                    yumeko.sendFile(m.from, fetch.result.microsoft, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "whatsapp":
                    yumeko.sendFile(m.from, fetch.result.whatsapp, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "twitter":
                    yumeko.sendFile(m.from, fetch.result.twitter, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "facebook":
                    yumeko.sendFile(m.from, fetch.result.facebook, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "skype":
                    yumeko.sendFile(m.from, fetch.result.skype, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "joypixels":
                    yumeko.sendFile(m.from, fetch.result.joypixels, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "openmoji":
                    yumeko.sendFile(m.from, fetch.result.openmoji, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "emojidex":
                    yumeko.sendFile(m.from, fetch.result.emojidex, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "notoemoji":
                    yumeko.sendFile(m.from, fetch.result.noto_emoji, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "messenger":
                    yumeko.sendFile(m.from, fetch.result.messenger, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "lg":
                    yumeko.sendFile(m.from, fetch.result.LG, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "htc":
                    yumeko.sendFile(m.from, fetch.result.HTC, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "mozilla":
                    yumeko.sendFile(m.from, fetch.result.mozilla, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "softbank":
                    yumeko.sendFile(m.from, fetch.result.softbank, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "docomo":
                    yumeko.sendFile(m.from, fetch.result.docomo, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
                case "kddi":
                    yumeko.sendFile(m.from, fetch.result.au_by_kddi, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
                break
            }
        } else {
            yumeko.sendFile(m.from, fetch.result.google, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
        }
    },
    isQuery: true
}

function type() {
    return ["apple", "google","samsung", "microsoft", "whatsapp", "twitter", "facebook", "skype", "joypixels", "openmoji", "emojidex", "noto_emoji", "messanger", "lg", "htc", "mozilla", "softbank", "docomo", "kddi"]
}