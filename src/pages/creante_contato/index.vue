<script setup lang="ts">
import { ref } from "vue";
import ModalAddContato from "./components/ModalAddContato.vue";
import state from "@/store/storeGlobal";

const modal = ref(false);
</script>

<template>
  <!-- <div class="d-flex justify-center pa-4"> -->
  <v-btn @click="modal = true">
    <v-icon class="mr-2">mdi-account-plus</v-icon>
    Novo Contato
  </v-btn>
  <!-- </div> -->

  <v-dialog persistent v-model="modal" max-width="400">
    <ModalAddContato
      :idVendedor="state.idVendedor"
      :inboxId="state.inboxId"
      @closeModal="modal = false"
    />
  </v-dialog>
</template>

<style></style>
