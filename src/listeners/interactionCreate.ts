import { CommandInteraction, Client, Interaction, ButtonInteraction } from "discord.js";
import { Commands } from "../Commands";
import { Buttons } from "../Buttons";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }

        if (interaction.isButton()) {
            await handleButton(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        interaction.reply({ content: "An error has occurred" });
        return;
    }

    slashCommand.run(client, interaction);
};

const handleButton = async (client: Client, interaction: ButtonInteraction): Promise<void> => {
    const buttonCommand = Buttons.find(b => b.customId === interaction.customId.split("_")[0]);
    if (!buttonCommand) {
        interaction.reply({ content: "An error has occurred" });
        return;
    }

    buttonCommand.run(client, interaction);
}

