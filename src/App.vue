<script setup lang="ts">
import { onMounted } from "vue";
import { state } from "./App";
import ModalAddContato from "./components/ModalAddContato.vue";

onMounted(() => {
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
  <div class="d-flex justify-center pa-4">
    <v-btn color="primary" @click="state.modalAddContato = true">
      Novo Contato <v-icon class="ml-2">mdi-account-plus</v-icon>
    </v-btn>
  </div>

  <v-dialog persistent v-model="state.modalAddContato" max-width="400">
    <ModalAddContato
      :idVendedor="state.idVendedor"
      :inboxId="state.inboxId"
      @closeModal="state.modalAddContato = false"
    />
  </v-dialog>
</template>

<style>
@import "@mdi/font/css/materialdesignicons.css";
@import "vue-toastification/dist/index.css";
</style>
