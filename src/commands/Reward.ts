
import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Reward: Command = {
    name: "reward",
    description: "Grants a reward",
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "https://r.mtdv.me/catfish-nitro";

        await interaction.reply({
            ephemeral: true,
            content
        });
    }
};
