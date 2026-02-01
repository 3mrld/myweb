import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(308, 'https://drive.google.com/drive/folders/1jWqpkl3HSHa84Ji6fRHttGAkss6JlkDM?usp=sharing')
}