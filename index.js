const TeleBot = require('telebot');
const bot = new TeleBot('1964935638:AAElbpCVYgMPwqtH39VolBmQ5Q6iIGQ89tM');

bot.on('/start', (msg) => {
    return bot.sendMessage(msg.from.id, `Xin Chào ${ msg.from.first_name } ${ msg.from.last_name }
Cảm ơn bạn đã trở thành thành viên của <b>Magic's Forex</b>.
    
ID MGFX Của Bạn: ${ msg.from.id }`);

});


bot.start();
