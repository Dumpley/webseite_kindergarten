<template>
    <div>
        <button type="button" @click="click">
            <i :class="icon_class"></i>
            <div>{{ text }}</div>
        </button>
    </div>
</template>

<script>
/**
 * @name Button - A button component with icon animation. Basic styling applied
 * @param {String} text - The text to be displayed on the button
 * @param {Function} click - The function to be called when the button is clicked. 
 * Watch out: There is a difference between: "clickEvent()" and "clickEvent"!
 * @param {String} icon_class - The class of the icon to be displayed on the button. Using any imported icon class from the fontawesome library
 */
export default {
    name: "Button",
    props: {
        text: String,
        click: Function,
        icon_class: String,
    },
};
</script>

<style scoped>
button {
    align-items: center;
    overflow: hidden;
    display: flex;
    font-size: larger;
    padding: 0.5em 0.75em 0.5em 0.75em;
    border: none;
    border-radius: 100vh;
    transition: transform 0.3s ease-in-out;
}
button i {
    position: relative;
    transition: transform 0.3s ease-in-out;
}

button:hover i {
    animation: moveUpDown 0.5s ease-in-out forwards;
}

button:hover {
    cursor: pointer;
    transform: scale(1.1);
}

/*
    Animation for the icon
*/
@keyframes moveUpDown {
    0% {
        transform: translateY(0vh);
    }
    50% {
        transform: translateY(5vh);
    }
    51% {
        transform: translateY(-5vh);
    }
    100% {
        transform: translateY(0vh);
    }
}
</style>
