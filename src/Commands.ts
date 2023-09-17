import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { Reward } from "./commands/Reward";
import { RoleButton } from "./commands/RoleButton"

export const Commands: Command[] = [Hello, RoleButton, Reward];
