const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "spoiler",
    description: "Turn your text into an annoying spoiler",
    //
    aliases: ["spoilify"],
    // usages: [],
    // botPermissions: [],
    // userPermissions: [],
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args.length) return message.reply({content: `⚠ • Please supply some text!`})
        const txt = `||${args.join(" ").split("").join("||||")}||`
        message.reply({content: `${txt}\n\nCopy: \`${txt}\``})
    }
}