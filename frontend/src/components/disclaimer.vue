<template>
    <div class="disclaimer">
        <p>
            <strong>Information on the website</strong><br />
            The information on this website is for general information purposes only. The<br />
            information is provided by the operator of this website and while we endeavour to<br />
            keep the information up to date and correct, we make no representations or<br />
            warranties of any kind, express or implied, about the completeness, accuracy,<br />
            reliability, suitability or availability with respect to the website or the<br />
            information, products, services, or related graphics contained on the website for<br />
            any purpose. Any reliance you place on such information is therefore strictly at<br />
            your own risk.<br />
            <br />
            <strong>Google Maps</strong><br />
            This website uses Google Maps API to visually display geographic information. When<br />
            using Google Maps, Google also collects, processes and uses data about the use of<br />
            map functions by visitors. For more information about Google's data processing,<br />
            please refer to the Google Privacy Notice. There you can also change your personal<br />
            data protection settings in the data protection center.<br />
            <br />
            <strong>Links to other websites</strong><br />
            This website contains links to other websites. We have no control over the nature,<br />
            content and availability of those sites. The inclusion of any links does not<br />
            necessarily imply a recommendation or endorse the views expressed within them.<br />
            <br />
            <strong>Personal Information</strong><br />
            This website does not collect any personal information. However, if you contact us<br />
            via email, or other means, we will store your contact information and the content of<br />
            your contact approch for the purpose of communication. We will not share this<br />
            information with any third party.<br />
        </p>
    </div>
</template>

<script setup></script>

<style lang="css" scoped>
.disclaimer {
    position: relative;
    display: flex;
    margin-top: 10vh;
    margin-bottom: 10vh;
    width: 100%;
    justify-content: center;
    text-align: center;
}
p {
    padding: 1em;
    background-color: var(--nav-bg);
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10%;
}
</style>
