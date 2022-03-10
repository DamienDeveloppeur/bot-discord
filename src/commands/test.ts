import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"

export const data = 
    new SlashCommandBuilder()
        .setName("test")
        .setDescription("Replies with TOAST!")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("TOAST LOL LA DESCRIPTION EST FAUSSE")
}
