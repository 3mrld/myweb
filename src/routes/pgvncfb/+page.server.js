import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(308, 'https://www.messenger.com/channel/pgvnc')
}