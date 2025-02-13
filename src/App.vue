<script setup lang="ts">
import { onMounted } from "vue";
import state from "./store/storeGlobal";

onMounted(() => {
  console.log("entremos no app");
  window.addEventListener("message", (event) => {
    if (event.data) {
      let dados = JSON.parse(event.data);
      state.idVendedor = dados.data.currentAgent.id;
      state.inboxId = dados.data.conversation.inbox_id;
      // console.log(JSON.parse(event.data));
    }
  });
});
</script>

<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<style>
@import "@mdi/font/css/materialdesignicons.css";
@import "vue-toastification/dist/index.css";
</style>
