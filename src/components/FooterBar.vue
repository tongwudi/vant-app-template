<template>
    <van-tabbar v-model="active" route @change="onChange">
        <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/photo" icon="photo-o">图库</van-tabbar-item>
        <van-tabbar-item replace to="/music" icon="music-o">音乐</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        };
    },
    methods: {
        onChange(index) {
            this.$emit("changeBar", index);
        }
    }
};
</script>

<style lang="less" scoped>
</style>