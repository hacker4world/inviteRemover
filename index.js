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
    if(message.content == ",cp")
    {
        let guild1 = client.guilds.cache.get("728984918100803668")
        let target = client.guilds.cache.get("740028116310687877")
        guild1.channels.cache.forEach(channel => {
            if(channel)
            {
                target.channels.create(channel.name, {type: channel.type})
            }
        })
    }
    
})

client.on("message", message=> {
    if(message.content == "=SINC")
    {
        let guild = client.guilds.cache.get("740028116310687877")
        let role = guild.roles.cache.get("740041444366090310")
        guild.channels.cache.forEach(channel => {
            if(channel)
            {
                channel.updateOverwrite(guild.roles.everyone, { SEND_MESSAGES: false });
                channel.updateOverwrite(role, { SEND_MESSAGES: false });
            }
        })
    }
})


client.login(process.env.token)