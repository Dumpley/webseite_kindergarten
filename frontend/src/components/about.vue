<template>
    <div class="about-wrapper">
        <h1>{{ adminStore.about_page.id }}</h1>
        <h2>{{ adminStore.about_page.title }}</h2>
        <div class="image-text-container">
            <img
                src="../assets/images/vorderansicht-des-weiblichen-touristen-mit-rosa-tasche-an-der-rosa-wand.jpg"
                alt="Sample image"
            />

            <Text-Editor
                class="text-editor"
                v-if="editor_mode"
                :sample_text="adminStore.about_page.about_you_description"
                :max_length="100"
                :onsubmit="submit"
            ></Text-Editor>

            <p v-if="!editor_mode" v-html="adminStore.about_page.about_you_description"></p>
            <button v-if="!editor_mode" @click="editor_mode = !editor_mode" class="editing_button">
                Edit Text
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TextEditor from "@/components/css_components/text_editor.vue";
import { useAdminStore } from "@/stores/admin_editing_state";

const editor_mode = ref(false);

const adminStore = useAdminStore();

const submit = (editied_text) => {
    adminStore.about_page.about_you_description = editied_text;
    editor_mode.value = false;
};
</script>

<style lang="css" scoped>
.about-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin-top: var(--margin-top-header);
}
.image-text-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2em;
}
.image-text-container img {
    width: 20em;
    height: 20em;
    object-fit: cover;
    border-radius: 50%;
}
.image-text-container p {
    width: 20em;
    text-align: justify;
    white-space: pre-line;
}
.text-editor {
    width: 20em;
}
</style>
