import { Client, GuildBasedChannel } from "discord.js";
import { Commands } from "../Commands";
import cron from "cron";
import { kremowka } from "../schedules/kremowka";
import { barka } from "../schedules/barka";

export default (client: Client): void => {
    client.on("ready", async () => {
        if(!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        console.log(`${client.user.username} is online`);

        const guild = client.guilds.cache.get('1032709998146502696');

        if(guild != undefined) {
            const channel = guild.channels.cache.get('1139697236033409024');

            kremowka(channel, "The bot has started");
        }

        let scheduledMessage = new cron.CronJob('00 37 21 * * *', () => {

            if(guild == undefined) { return; }

            const channel = guild.channels.cache.get('1053831836381483079');
            kremowka(channel, "Pora na kremówkę");

            const audioChannel = guild.channels.cache.get('1046109340437848115');
            barka(audioChannel);
        })

        scheduledMessage.start();
    });
}
