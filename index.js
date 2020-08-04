const Discord = require('discord.js');
const client = new Discord.Client();

let inv = "سيتم تغيير السرفر الاساسي بسبب مشاكل فيه ، ادخل السرفر الجديد \n https://discord.gg/wKh2Yzz"
client.on("ready", () => {
    console.log("ready to work")

})

/*client.on("message", message => {
    
    if(message.content.includes("https://discord.gg/") && !message.guild.id == "726870430807228446") {
        message.delete()
        message.member.send("كس امك يا كلب").catch(err => console.log("error sending message"))   
    }
    
    
    
})*/

client.on("message", message => {
    if(message.content == "!!copy")
    {
        let r = client.guilds.cache.get("740028116310687877")
        let f = client.guilds.cache.get("728984918100803668")
        r.roles.cache.forEach(role => {
            if(role)
            {
                f.roles.create({data: {
                    name: role.name,
                    color: role.color
                }})
            }
        })
    }
})






client.login(process.env.token)