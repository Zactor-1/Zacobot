const Discord = require("discord.js");
const low = require("lowdb")
const files = require("lowdb/adapters/FileSync")

//const adapter = new FileSync("database.json");
//const db = low(adapter);

var bot = new Discord.Client();
var prefix = ("/");
var registered_server = 4;

bot.on("ready", () =>  {
    bot.user.setPresence({game: { name: "/help Zacobot" + registered_server + "bot en beta", type: 0}});
    console.log("Bot ready!");

});

bot.login("NDM1NDcyODAxMzM2NjU1ODcy.DbZdeg.9x9VTzPP3Zi_3wxgSp4zk-eG868");

bot.on("message", message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log("ping pong");
    }
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#E60FB4")
        .addField("Commande saisie: /help", "  /info: info sur le bot \n ping: le bot répond pong")
        message.channel.sendEmbed(help_embed);
      //message.channel.sendMessage("```info```");
      console.log("commande help demandée");  
    }
    if  (message.content === prefix + "info"){
        var help_embed2 = new Discord.RichEmbed()
        .setColor("#E60FB4")
        .addField("Commande saisie: /info",  "ZacoBot est un bot codé par Zactor \n il est en beta pour le moment")
        message.channel.sendEmbed(help_embed2);
        //message.channel.sendMessage("ZacoBot est un bot codé par Zactor \n il est en beta pour le moment");
        console.log("commande info demandée");
    }
    if (message.content === prefix + "kaito"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#E60FB4")
        .addField("BITE", " effectivement c'est une belle bite")
        message.channel.sendEmbed(help_embed);
      //message.channel.sendMessage("```info```");
      console.log("et oui c'est une belle bite");  
    }

});