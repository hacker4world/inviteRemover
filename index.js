const Discord = require('discord.js');
const client = new Discord.Client();
const parent = ["740309388564365442", ""]
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
        let role = f.roles.cache.get("740310722189328384")
        f.members.cache.forEach(member => {
            if(member)
            {
                member.roles.add(role)
            }
        })
    }
})






client.login(process.env.token)