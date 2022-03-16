<script setup lang="ts">
import { reactive } from "vue";
import { signUp } from "../auth";

const state = reactive({
  username: "",
  password: "",
  email: "",
});

const clickSignUpButton = async () => {
  try {
    await signUp(state.username, state.password, state.email);
    alert("OK!!!");
  } catch (error) {
    alert(`NG:${error}`);
  }
};
</script>

<template>
  <h4>ユーザー名</h4>
  <input v-model="state.username" type="text" name="username" id="username" />
  <h4>パスワード</h4>
  <input v-model="state.password" type="text" name="password" id="password" />
  <h4>メールアドレス</h4>
  <input v-model="state.email" type="text" name="email" id="email" />
  <input @click="clickSignUpButton" type="button" value="登録" />
</template>

<style scoped>
.myhr {
  margin: 2em;
}
</style>