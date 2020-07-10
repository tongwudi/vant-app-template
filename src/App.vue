<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>

        <footer-bar v-show="$route.meta.footShow" @changeBar="changeBar" />
    </div>
</template>

<script>
import FooterBar from "components/FooterBar";
export default {
    methods: {
        changeBar(index) {
            console.log(index);
        }
    },
    components: {
        "footer-bar": FooterBar
    }
};
</script>