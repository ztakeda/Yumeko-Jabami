module.exports = {
    name: "statusaver",
    alias: ["ijin", "save","sv"],
    use: "<reply>",
    desc: "Download Image or Video From Status WA",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(yumeko, m, { quoted, mime, prefix, command }) => {
        if (/image|video|sticker/.test(mime)) {
            let download = await quoted.download()
            yumeko.sendFile(m.from, download, "", m)
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}