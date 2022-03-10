import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"
import { sentenceRamdom } from "../data/sentenceRamdom";
export const data = 
    new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Hubert vous répondra !")

        //
export async function execute(interaction: CommandInteraction) {
    return interaction.reply(sentenceRamdom[(Math.floor(Math.random() *  sentenceRamdom.length - 1))])
}