const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
    console.log("ready to work")
})



client.on("message", message => {
    if(message.content.startsWith("https://discord.gg/")) {
        message.delete()
        message.member.send("كس امك يا كلب")   
    }
})





client.login(process.env.token)