import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(308, 'https://discord.gg/V9uJ72wbu6')
}