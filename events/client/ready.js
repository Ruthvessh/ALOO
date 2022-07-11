const { PREFIX } = require('../../config');
module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    bot.user.setActivity("a!help  | Made by ALONE | Multipurpose", { type: "PLAYING", url: "https://www.youtube.com/wilardzysenpai"});
};