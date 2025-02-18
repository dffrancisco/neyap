<script setup lang="ts">
import createContato from "../creante_contato/index.vue";
import list_lembretes from "../lembretes/index.vue";

import cNavBar from "@/components/cNavBar.vue";
</script>

<template>
  <cNavBar>
    <createContato />
    <v-spacer></v-spacer>
    <v-btn to="/lembretes/novoLembrete">
      Novo Lembrete
      <v-icon class="ml-2">mdi-camera-timer</v-icon>
    </v-btn>
  </cNavBar>

  <v-container class="mt-12">
    <list_lembretes />
  </v-container>
</template>

<style></style>
