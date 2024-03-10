// store.js
import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: "main",
    state: () => ({
        activeLinkIndex: 0,
        hideActiveLink: false,
        navbar: [
            { id: 0, name: "Home", path: "/" },
            { id: 1, name: "About", path: "/about" },
            { id: 2, name: "Calendar", path: "/calendar" },
            { id: 3, name: "Kontakt", path: "/contact" },
        ],
        numberOfSeats: 0,
        show_modal: false,
        admin: false,
    }),
    getters: {
        getIdByName: (state) => (name) => {
            return state.navbar.find((item) => item.name === name).id;
        },
        getByPath: (state) => (path) => {
            return state.navbar.find((item) => item.path === path);
        },
    },
    actions: {
        setActiveLinkIndex(index) {
            this.hideActiveLink = false;
            this.activeLinkIndex = index;
        },
        setHideActiveLink(hide) {
            this.hideActiveLink = hide;
        },
        setNumberOfSeats(number) {
            this.numberOfSeats = number;
        },
        setAdmin(admin) {
            this.admin = admin;
        },
    },
});
