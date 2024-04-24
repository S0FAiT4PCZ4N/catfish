import { REST, Routes } from "discord.js";
import { Command } from "./Command"
import { Commands } from "./Commands";
import 'dotenv/config'

const token = process.env.TOKEN;
const client_id = process.env.CLIENT_ID;

let commands: Command[] = []

for (const command of Commands) {
    commands.push(command);
}

if(token) {
    const rest = new REST().setToken(token);

    if (client_id) {
        (async () => {
            try {
                console.log(`Refreshing ${commands.length} application (/) commands`);

                const data = await rest.put(
                    Routes.applicationCommands(client_id),
                    { body: commands }
                )

                console.log(`Reloaded ${commands.length} commands`);
            } catch (err) {
                console.error(err);
            }
        })
    }
}

