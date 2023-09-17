import { GuildBasedChannel } from "discord.js";
import { AudioPlayerStatus, createAudioPlayer, createAudioResource, joinVoiceChannel } from "@discordjs/voice";

export function barka(channel: GuildBasedChannel | undefined) {
    if(channel == undefined || !channel.isVoiceBased()) {
        return;
    }

    const player = createAudioPlayer();
    const resource = createAudioResource('../audio/barka.mp3', {
        metadata: {
            title: 'Barka',
        },
    });
    resource.volume?.setVolume(1.0);
    player.play(resource);

    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    const subscription = connection.subscribe(player);

    setTimeout(() => {
        player.on(AudioPlayerStatus.Idle, () => {
            subscription?.unsubscribe();
            connection.destroy();
        })}, 5_000);

};

module.exports = { barka };
