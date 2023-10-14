import { Client } from "discord.js";
import channels from "../channels.json";
import { kremowka } from "../schedules/kremowka";

export default (client: Client): void => {
    client.on("voiceStateUpdate", (oldState, newState) => {
        if(!oldState.member) return;
        if(oldState.member.user.bot) return;
        if(!newState.channelId) return;
        for(let i = 0; i < channels.length; i++) {
            if(newState.channelId === channels[i].channelId) {
                const guild = client.guilds.cache.get('1032709998146502696');

                if(guild != undefined) {
                    const channel = guild.channels.cache.get('1162874505664938055');

                    kremowka(channel, `<@&${channels[i].roleId}> Ktoś czeka na grę!`);
                }
            }
        }
    });
}
