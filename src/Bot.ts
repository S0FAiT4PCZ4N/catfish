import { Client, ClientOptions, GatewayIntentBits } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import voiceStateUpdate from "./listeners/voiceStateUpdate";
import 'dotenv/config'

const token = process.env.TOKEN;

console.log("Catfish is getting underwater...");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
    ]
});

ready(client);
interactionCreate(client);
voiceStateUpdate(client)

client.login(token);

