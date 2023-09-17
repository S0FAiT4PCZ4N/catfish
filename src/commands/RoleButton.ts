import { CommandInteraction, Client, CommandInteractionOption, ButtonBuilder, ButtonStyle, ActionRowBuilder, ActionRowComponent } from "discord.js";
import { Command } from "../Command";

export const RoleButton: Command = {
    name: "rolebutton",
    description: "Creates a \"get role\" button",
    dmPermission: false,
    defaultMemberPermissions: "ManageRoles",
    options: [{
        type: 8,
        name: "role",
        description: "Role to give",
        required: true
    }],
    run: async (client: Client, interaction: CommandInteraction) => {
        let role: CommandInteractionOption; //: Role
        if(interaction.options.data[0].type != 8) { //Check if really is Role
            const content = "An error has occurred";
            await interaction.reply({
                ephemeral: true,
                content
            });
        }
        
        role = interaction.options.data[0];

        const content = `Get role ${role.role}`;

        const confirm = new ButtonBuilder()
            .setCustomId(`giverole_${role.role?.id}`)
            .setLabel("Get the role!")
            .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder<ButtonBuilder>({ components: [confirm] })

        await interaction.reply({
            ephemeral: false,
            content,
            components: [row]
        });
    }
};
