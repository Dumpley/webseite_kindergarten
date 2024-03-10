import { defineStore } from "pinia";

export const useAdminStore = defineStore({
    id: "admin_editor",
    state: () => ({
        about_page: {
            id: "about",
            title: "This is Melanie",
            about_you_description: "sample text",
        },
        contact_page: {
            id: "contact",
            motivation_text: "Ich freue micht von dir zu hören!",
            contact_details: {
                email_cover_text: "Email",
                email: "sample@email.com",
                number_cover_text: "Telefon",
                number: "123456789",
                adresse: "Musterstraße 123, 12345 Musterstadt",
                adresse_maps_link:
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78420.80986322973!2d8.5016827!3d52.1042955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba18fd4996e941%3A0x8c8aa1b27def49b6!2sH%C3%A4gerstra%C3%9Fe%2010D%2C%2033824%20Werther%20(Westfalen)!5e0!3m2!1sde!2sde!4v1706101889645!5m2!1sde!2sde",
            },
        },
        home_page: {
            id: "home",
            page_1: {
                head: "Wilkommen in...",
                body: "Bullerbü",
                foot: "Kindertagespflege in Häger, Werther",
            },
            page_2: {
                head: "Natur erleben",
                body: "Waldpädagogik, Naturerfahrung, Pflanzenpflege, Tiere erleben, freies Spiel",
            },
            page_3: {
                head: "Soziale Kompetenz",
                body: "Gemeinschaft, Rücksichtnahme, Konfliktlösung, Selbstbewusstsein, Selbstständigkeit",
            },
            page_4: {
                head: "Kreativität",
                body: "Malen, Basteln, Singen, Tanzen, Musizieren, Lesezeit",
            }
        },
        impressum_page: {
            id: "impressum",
            title: "Impressum",
            impressum_text: "Melanie Musterstraße 123 12345 Musterstadt",
            text_details: "This website is designed and developed by Jarome Wolf. This website belongs to Melanie Wolf. If you need to inform me about something I would be happy to hear from you through Email. If you just want to support what I do give me a follow on Instagram.",
        },
    }),
    actions: {
        setAdmin(admin) {
            this.admin = admin;
        },
    },
});
