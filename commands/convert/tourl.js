const { getRandom } = require("../../lib/Function")
let axios = require('axios')
let BodyForm = require('form-data')

module.exports = {
    name: "tourl",
    alias: ["uploader","upload"],
    use: "<reply>",
    desc: "Convert Image To Url",
    type: "convert",
    example: `%prefix%command <text> --image reply`,
    start: async(yumeko, m, { command, prefix, text, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            let download = await yumeko.downloadMediaMessage(quoted)
            const form = new BodyForm()
            form.append('sampleFile', download, { filename: 'fromBot-' + getRandom('jpg') })
            if (text) {
                form.append('comment', text)
            } else {
                form.append('comment', "yumeko BOT")
            }
            axios.post(global.api("zenz", "/uploader", {}, "apikey"), form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}`}
            }).then(({ data }) => {
                let caption = `Convert Image To Url :\n\n`
                caption += `⭔ Title : ${data.result.originalname}\n`
                caption += `⭔ Size : ${data.result.size}\n`
                caption += `⭔ MimeType : ${data.result.mimetype}\n`
                caption += `⭔ Comment : ${data.result.comment}\n`
                caption += `⭔ CreatedOn : ${data.result.createdOn}\n`
                caption += `⭔ Url : https://zenzapis.xyz/uploader/${data.result.originalname}\n`
                yumeko.sendFile(m.from, data.result.url, "", m, { caption })
            })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}