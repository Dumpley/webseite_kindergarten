<template>
    <div class="impressum-page">
        <section><div class="blob"></div></section>
        <h1>Impressum</h1>
        <p>
            This website is designed and developed by <strong>Jarome Wolf</strong>. This website
            belongs to Melanie Wolf. <br />
            If you need to inform me about something I would be happy to hear from you through
            <strong>Email</strong>. <br />
            If you just want to support what I do give me a follow on <strong>Instagram</strong>.
        </p>
        <div class="ways-to-contact">
            <a class="email" href="mailto:dumpleygames@gmail.com">
                <i class="fa-solid fa-envelope"></i>
                <p>Email</p>
            </a>
            <a class="instagram" href="https://www.instagram.com/jarome.wolf" target="_blank">
                <i class="fa-brands fa-square-facebook"></i>
                <p>instagram</p>
            </a>
        </div>
        <div class="sources">
            <p>
                Sources:<br />
                <strong>Icons:</strong>
                <a href="https://fontawesome.com/" target="_blank">Fontawesome</a><br />
                <strong>Children playing picture Home-Screen:</strong>
                <a
                    href="https://de.freepik.com/fotos-kostenlos/kinder-spielen-auf-dem-rasen_854912.htm#query=pressfoto&position=3&from_view=search&track=sph&uuid=a971dedd-cb1c-4b59-9a51-4d918bdc9bb7"
                    >Bild von pressfoto</a
                >
                auf Freepik<br />
                <strong>Woman with pink bag</strong>
                <a
                    href="https://de.freepik.com/fotos-kostenlos/vorderansicht-des-weiblichen-touristen-mit-rosa-tasche-an-der-rosa-wand_13766751.htm#query=holidays&position=3&from_view=search&track=sph&uuid=9094699d-8742-4194-a864-501860730dcd"
                    >Bild von mdjaff</a
                >
                auf Freepik<br />
                <strong>Fonts:</strong>
                <a href="https://fonts.google.com/" target="_blank">Google Fonts</a><br />
                <strong>Frontend-Building:</strong>
                <a href="https://vitejs.dev/" target="_blank">Vite</a><br />
                <strong>Framework:</strong> <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a
                ><br />
            </p>
            <p>
                <router-link to="/disclaimer">Datenschutz und Disclaimer</router-link>
            </p>
            Bist du ein Host? Dann kannst du dich
            <Button style="margin-bottom: 1em" text="hier anmelden!" :click="sign_in_pop_up_open" icon_class="" />
            <sign_in_pop_up></sign_in_pop_up>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from "@/stores/state";
import sign_in_pop_up from "./sign_in_pop_up.vue";
import Button from "@/components/css_components/button.vue";

const store = useMainStore();

const sign_in_pop_up_open = () => {
    console.log(store.$state.show_modal);
    store.$state.show_modal = true;
    console.log("pop up opened");
};
</script>

<style scoped>
.impressum-page {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
}
.ways-to-contact {
    display: flex;
    flex-direction: row;
    gap: 1em;
}
.ways-to-contact a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--primary-font-color);
    gap: 0.5em;
    border: 2px solid var(--primary-font-color);
    border-radius: 1em;
    width: 9em;
    height: 9em;
    text-transform: lowercase;
}

.ways-to-contact a:hover {
    cursor: pointer;
    transform: scale(1.1);
}
.ways-to-contact a {
    transition: transform 0.3s ease-in-out;
}

.sources {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    text-align: center;
}
.sources a {
    color: var(--text-color-secondary);
    padding-left: 0.5em;
}
.sources a:hover {
    color: var(--body-bg);
}

/* ----------------------------BLOB--------------------------- */
.impressum-page section {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.impressum-page section .blob {
    width: 90vh;
    height: 90vh;
    background: var(--nav-bg);
    box-shadow: 0 20px 5px 5px rgba(0, 0, 0, 0.2);
    animation: animate 10s ease-in-out infinite;
    transition: all 5s ease-in-out;
}

@keyframes animate {
    0% {
        border-radius: 50% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
        border-radius: 40% 40% 80% 50% / 50% 60% 70% 40%;
    }
    100% {
        border-radius: 50% 40% 30% 70% / 60% 30% 70% 40%;
    }
}
</style>
