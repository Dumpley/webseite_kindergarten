<template>
    <div>
        <div class="head_button_icons">
            <button @mousedown.prevent="boldtext" class="bold_button">
                <i class="fa-solid fa-bold"></i>
            </button>
            <button @mousedown.prevent="italics" class="italic_button">
                <i class="fa-solid fa-italic"></i>
            </button>
            <button @mousedown.prevent="underlinetext" class="underline_button">
                <i class="fa-solid fa-underline"></i>
            </button>
            <button @click="submit" class="submit_button">
                <i class="fa-solid fa-check"></i>
            </button>
        </div>
        <textarea v-model="text" ref="textArea" @input="emitValue"></textarea>
    </div>
</template>

<script>
/**
 * @name TextEditior - A text editor component with basic text editing features
 * @param {String} sample_text - Optional. The sample text to be displayed in the text editor. Default is "Type here..."
 * @param {Function} onsubmit - Optional. The function to be called when the text is submitted. The editor will <b>pass the user-text into the function</b>. Uses html tags for text formatting. Default is an empty function.
 * @param {Number} max_length - Optional. The maximum length of the text that can be entered into the text editor. Default is 100.
 */
export default {
    name: "TextEditor",
    data() {
        return {
            text: this.sample_text,
        };
    },
    props: {
        sample_text: {
            type: String,
            default: "Type here...",
        },
        onsubmit: {
            type: Function,
            default: () => {},
        },
        max_length: {
            type: Number,
            default: 100,
        },
    },
    methods: {
        boldtext() {
            // Erhalten Sie die aktuelle Cursorposition
            const startPos = this.$refs.textArea.selectionStart;
            const endPos = this.$refs.textArea.selectionEnd;

            // Fügen Sie das Tag an der Cursorposition ein
            this.text =
                this.text.substring(0, startPos) +
                "<b>" +
                this.text.substring(startPos, endPos) +
                "</b>" +
                this.text.substring(endPos);
        },
        italics() {
            const startPos = this.$refs.textArea.selectionStart;
            const endPos = this.$refs.textArea.selectionEnd;

            this.text =
                this.text.substring(0, startPos) +
                "<i>" +
                this.text.substring(startPos, endPos) +
                "</i>" +
                this.text.substring(endPos);
        },
        underlinetext() {
            const startPos = this.$refs.textArea.selectionStart;
            const endPos = this.$refs.textArea.selectionEnd;

            this.text =
                this.text.substring(0, startPos) +
                "<u>" +
                this.text.substring(startPos, endPos) +
                "</u>" +
                this.text.substring(endPos);
        },
        submit() {
            this.onsubmit(this.text);
            
        },
    },
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.head_button_icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
}
.head_button_icons button {
    padding: 0.5em;
    border-radius: 10%;
    border: none;
    background-color: var(--body-bg);
    color: var(--primary-background-color);
    transition: transform 0.3s ease-in-out;
}
.head_button_icons button:hover {
    cursor: pointer;
    transform: scale(1.1);
}
.head_button_icons button i {
    font-size: 1.5em;
}
.head_button_icons button :focus {
    outline: none;
}
div[contenteditable="true"] {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 200px;
}
</style>
