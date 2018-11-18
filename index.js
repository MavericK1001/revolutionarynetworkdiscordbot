const Discord = require("discord.js");

const Token = "NDYxNTA1OTI3ODU4ODgwNTEy.DtHZNA.uRAvZvVGnPFTgikmeUETtYtKNPI";

const prefix = "!";

const status = "MavericK";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
    bot.user.setStatus("dnd")
    bot.user.setPresence({ game: { name: status, type: 2 } });
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch(args[0]) {
        case "helpme":
            message.channel.send("```What help do you need Sir?", true);
            message.channel.send("(Server, Credits)```", true);
            break;
        case "credits":
            var credits = new Discord.RichEmbed()

            .setDescription("All about me!")
            .addField("Created By", "MavericK#5282", true)
            .addField("Version", "2.0", true)
            .addField("Created On", bot.user.createdAt)
            .addField("Status", "Online")
            .addField("Listening Status", status)
            .setFooter("This bot was created with love and peace!")
            .setColor(0x80FFFF)
            .setThumbnail(bot.user.displayAvatarURL)
            message.channel.sendEmbed(credits);
            break;
        case "serverinfo":
            var info = new Discord.RichEmbed()
            .addField("Server Name", message.guild.name)
            .addField("Total Members", message.guild.memberCount)
            .setColor(0x33ff33)
            .setThumbnail(message.guild.iconURL)
            message.channel.sendEmbed(info);
            break;
        default:
            message.channel.send("Invalid Command");
    }
});

bot.login(Token);