const Discord = require('discord.js');
const { measureMemory } = require('vm');
const { Server } = require('http');
const { settings } = require('cluster');
const { exists, Stats, stat } = require('fs');
const { error } = require('console');
const { removeListener } = require('process');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
require('events').EventEmitter.defaultMaxListeners = 15;
const invitelink = 'https://discord.com/api/oauth2/authorize?client_id=708910787393224734&permissions=0&scope=bot'
var prefix = "="
var server = undefined
client.setMaxListeners(0);
var servr = undefined
var rps = ["rock" , "paper" , "scissors" , "rock" , "paper" , "scissors" , "rock" , "paper" , "scissors"]
const permsArray = ["CREATE_INSTANT_INVITE", "MANAGE_CHANNELS", "MANAGE_WEBHOOKS", "READ_MESSAGE_HISTORY", "SEND MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS" ]

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