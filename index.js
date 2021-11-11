const TeleBot = require('telebot');
const bot = new TeleBot('1964935638:AAFP-bhDKQIEcb_nljX2uxG8kfyT0FtSO3U');

bot.on('/start', (msg) => {
    return bot.sendMessage(msg.from.id, `Xin Chào ${ msg.from.first_name } ${ msg.from.last_name }
Cảm ơn bạn đã trở thành thành viên của Magic's Forex.
    
ID MGFX Của Bạn: ${ msg.from.id }`);

});


bot.start();
