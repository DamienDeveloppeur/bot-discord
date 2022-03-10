import { Client} from "discord.js"
import config from "./config"
import * as commandModules from "./commands"
import { sentenceRamdom } from "./data/sentenceRamdom";
const commands = Object(commandModules)

export const client = new Client({intents : ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]})

client.once("ready", () => console.log("test"))

/**
 * Bot interact with function created
 */
client.on("interactionCreate", async interaction => {
    if(!interaction.isCommand()) return
    const { commandName } = interaction;
    commands[commandName].execute(interaction,client)
})
/**
 * Listen message send
 * return : 
 */
//
client.on('message', (message) => {
    //if exp is not null : use the non-null assertion operator ! to coerce away those types:
    if (message.mentions.has(client.user!.id)) {
        message.channel.send(sentenceRamdom[(Math.floor(Math.random() *  sentenceRamdom.length - 1))]);
    }
});

client.login(config.DISCORD_TOKEN)