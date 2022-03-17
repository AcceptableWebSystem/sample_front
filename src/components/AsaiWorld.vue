<script setup lang="ts">
import { ref, reactive } from "vue";
import { Axios } from "axios";

const axios = new Axios({});

const count = ref(0);
const countt = ref("fa");

let counters = reactive({
  response: {},
});

const clickFunc = async () => {
  const get = await axios.get("https://asai-api.my-theme.site/");
  counters.response = get.data;
  console.log(get.data);
};
</script>

<template>
  {{ counters.response }}
  <input @click="clickFunc" type="button" value="ボタン" />
</template>

<style scoped></style>
