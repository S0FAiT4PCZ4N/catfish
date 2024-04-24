import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

function evalRoll(roll: number): string {
    return "Nothing happens!";
}

export const Cast: Command = {
    name: "cast",
    description: "Cast a spell and roll D20",
    options: [{
            type: 3,
            name: "spell",
            description: "Spell to cast",
            required: true
    }],
    run: async (client: Client, interaction: CommandInteraction) => {
        if(interaction.options.data[0].type != 3) {
            const content = "An error has occurred!";
            await interaction.reply({
                ephemeral: true,
                content
            });
        }
        const spell = interaction.options.data[0];
        const roll = Math.random() * (20 - 1) + 1;
        const content = `${interaction.user} cast ${spell} and rolled ${roll} - ${evalRoll(roll)}`;

        await interaction.reply({
            ephemeral: true,
            content
        });
    }
};
