import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(308, 'https://drive.google.com/drive/folders/1izGLk2DfhFJ8J33zfmGs67IkjBy2vPRi?usp=drive_link')
}