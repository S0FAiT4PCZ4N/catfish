import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import { barka } from "../schedules/barka";

export const Barka: Command = {
    name: "barka",
    description: "Plays barka",
    run: async (client: Client, interaction: CommandInteraction) => {
        const guild = client.guilds.cache.get('1032709998146502696');

        if(guild == undefined) { return; }

        const audioChannel = guild.channels.cache.get('1046109340437848115');
        barka(audioChannel);

        const content = "Playing barka!";
        await interaction.reply({
            ephemeral: true,
            content
        });
    }
};
