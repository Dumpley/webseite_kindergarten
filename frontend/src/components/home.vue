<template>
    <div class="home-screen">
        <div class="welcoming-screen">
            <h2>Wilkommen in...</h2>
            <h1>Bullerbü</h1>
            <p>Kindertagespflege in Häger, Werther</p>
            <Button
                text="Jetzt Entdecken!"
                :click="scrollDown"
                icon_class="fa-solid fa-angles-down fa-lg"
            >
            </Button>
        </div>

        <!-- Content to present the service in a more accurate way -->

        <div class="next-page">
            <div class="container-next-page">
                <img src="../assets/images/stoecke.jpg" alt="High quality educational service" />
                <div class="inner-container">
                    <h1>Natur erleben</h1>
                    <p>
                        Waldpädagogik, Naturerfahrung, Pflanzenpflege, Tiere erleben, freies Spiel
                    </p>
                </div>
            </div>
        </div>

        <div class="next-page">
            <div class="container-next-page">
                <div class="inner-container">
                    <h1>Soziale Kompetenz</h1>
                    <p>
                        Gemeinschaft, Rücksichtnahme, Konfliktlösung, Selbstbewusstsein,
                        Selbstständigkeit
                    </p>
                </div>
                <img src="../assets/images/house_playing.jpg" alt="Proffessional daycare service" />
            </div>
        </div>

        <div class="next-page">
            <div class="container-next-page">
                <div class="inner-container">
                    <h1>Kreatives Entfalten</h1>
                    <p>Malen, Basteln, Singen, Tanzen, Musizieren, Lesezeit</p>
                </div>
                <img src="../assets/images/malia.jpg" alt="Proffessional daycare service" />
            </div>
        </div>
        <div class="footer">
            <p class="webseitenname">A name</p>
            <div class="social-media"></div>
            <div class="quicklinks">
                <RouterLink
                    to="/contact"
                    @click="store.setActiveLinkIndex(store.getIdByName('Kontakt'))"
                    >Kontakt</RouterLink
                >
                <RouterLink to="/impressum" @click="store.setHideActiveLink(true)"
                    >Impressum</RouterLink
                >
                <a href="" class="up" @click.prevent="scrollTo()">Scroll up</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useMainStore } from "@/stores/state";
import Button from "@/components/css_components/button.vue";

const store = useMainStore();

//-------------------------------------------- MOUTING FUNCTIONS ------------------------------

onMounted(() => {
    window.addEventListener("scroll", paralaxScrollEffect);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", paralaxScrollEffect);
});

//-------------------------------------------- STYLING LOGIC-----------------------------------

const scrollDown = () => {
    const newContentElement = document.querySelector(".next-page");

    if (newContentElement) {
        newContentElement.scrollIntoView({
            behavior: "smooth",
        });
    }
};

const scrollTo = () => {
    const newContentElement = document.querySelector(".welcoming-screen");

    if (newContentElement) {
        newContentElement.scrollIntoView({
            behavior: "smooth",
        });
    }
};

const paralaxScrollEffect = () => {
    const welcomingScreen = document.querySelector(".welcoming-screen");
    const scrollPosition = window.scrollY;

    // Get current background position
    const style = window.getComputedStyle(welcomingScreen);
    const backgroundPositionY = style.getPropertyValue("background-position-y");

    let currentBackgroundPosition = null;
    if ((currentBackgroundPosition = Number(backgroundPositionY.replace("px", "")) === NaN)) {
        currentBackgroundPosition = 0;
    }

    welcomingScreen.style.backgroundPositionY =
        currentBackgroundPosition + scrollPosition * 0.5 + "px";
};
</script>

<style lang="css" scoped>
.home-screen {
    width: 100%;
}

/* ----------------------------WELCOMING SCREEN--------------------------- */
.welcoming-screen {
    overflow: hidden;
    height: 100vh;
    background-image: url("../assets/images/kinder-spielen-auf-dem-rasen.jpg");
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--text-size);
}

.welcoming-screen h1 {
    font-size: 4rem;
    margin: 0;
}

.welcoming-screen h2 {
    font-size: 1.25rem;
    margin: 0;
}

.welcoming-screen p {
    margin: 0em;
    margin-bottom: 1em;
}

.welcoming-screen button:hover {
    cursor: pointer;
}

.welcoming-screen button div {
    margin-left: 0.5em;
}

/* ----------------------------NEXT PAGE--------------------------- */

.next-page {
    height: 100vh;
    display: flex;
    flex: 1;
    justify-content: center;
}
.container-next-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.container-next-page:last-child {
    height: 90svh;
}

.container-next-page img {
    height: 70%;
    object-fit: cover;
    padding-top: 2em;
}

.container-next-page .inner-container {
    width: 50%;
    padding: 2em;
}

/* ----------------------------FOOTER--------------------------- */

.footer {
    width: 100%;
    height: 10svh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--primary-color);
    border-radius: 2vh 0 0 0;
}

.footer .webseitenname {
    color: var(--text-color);
    font-size: 2rem;
    margin-left: 1em;
    text-transform: uppercase;
    font-weight: 500;
}

.footer .quicklinks {
    display: flex;
    margin-left: auto;
    gap: 100px;
}

.footer .quicklinks a {
    color: var(--text-color);
    text-decoration: none;
}

.footer .quicklinks:last-child {
    margin-right: 2em;
}
</style>
