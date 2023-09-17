import { ButtonInteraction, Client, GuildMemberRoleManager, Role } from "discord.js";
import { Button } from "../Button"

export const GiveRole: Button = {
    customId: "giverole",
    run: async (client: Client, interaction: ButtonInteraction) => {
        const roleId = interaction.customId.split("_")[1];

        if (!interaction.guild) {
            const content = `An error has occurred (guild)`;
            await interaction.reply({
                ephemeral: true,
                content
            })
            return;
        }

        const role: Role | undefined = interaction.guild.roles.cache.get(roleId);

        if (!role) {
            const content = `An error has occurred (role)`;
            await interaction.reply({
                ephemeral: true,
                content
            })
            return;
        }

        if (!interaction.member) {
            const content = `An error has occurred (member)`;
            await interaction.reply({
                ephemeral: true,
                content
            })
            return;
        }

        let roles = interaction.member.roles as GuildMemberRoleManager;

        roles.add(role);

        const content = `Giving you role ${role}!`;

        await interaction.reply({
            ephemeral: true,
            content
        });
    }
};
