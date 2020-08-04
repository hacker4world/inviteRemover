const Discord = require('discord.js');
const client = new Discord.Client();
const parent = ["740309388564365442", ""]
let inv = "سيتم تغيير السرفر الاساسي بسبب مشاكل فيه ، ادخل السرفر الجديد \n https://discord.gg/wKh2Yzz"
client.on("ready", () => {
    console.log("ready to work")

})

client.on("message", message => {
    
    if(message.content.includes("https://discord.gg/") && !message.guild.id == "726870430807228446") {
        message.delete()
        message.member.send("كس امك يا كلب").catch(err => console.log("error sending message"))   
    }
    
    
    
})








client.login(process.env.token)