<template>
  <div class="ticket"></div>
</template>

<script>
// import { getMv } from "@/api/index";
export default {
  mounted() {
    // this.getList();
  },
  methods: {
    getList() {
      getMv().then(res => {
        console.log(res);
      });
    }
  }
};
</script>