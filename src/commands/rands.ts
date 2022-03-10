import { SlashCommandBuilder } from "@discordjs/builders"
import {Client, CommandInteraction, TextChannel, ThreadChannel } from "discord.js"

export const data = 
    new SlashCommandBuilder()
        .setName("rands")
        .setDescription("Add two numbers")
        .addIntegerOption(option => option.setName("nbr1")
            .setDescription("Add value min")
            .setRequired(true)
        )
        .addIntegerOption(option => option.setName("nbr2")
            .setDescription("Add value max")
            .setRequired(true)
        )


export async function execute(interaction: CommandInteraction, client: Client) {
    if(!interaction?.channelId) return 
    const nbr1 = interaction.options.getInteger("nbr1");
    const nbr2 = interaction.options.getInteger("nbr2");

    let content = "";
    if(nbr1 != null && nbr2 != null) {
        content = "And this is the random value biatch : " + (Math.floor(Math.random() * (nbr2 - nbr1) + nbr1));
    } else {
        content = "TES VALEURS SONT POURRIS!";
    }
    return interaction.reply({
        content: content
    })
}