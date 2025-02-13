<script setup lang="ts">
import router from "@/router";

const props = defineProps({
  btnBack: {
    default: false,
  },
  go: {
    default: "",
    type: Number,
  },
  push: {
    default: "",
    type: String,
  },
  icon: {
    default: "mdi-arrow-left",
  },
});

const btnAction = () => {
  if (props.go) router.go(props.go);

  if (props.push) router.push(props.push);
};
</script>

<template>
  <v-app-bar color="primary" prominent>
    <!-- <v-app-bar-nav-icon v-show="!btnBack" variant="text" @click.stop="globalState.drawer = !globalState.drawer">
    </v-app-bar-nav-icon> -->

    <v-app-bar-nav-icon
      :icon="icon"
      v-show="btnBack"
      variant="text"
      @click.stop="btnAction"
    >
    </v-app-bar-nav-icon>

    <slot></slot>

    <!-- <v-btn
      style="height: 50px"
      @click="mMotorista.state.mMotorista.open('principal')"
    >
      <span>
        <span class="text-body-1"> Adicionar Ordem</span>
        <br />
        <span class="text-caption" style="line-height: unset">(F12)</span>
      </span>
    </v-btn> -->
  </v-app-bar>
</template>
