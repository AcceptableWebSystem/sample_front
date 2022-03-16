<script setup lang="ts">
import { reactive } from "vue";
import { signUp, confirmSignUp } from "../auth";

const state = reactive({
  username: "",
  code:""
});

const clickSignUpButton = async () => {
  try {
    await confirmSignUp(state.username, state.code);
    alert("OK!!!");
  } catch (error) {
    alert(`NG:${error}`);
  }
};
</script>

<template>
  <h4>ユーザー名</h4>
  <input v-model="state.username" type="text" name="username" id="username" />
  <h4>認証コード</h4>
  <input v-model="state.code" type="text" name="password" id="password" />
  <input @click="clickSignUpButton" type="button" value="登録" />
</template>

<style scoped>
.myhr {
  margin: 2em;
}
</style>