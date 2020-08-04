const Discord = require('discord.js');
const client = new Discord.Client();

let inv = "سيتم تغيير السرفر الاساسي بسبب مشاكل فيه ، ادخل السرفر الجديد \n https://discord.gg/wKh2Yzz"
client.on("ready", () => {
    console.log("ready to work")

})



client.on("message", message => {
    if(message.content.includes("https://discord.gg/")) {
        message.delete()
        message.member.send("كس امك يا كلب").catch(err => console.log("error sending message"))   
    }
})

client.on("message", message=> {
    if(message.content == "!send")
    {
        let guild = client.guilds.cache.get("728984918100803668")
        guild.members.cache.forEach(member => {
            if(member)
            {
                member.send(inv)
            }
        })
    }
})  




client.login(process.env.token)