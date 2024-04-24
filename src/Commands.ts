import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { Reward } from "./commands/Reward";
import { RoleButton } from "./commands/RoleButton"
import { Barka } from "./commands/Barka";
import { Cast } from "./commands/Cast";

export const Commands: Command[] = [Hello, RoleButton, Reward, Barka, Cast];
