import { GuildBasedChannel } from "discord.js";
import { AudioPlayerStatus, StreamType, createAudioPlayer, createAudioResource, joinVoiceChannel } from "@discordjs/voice";
import { createReadStream } from "fs";

export function barka(channel: GuildBasedChannel | undefined) {
    if(channel == undefined || !channel.isVoiceBased()) {
        return;
    }

    const player = createAudioPlayer();
    let resource = createAudioResource(createReadStream(__dirname + '/../audio/barka.ogg')); 
    resource.volume?.setVolume(1.0);
    player.play(resource);

    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    const subscription = connection.subscribe(player);

    player.on('error', (error) => {
        console.error(`Error: ${error.message}`);
        subscription?.unsubscribe();
        connection.destroy();
    });

    player.on(AudioPlayerStatus.Idle, () => {
        subscription?.unsubscribe();
        connection.destroy();
    });
};

module.exports = { barka };
