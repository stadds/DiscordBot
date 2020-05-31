require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("./models");

const Discord = require("discord.js");
const moment = require("moment.js")
const client = new Discord.Client();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {

    console.log(msg); 
    let {content} = msg;
    if(content === "ping"){
        msg.reply("pong");
    }
})

client.login(process.env.BOT_TOKEN);