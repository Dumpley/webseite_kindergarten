<template>
    <div class="contact-page">
        <h1>Kontakt</h1>
        <div class="contact">
            <div class="maps-embed">
                <h2>Adresse der Kindertagespflege:</h2>
                <div v-if="mapIsLoading" class="loadingAnimation">
                    Lädt Karte...
                </div>
                <div class="background-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78420.80986322973!2d8.5016827!3d52.1042955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba18fd4996e941%3A0x8c8aa1b27def49b6!2sH%C3%A4gerstra%C3%9Fe%2010D%2C%2033824%20Werther%20(Westfalen)!5e0!3m2!1sde!2sde!4v1706101889645!5m2!1sde!2sde"
                        width="600"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        @load="toggleLoading"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div class="ways-to-contact">
                <p>Ich freue mich von dir zu hören...</p>
                <div>
                    <a class="email" :title="'Email an ' + email" :href="'mailto:' + email">
                        <i class="fa-solid fa-envelope"></i>
                        <p>Email</p>
                    </a>
                    <a
                        title="Melanies Nummer"
                        class="mobil-nummer"
                        @click="copyToClipBoard(whatsapp)"
                    >
                        <i class="fa-brands fa-square-whatsapp"></i>
                        <p>{{ whatsapp }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref } from "vue";
// ------------------------------------------- CONSTANTS -------------------------------------
const email = "melaniewolf75@yahoo.de";
const whatsapp = "+49 176 2825 2547";
const mapIsLoading = ref(true);

// ------------------------------------------- STYLE ----------------------------------------
const toggleLoading = () => {
    mapIsLoading.value = !mapIsLoading.value;
}

const copyToClipBoard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        Swal.fire({
            title: "Erfolgreich kopiert!",
            text: "Du kannst die Nummer jetzt in WhatsApp einfügen.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your browser prevents copying to clipboard automatically. Make sure you have the newest browser version and this connection is considered secure.",
        });
        console.log("Error " + error);
    }
};
</script>

<style scoped>
.contact-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100svh;
    width: 100%;
    margin-top: var(--margin-top-header);
}
.contact-page .contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
}
.maps-embed {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.loadingAnimation {
    font-size: x-large;
}
.ways-to-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
}
.ways-to-contact div {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
}
.ways-to-contact a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--primary-font-color);
    gap: 0.5em;
    border: 2px solid var(--nav-bg);
    border-radius: 1em;
    width: 10em;
    height: 10em;
    text-transform: lowercase;
}
.ways-to-contact a:hover {
    cursor: pointer;
    transform: scale(1.1);
}
.ways-to-contact a {
    transition: transform 0.3s ease-in-out;
}
.ways-to-contact a p {
    padding-bottom: 0.1em;
}
</style>
