<template>
    <div v-if="store.$state.show_modal" class="modal">
        <div class="modal-content">
            <span @click="store.$state.show_modal = false">&times;</span>
            <h1>Sign in</h1>
            <p>Sign in to access the full functionality of the app.</p>
            <form @submit.prevent>
                <label for="uname"><b>Benutzername</b></label>
                <input
                    type="text"
                    placeholder="Email eingeben"
                    v-model="email"
                    name="uname"
                    required
                />

                <label for="psw"><b>Passwort</b></label>
                <input
                    type="password"
                    placeholder="Passwort eingeben"
                    v-model="password"
                    name="psw"
                    required
                />
                <button type="submit" @click="register">Anmelden</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from "@/stores/state";
import { ref, watch } from "vue";
import AdminService from "@/services/AdminService";
import localstorage from "@/localstorage/localstorage";

const email = ref("");
const password = ref("");
const store = useMainStore();

async function register() {
    try {
        await AdminService.register({
            email: email.value,
            password: password.value,
        });
        console.log("registered");
        store.setAdmin(true);
        localstorage.saveLoginDetails(email);
    } catch (error) {
        console.log(error);
    }
}

console.log("pop up loaded");
</script>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: var(--secondary-color);
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    border-radius: 1em;
}

.modal-content span {
    text-align: center;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.modal-content span:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.modal-content input[type="text"],
.modal-content input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.modal-content button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

.modal-content button:hover {
    opacity: 0.8;
}
</style>
