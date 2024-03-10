<template>
    <div class="calendar-wrapper">
        <h1>Kalendar</h1>
        <div
            class="wrapper"
            @wheel="scrollHorizontally"
            @mouseenter="enableHorizontalScroll"
            @mouseleave="disableHorizontalScroll"
        >
            <div class="item">
                <div class="pic">
                    <img
                        src="@/assets/images/vorderansicht-des-weiblichen-touristen-mit-rosa-tasche-an-der-rosa-wand.jpg"
                        alt=""
                    />
                </div>
                <div class="headline">Ferientage</div>
                <div class="date">12.01.24 - 18.01.24</div>
                <div class="description">An diesen Tagen wird es keine Kindertagespflege geben. Ich wünsch euch einen schönen Urlaub.</div>
            </div>
            <div class="item">
                <div class="pic"></div>
                <div class="headline">a headline</div>
                <div class="date">12.01.24 - 12.01.24</div>
                <div class="description">some text</div>
            </div>
            <div class="item">
                <div class="pic"></div>
                <div class="headline">a headline</div>
                <div class="date">12.01.24 - 12.01.24</div>
                <div class="description">some text</div>
            </div>
            <div class="item">
                <div class="pic"></div>
                <div class="headline">a headline</div>
                <div class="date">12.01.24 - 12.01.24</div>
                <div class="description">some text</div>
            </div>
            <div class="item">
                <div class="pic"></div>
                <div class="headline">a headline</div>
                <div class="date">12.01.24 - 12.01.24</div>
                <div class="description">some text</div>
            </div>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore dicta
            recusandae nam! Adipisci cumque magnam expedita recusandae quis tenetur? Quasi possimus
            consectetur quae tempora rem ipsa necessitatibus saepe esse?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse, dolores blanditiis
            nostrum laudantium unde impedit quia, corporis, reiciendis consectetur beatae
            perspiciatis earum facere ad labore quae inventore omnis! Numquam!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aperiam dolores possimus
            asperiores. Distinctio itaque obcaecati suscipit! Ipsum perferendis laborum fugiat?
            Corporis, earum aut? Porro maiores officiis numquam possimus dicta.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel ratione officia
            repudiandae, possimus repellat perferendis facilis ea quis nam sapiente in
            exercitationem assumenda obcaecati corrupti quaerat laboriosam consequuntur
            voluptatibus?
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";
/* ----------------------------SCROLL LOGIC--------------------------- */

const horizontal = ref(false);

function enableHorizontalScroll() {
    horizontal.value = true;
}
function disableHorizontalScroll() {
    horizontal.value = false;
}

let scrollAmount = 0;
let scrollTarget = null;

function scrollHorizontally(event) {
    if (horizontal.value) {
        event.preventDefault();

        // Berechnen Sie die Menge des Scrollens
        const delta = event.deltaY;
        scrollAmount += delta;

        // Speichern Sie das Ziel des Scrollens
        scrollTarget = event.target;

        // Überprüfen Sie, ob das Ende der Kartenansicht erreicht ist
        if (scrollTarget.scrollLeft + scrollTarget.offsetWidth >= scrollTarget.scrollWidth) {
            // Beenden Sie den Scroll-Event
            horizontal.value = false;
            return;
        }

        // Starten Sie die Animation
        window.requestAnimationFrame(smoothScroll);
    }
}

function smoothScroll() {
    // Überprüfen Sie, ob ein Scroll-Ziel gesetzt ist
    if (scrollTarget) {
        // Scrollen Sie ein kleines Stück
        scrollTarget.scrollLeft += scrollAmount / 10;

        // Reduzieren Sie die Menge des Scrollens
        scrollAmount *= 0.9;

        // Wenn es noch etwas zu scrollen gibt, fordern Sie die nächste Animation an
        if (Math.abs(scrollAmount) > 0.5) {
            window.requestAnimationFrame(smoothScroll);
        }
    }
}
</script>

<style lang="css" scoped>
.calendar-wrapper {
    width: 100%;
    height: 100%;
    margin-top: var(--margin-top-header);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wrapper {
    width: 100%;
    display: flex;
    overflow-x: auto;
    border: 2px solid var(--nav-bg);
}
.wrapper > * {
    pointer-events: none;
}

.wrapper .item {
    background: rgb(106, 118, 62);
    display: flex-start;
    justify-content: center;
    align-items: center;
    min-width: 20em;
    height: 25em;
    text-align: center;
    margin-right: 2px;
    border-radius: 2em;
    overflow: hidden;
    margin-left: 1em;
}
.wrapper:last-child {
    margin-right: 1em;
}

.wrapper .item .pic {
    width: 100%;
    height: 60%;
    background: white;
    overflow: hidden;
}
.wrapper .item .pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
} 
.wrapper .item .headline {
    font-size: 1.5em;
    font-weight: bold;
}
.wrapper .item .date {
    font-size: 0.8em;
    font-weight: 500;
}
.wrapper .item .description {
    font-size: 1em;
}
</style>
