import { GuildBasedChannel } from "discord.js";
import { createAudioPlayer, createAudioResource, joinVoiceChannel } from "@discordjs/voice";

export function barka(channel: GuildBasedChannel | undefined) {
    if(channel == undefined || !channel.isVoiceBased()) {
        return;
    }

    const player = createAudioPlayer();
    const resource = createAudioResource('../audo/barka.mp3');

    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    player.play(resource);

    const subscription = connection.subscribe(player);
};

module.exports = { barka };
