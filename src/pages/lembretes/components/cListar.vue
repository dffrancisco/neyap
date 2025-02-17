<script setup lang="ts">
import { onMounted } from "vue";
import { actions, state } from "../lembretes";
import utils from "@/ts/utils";

const traducaoRepetir = (text: string) => {
  return text
    .replace("minutes", "minutos")
    .replace("hours", "horas")
    .replace("days", "dias")
    .replace("weeks", "semanas")
    .replace("months", "meses")
    .replace("years", "anos");
};

onMounted(() => {
  actions.getLembretes();
});
</script>

<template>
  <div style="width: 800px; margin: 0 auto">
    <v-card class="dcard mb-3 pa-2" v-for="item in state.dbLembretes">
      <v-row dense>
        <v-col cols="3">
          <h5>Data Inicio</h5>
          <v-chip size="small" color="mmp" variant="flat">
            {{ utils.dataMysql(item.dt_inicial) }}</v-chip
          >
        </v-col>

        <v-col cols="3">
          <h5>Data Fim</h5>
          <v-chip
            size="small"
            v-show="item.dt_final"
            color="mmp"
            variant="flat"
          >
            {{ utils.dataMysql(item.dt_final) }}</v-chip
          >
        </v-col>

        <v-col cols="4" class="d-flex">
          <div class="mr-4">
            <h5>Repetir em</h5>
            <v-chip size="small" color="mmp" variant="flat">
              {{ traducaoRepetir(item.repetir) }}
            </v-chip>
          </div>

          <div class="d-flex flex-column">
            <h5>Próxima Mensagem</h5>
            <v-chip size="small" color="mmp" variant="flat">
              {{ utils.dataMysql(item.proxima_msg) }}
            </v-chip>
          </div>
        </v-col>

        <v-col cols="2">
          <h5>Criado Por:</h5>
          <label>{{ item.nome_criador }}</label>
        </v-col>

        <v-col cols="12">
          <div class="d-flex flex-column">
            <h5>Mensagem</h5>
            <h4>{{ item.msg }}</h4>
          </div>
        </v-col>

        <v-divider></v-divider>
        <v-col cols="12" class="d-flex justify-space-between align-center">
          <div>
            <h5>
              Mensagem Privada
              <v-tooltip activator="parent" location="start">
                Quando a mensagem for privada, somente nós veremos a mensagem.
              </v-tooltip>
            </h5>
            <v-chip
              size="x-small"
              color="mmp"
              :variant="item.msg_privada == 'S' ? 'flat' : 'outlined'"
            >
              {{ item.msg_privada == "S" ? "Sim" : "Não" }}
            </v-chip>
            <!-- <v-switch
              v-model="item.msg_privada"
              false-value="N"
              true-value="S"
              hide-details
              color="primary"
              class="mt-n5 ml-2 mb-n2"
            ></v-switch> -->
          </div>

          <v-btn
            variant="text"
            :to="'lembretes/' + item.id_lembrete"
            color="mmp"
            >Editar</v-btn
          >

          <div>
            <h5>Ligado</h5>
            <v-chip
              size="x-small"
              color="mmp"
              :variant="item.ligado == 'S' ? 'flat' : 'outlined'"
            >
              {{ item.ligado == "S" ? "Sim" : "Não" }}
            </v-chip>
            <!-- <v-switch
              v-model="item.ligado"
              false-value="N"
              true-value="S"
              hide-details
              color="primary"
              class="mt-n5 ml-2 mb-n2"
            ></v-switch> -->
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style scoped>
.dcard h5 {
  color: rgb(155, 155, 155);
  font-size: 12px;
}
.dcard label {
  font-size: 15px;
}
</style>
