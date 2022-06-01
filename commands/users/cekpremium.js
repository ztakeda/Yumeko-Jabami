module.exports = {
    name: "cekpremium",
    alias: ["cekprem"],
    desc: "Premium Check Information",
    type: "users",
    example: "%prefix%command",
    isPremium: true,
    noLimit: true,
    start: async(yumeko, m) => {
        let cekprem = require("parse-ms")((await user.getPremiumExpired(m.sender, _user)) - Date.now())
        let caption = `*Expired :* ${cekprem.days} day ${cekprem.hours} hour ${cekprem.minutes} minute ${cekprem.seconds} Second`
        yumeko.sendText(m.from, caption, m)
    }
}