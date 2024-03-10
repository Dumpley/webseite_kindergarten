<script setup>
import { ref, watchEffect, watch } from "vue";
import { useRoute } from "vue-router";
import { useMainStore } from "./stores/state";
import localstorage from "./localstorage/localstorage.js";

//TODO: Add html for "Source of the background image": "picture by pressfoto from freepik.com"

//---------------------------DATA RETREIVAL------------------------------

const store = useMainStore();
const numberOfSeats = store.numberOfSeats;
const isAdmin = localstorage.recallLoginDetails();

if (isAdmin) {
    //update state:
    store.setAdmin(true);
} else {
    store.setAdmin(false);
}
//---------------------------NAVBAR LOGIC--------------------------------

const toggleBar = ref(false);

const activeLink = ref("");
const route = useRoute();

const setActiveLinkIndex = (index) => {
    store.setActiveLinkIndex(index);
};

const closeNav = (event) => {
    if (!event.target.closest("nav")) {
        toggleBar.value = false;
    }
};

watchEffect(() => {
    if (route) {
        activeLink.value = route.path;
        const activeLinkIndex = store.getByPath(activeLink.value);
        try {
            setActiveLinkIndex(activeLinkIndex.id);
        } catch (error) {
            console.log(error);
            store.setHideActiveLink(true);
        }
    } else {
        console.log(route);
    }
});

watch(toggleBar, (newValue) => {
    if (newValue) {
        window.addEventListener("click", closeNav);
    } else {
        window.removeEventListener("click", closeNav);
    }
});
</script>

<template>
    <div class="container">
        <button class="nav-button" @click.stop="toggleBar = !toggleBar">
            <i class="fa-solid fa-bars fa-2xl"></i>
        </button>
        <transition name="slide">
            <nav v-if="toggleBar">
                <div
                    v-show="store.hideActiveLink === false"
                    class="active-link"
                    :style="{ '--top-value': store.activeLinkIndex * 3 + 'em' }"
                ></div>
                <div v-for="(item, index) in store.navbar" :key="item.id">
                    <router-link :to="item.path" @click="setActiveLinkIndex(index)">{{
                        item.name
                    }}</router-link>
                </div>
            </nav>
        </transition>
        <header>
            <div class="news-bar">
                <p v-if="numberOfSeats <= 0">
                    aktuell sind leider <strong>keine</strong> Plätze frei. Melden sie sich trotzdem
                    bei Interesse:
                </p>
                <p v-if="numberOfSeats > 0">
                    <strong>aktuell sind noch {{ numberOfSeats }} Plätze frei.</strong> Jetzt
                    anmelden!
                </p>
                <router-link to="/contact">Kontakt</router-link>
                <p v-if="store.$state.admin">ADMINSTATE</p>
            </div>
        </header>
        <RouterView></RouterView>
    </div>
</template>

<style>
/* ----------------------------HEADER NEWS BAR--------------------------- */
.news-bar {
    background-color: var(--body-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 1em;
    color: var(--primary-font-color);
    padding: 0.5em;
    text-align: center;
    text-transform: capitalize;
    border-bottom: white 2px solid;
    z-index: 1;
}
.news-bar a {
    color: var(--primary-font-color);
    margin-left: 0.5em;
}
.news-bar a:hover {
    color: var(--secondary-color);
}

.news-bar p:last-child {
    text-align: right;
    width: 19em;
}

/* ----------------------------GLOBAL--------------------------- */

.container {
    display: flex;
    flex-direction: row;
}

.container .nav-button {
    position: fixed;
    border: 2px solid white;
    background-color: var(--nav-bg);
    width: 4em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    border-radius: 0 0 1.5em 0;
    cursor: pointer;
    z-index: 2;
}

/* ----------------------------GLOBAL COMPONENTS-----------------*/

.editing_button {
    background-color: var(--secondary-color);
    color: var(--text-dark);
    border: none;
    padding: 0.5em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.editing_button:hover {
    transform: scale(1.1);
}

/* ----------------------------NAVBAR--------------------------- */

nav {
    overflow: hidden;
    position: fixed;
    height: 100svh;
    top: 0;
    background-color: var(--nav-bg);
    display: grid;
    grid-template-rows: repeat(4, 3em);
    grid-template-columns: 200px;
    z-index: 3;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}

nav div {
    top: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 0.5em;
    position: relative;
}

nav div a {
    text-decoration: none;
    color: var(--primary-font-color);
}

nav .active-link {
    background-color: var(--body-bg);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    top: calc(var(--top-value) + 1em);
    left: 0;
    width: 100%;
    height: calc(3em - 1em);
    position: absolute;
    transition: top 0.3s ease; /* Add transition effect to top property */
}

nav .active-link::before,
nav .active-link::after {
    --border-radius: 1rem;

    content: "";
    position: absolute;
    width: var(--border-radius);
    height: var(--border-radius);
    right: 0rem;
    background: var(--nav-bg);
}

nav .active-link::before {
    border-radius: 0 0 var(--border-radius);
    top: calc(var(--border-radius) * (-1));
    box-shadow: 5px 5px 0 5px var(--body-bg);
}

nav .active-link::after {
    border-radius: 0 var(--border-radius) 0 0;
    bottom: calc(var(--border-radius) * (-1));
    box-shadow: 5px -5px 0 5px var(--body-bg);
}

/* ----------------------------ROUTER-VIEW--------------------------- */

.grid-container.shrink {
    grid-template-columns: 1fr 3fr;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: grid-template-columns 1s;
}

/* ----------------------------SWALPOPUP--------------------------- */
.swal2-popup {
    background-color: var(--secondary-color);
    color: #333;
    font-size: large;
}

.swal2-icon.swal2-success [class^="swal2-success-circular-line"] {
    background-color: transparent !important;
}

.swal2-icon.swal2-success .swal2-success-ring {
    border-color: #00a862 !important; /* Farbe des Rings */
}

.swal2-icon.swal2-success .swal2-success-line-tip,
.swal2-icon.swal2-success .swal2-success-line-long {
    background-color: #00a862 !important; /* Farbe der Linien */
}
.swal2-confirm {
    background-color: var(--body-bg) !important; /* Hintergrundfarbe des Bestätigungsbuttons */
    color: var(--primary-font-color) !important;
    border: none !important;
}
.swal2-confirm:focus {
    box-shadow: none !important;
}
.swal2-confirm:hover {
    background-color: var(--body-bg) !important;
    color: var(--primary-font-color) !important;
    border: none !important;
    transform: scale(1.2) !important;
    transition: transform 0.3s ease-in-out !important;
}
</style>
