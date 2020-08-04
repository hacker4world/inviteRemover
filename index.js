const Discord = require('discord.js');
const client = new Discord.Client();

let inv = "سيتم تغيير السرفر الاساسي بسبب مشاكل فيه ، ادخل السرفر الجديد \n https://discord.gg/wKh2Yzz"
client.on("ready", () => {
    console.log("ready to work")

})



client.on("message", message => {
    if(!message.guild.id == "726870430807228446")
    {
        if(message.content.includes("https://discord.gg/") && !message.guild.id == "726870430807228446") {
            message.delete()
            message.member.send("كس امك يا كلب").catch(err => console.log("error sending message"))   
        }
    }
    
    
})

client.on("message", message=> 
{
    if(message.content == "!send" && message.guild.id == "726870430807228446")  
    {
        let tar = client.guilds.cache.get("726870430807228446")
        tar.members.cache.forEach(member => {
            if(member)
            {
                member.send("سيتم تغيير السرفر الاساسي بسبب مشاكل فيه ، ادخل السرفر الجديد \n https://discord.gg/wKh2Yzz")
            }
        })
    }
})




client.login(process.env.token)