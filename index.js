const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
    console.log("ready to work")
})



client.on("message", message => {
    if(message.content.includes("https://discord.gg/")) {
        message.delete()
        message.member.send("كس امك يا كلب").catch(err => console.log("error sending message"))   
    }
})

client.on("message", message => {
    if(message.content == ":copy")
    {
        let guild1 = client.guilds.cache.get("728984918100803668")
        let guild2 = client.guilds.cache.get("734195504149430302")
        let target = client.guilds.cache.get("740028116310687877")
        guild1.channels.cache.forEach(channel => {
            if(channel)
            {
                target.channels.create(channel.name, {type: channel.type})
            }
        })
        guild2.roles.cache.forEach(role => {
            if(!roles.name == "@everyone")
            {
                target.roles.create(role.name)
            }
        })
    }
    
})



client.login(process.env.token)