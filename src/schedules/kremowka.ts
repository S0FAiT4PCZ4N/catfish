import { GuildBasedChannel } from "discord.js";

export function kremowka(channel: GuildBasedChannel | undefined, message: string) {
    if(channel == undefined) {
        return;
    }

    if(channel.isTextBased()) {
        channel.send(message);
    }
};

module.exports = { kremowka };
