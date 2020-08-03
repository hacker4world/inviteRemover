const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
    console.log("ready to work")
})



client.on("message", message => {
    if(message.content.startsWith("https://discord.gg/")) {
        if(!message.member.roles.cache.some(role => role.name == "partner")) {
            message.delete()
            
        }
        
    }
})





client.login(process.env.token)