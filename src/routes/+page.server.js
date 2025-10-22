import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(308, 'https://facebook.com/3mrld')
}