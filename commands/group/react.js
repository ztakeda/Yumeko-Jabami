module.exports = {
	name: "react",
	alias: ["reak","r"],
    use: "<query>",
	desc: "Send Reaction Message",
    type: "group",
    example: "%prefix%command <query>",
    start: async(yumeko, m, { text, prefix, command }) => {
        if (!text) return m.reply(`Example : ${prefix + command} 🥺`)
        if (m.quoted.sender === yumeko.user.jid) {
            reactionMessage = {
                react: {
                    text: text,
                    key: { remoteJid: m.fromMe, fromMe: true, id: quoted.id }
                }
            }
            yumeko.sendMessage(m.chat, reactionMessage)
       } else {
            reactionMessage = {
                react: {
                    text: text,
                    key: { remoteJid: m.from, fromMe: false, id: m.quoted.id }
                }
            }
            yumeko.sendMessage(m.from, reactionMessage)
        }
	},
    isGroup: true,
    isBotAdmin: true
}