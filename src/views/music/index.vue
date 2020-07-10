<template>
    <div class="ticket">
        <van-nav-bar title="音乐" />
    </div>
</template>

<script>
import { getMv } from "@/api/index";
export default {
    mounted() {
        this.getList();
    },
    methods: {
        getMv() {
            getMv().then(res => {
                console.log(res);
            });
        }
    }
};
</script>