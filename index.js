const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
    console.log("ready to work")
    let verifChannel = client.guilds.cache.get("726870430807228446").channels.cache.get("739884918989127710")
    let verif = client.guilds.cache.get("726870430807228446").roles.cache.get("733454281851666485")
    verifChannel.send(new Discord.MessageAttachment("verif.gif"))
    client.on("message", message => {
        if(message.channel.id == "739884918989127710" && message.member.id == "710293911662362805")
        {
            message.react("✅")
            client.on("messageReactionAdd", async(reaction , user )=> {
                if(!user.bot && reaction.message.channel.id == "739884918989127710" && reaction.emoji.name == "✅") {
                    let member = reaction.message.guild.members.cache.get(user.id)
                    member.roles.add(verif).catch(err => console.log("NVM"))
                }
            })
        }
    })
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
                channel.updateOverwrite(guild.roles.everyone, { VIEW_CHANNEL: false });
                channel.updateOverwrite(role, { VIEW_CHANNEL: true });
                channel.updateOverwrite(role, { SEND_MESSAGES: true });
            }
        })
    }
})


client.login(process.env.token)