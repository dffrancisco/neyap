<script setup lang="ts">
import { onMounted } from "vue";
import { actions, state } from "./lembretes";
import cNavBar from "@/components/cNavBar.vue";
import utils from "@/ts/utils";

const props = defineProps<{
  id: number;
}>();

onMounted(async () => {
  await actions.getLembretesID(props.id);
});
</script>

<template>
  <div class="mt-12">
    <cNavBar>
      <v-btn>
        <v-icon class="mr-2">mdi-format-list-bulleted</v-icon>
        Agendamento
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/home">
        <v-icon class="ml-2">mdi-home</v-icon>
        HOME
      </v-btn>
    </cNavBar>
    <div style="width: 800px; margin: 0 auto">
      <v-card class="pa-4 mt-12 mb-4">
        <div id="areaSuperior">
          <div id="areaFoto"></div>
          <div id="areaInformacoes">
            <p class="text-caption">Telefone</p>
            <p>22 99999999</p>
            <p class="text-caption">Nome</p>
            <p>Francisco Alves</p>
          </div>
          <div id="areaSwitch">
            <span class="text-caption">Mensagem Ativa </span>
            <v-switch
              v-model="state.lembreteSelect.ligado"
              color="primary"
              true-value="S"
              false-value="N"
              hide-details
            ></v-switch>
          </div>
        </div>
        <div id="areaLembrar">
          <div id="centralizarRadios">
            <v-radio-group
              inline
              v-model="state.radioLembrar"
              density="compact"
            >
              <v-radio
                label="Lembrar várias vezes"
                value="v"
                color="primary"
              ></v-radio>
              <v-radio
                label="Lembrar uma vez"
                value="1"
                color="primary"
                class="ml-4"
              ></v-radio>
            </v-radio-group>
          </div>
        </div>

        <v-sheet class="pa-4 rounded-lg" elevation="4">
          <div v-if="state.radioLembrar == '1'" class="d-flex ga-4 mb-4">
            <label for="input-data-do-lembrete"
              >Data do Lembrete
              <input
                v-model="state.lembreteSelect.dataLembrete"
                type="date"
                id="input-data-do-lembrete"
                name="input-data-do-lembrete"
              />
            </label>
            <label for="input-hora-do-lembrete"
              >Hora do Lembrete
              <input
                v-model="state.lembreteSelect.dataLembrete"
                type="time"
                id="input-hora-do-lembrete"
                name="input-hora-do-lembrete"
              />
            </label>
            <label class="switch">
              <v-switch
                v-model="state.lembreteSelect.mensagemSomenteParaMim"
                color="primary"
                :value="true"
                hide-details
              ></v-switch>
              Mensagem somente para mim (Privada)</label
            >
          </div>

          <div class="mb-4" v-else>
            <v-row dense>
              <v-col cols="3">
                <label for="input-data-inicial"
                  >Data Início
                  <input
                    v-model="state.lembreteSelect.dt_inicial"
                    type="date"
                    id="input-data-inicial"
                    name="input-data-inicial"
                  />
                </label>
              </v-col>
              <v-col cols="3"
                ><label for="input-hora-inicial"
                  >Hora Início
                  <input
                    v-model="state.lembreteSelect.hr_inicial"
                    id="input-hora-inicial"
                    name="input-hora-inicial"
                  /> </label
              ></v-col>
              <v-col cols="2">
                <label for="select-tempo"
                  >Tempo
                  {{ state.lembreteSelect.repetir }}
                  <select
                    name="select-tempo"
                    id="select-tempo"
                    v-model="state.lembreteSelect.repetir"
                  >
                    <option value="minutes">Minuto</option>
                    <option value="hour">Hora</option>
                    <option value="day">Dia</option>
                    <option value="month">Mês</option>
                    <option value="everyDay">Todo dia</option>
                    <option value="date">na Data</option>
                  </select>
                </label>
              </v-col>
              <v-col cols="4">
                <label for="input-repetir-de">
                  <!-- Minutos -->
                  <div v-if="state.lembreteSelect.repetir == 'minutes'">
                    <label
                      >Repetir todo minuto
                      <b>{{ state.lembreteSelect.repetir_de }}</b>
                    </label>
                    <select
                      v-model="state.lembreteSelect.repetir_de"
                      style="margin-top: 6px"
                    >
                      <option value="0">0</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>

                  <!-- Horas -->
                  <div v-if="state.lembreteSelect.repetir == 'hour'">
                    <label
                      >Repetir de
                      <b>{{
                        Math.floor(state.lembreteSelect.repetir_de / 60) +
                        ":" +
                        (state.lembreteSelect.repetir_de % 60)
                      }}</b>
                      em <b>{{ state.lembreteSelect.repetir_de }}</b> Horas
                    </label>
                    <select
                      v-model="state.lembreteSelect.repetir_de"
                      style="margin-top: 6px"
                    >
                      <option value="60">1h</option>
                      <option value="90">1:30</option>
                      <option value="120">2h</option>
                      <option value="150">2:30</option>
                      <option value="180">3h</option>
                      <option value="210">3:30</option>
                      <option value="240">4h</option>
                      <option value="270">4:30</option>
                      <option value="300">5h</option>
                      <option value="330">5:30</option>
                      <option value="360">6h</option>
                      <option value="390">6:30</option>
                      <option value="420">7h</option>
                      <option value="450">7:30</option>
                      <option value="480">8h</option>
                      <option value="510">8:30</option>
                      <option value="540">9h</option>
                      <option value="570">9:30</option>
                      <option value="600">10h</option>
                      <option value="630">10:30</option>
                      <option value="660">11h</option>
                      <option value="690">11:30</option>
                      <option value="720">12h</option>
                      <option value="750">12:30</option>
                      <option value="780">13h</option>
                      <option value="810">13:30</option>
                      <option value="840">14h</option>
                      <option value="870">14:30</option>
                      <option value="900">15h</option>
                      <option value="930">15:30</option>
                      <option value="960">16h</option>
                      <option value="990">16:30</option>
                      <option value="1020">17h</option>
                      <option value="1050">17:30</option>
                      <option value="1080">18h</option>
                      <option value="1110">18:30</option>
                      <option value="1140">19h</option>
                      <option value="1170">19:30</option>
                      <option value="1200">20h</option>
                      <option value="1230">20:30</option>
                      <option value="1260">21h</option>
                      <option value="1290">21:30</option>
                      <option value="1320">22h</option>
                      <option value="1350">22:30</option>
                      <option value="1380">23h</option>
                      <option value="1410">23:30</option>
                      <option value="1440">0h</option>
                    </select>
                  </div>

                  <!-- Dias -->
                  <div v-if="state.lembreteSelect.repetir == 'day'">
                    <label
                      >Somete no dia
                      <b>{{ state.lembreteSelect.repetir_de }}</b>
                    </label>
                    <select
                      v-model="state.lembreteSelect.repetir_de"
                      style="margin-top: 6px"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                    </select>
                  </div>

                  <!-- MEs -->
                  <div v-if="state.lembreteSelect.repetir == 'month'">
                    <label
                      >Repetir todo Mês
                      <b>{{ state.lembreteSelect.repetir_de }}</b>
                      às {{ state.lembreteSelect.hr_inicial }}
                    </label>
                    <select
                      v-model="state.lembreteSelect.repetir_de"
                      style="margin-top: 6px"
                    >
                      <option value="1">Janeiro</option>
                      <option value="2">Fevereiro</option>
                      <option value="3">Março</option>
                      <option value="4">Abril</option>
                      <option value="5">Maio</option>
                      <option value="6">Junho</option>
                      <option value="7">Julho</option>
                      <option value="8">Agosto</option>
                      <option value="9">Setembro</option>
                      <option value="10">Outubro</option>
                      <option value="11">Novembro</option>
                      <option value="12">Dezembro</option>
                    </select>
                  </div>

                  <!-- Todo dia everyDay -->
                  <div v-if="state.lembreteSelect.repetir == 'everyDay'">
                    <label
                      >Repetir todo Dia
                      <b>{{ state.lembreteSelect.repetir_de }}</b>
                      às {{ state.lembreteSelect.hr_inicial }}
                    </label>
                    <select
                      v-model="state.lembreteSelect.repetir_de"
                      style="margin-top: 6px"
                    >
                      <option value="1">1 Todos os Dias</option>
                      <option value="2">2 Todos os Dias</option>
                      <option value="3">3 Todos os Dias</option>
                      <option value="4">4 Todos os Dias</option>
                      <option value="5">5 Todos os Dias</option>
                      <option value="6">6 Todos os Dias</option>
                      <option value="7">7 Todos os Dias</option>
                      <option value="8">8 Todos os Dias</option>
                      <option value="9">9 Todos os Dias</option>
                      <option value="10">10 Todos os Dias</option>
                      <option value="11">11 Todos os Dias</option>
                      <option value="12">12 Todos os Dias</option>
                      <option value="13">13 Todos os Dias</option>
                      <option value="14">14 Todos os Dias</option>
                      <option value="15">15 Todos os Dias</option>
                      <option value="16">16 Todos os Dias</option>
                      <option value="17">17 Todos os Dias</option>
                      <option value="18">18 Todos os Dias</option>
                      <option value="19">19 Todos os Dias</option>
                      <option value="20">20 Todos os Dias</option>
                      <option value="21">21 Todos os Dias</option>
                      <option value="22">22 Todos os Dias</option>
                      <option value="23">23 Todos os Dias</option>
                      <option value="24">24 Todos os Dias</option>
                      <option value="25">25 Todos os Dias</option>
                      <option value="26">26 Todos os Dias</option>
                      <option value="27">27 Todos os Dias</option>
                      <option value="28">28 Todos os Dias</option>
                    </select>
                  </div>

                  <!-- Na data -->
                  <div v-if="state.lembreteSelect.repetir == 'date'">
                    <label
                      >Na data
                      <b>{{
                        utils.dataBrasil(state.lembreteSelect.repetir_de)
                      }}</b>
                      às {{ state.lembreteSelect.hr_inicial }}
                    </label>
                    <input
                      v-model="state.lembreteSelect.repetir_de"
                      type="date"
                    />
                  </div>
                </label>
              </v-col>
            </v-row>

            <div class="d-flex ga-4">
              <div class="switch">
                <span
                  class="text-caption"
                  @click="() => (state.lembreteSelect.mensagemSempre = false)"
                  >Mensagem <br />
                  Sempre</span
                >
                <v-switch
                  v-model="state.lembreteSelect.mensagemSempre"
                  color="primary"
                  :value="true"
                  hide-details
                ></v-switch>
                <span
                  class="text-caption"
                  @click="() => (state.lembreteSelect.mensagemSempre = true)"
                  >Mensagem até a <br />
                  Data Final</span
                >
              </div>
              <label for="input-data-final"
                >Data Final
                <input
                  v-model="state.lembreteSelect.dt_final"
                  type="date"
                  id="input-data-final"
                  name="input-data-final"
                  :disabled="!state.lembreteSelect.mensagemSempre"
                />
              </label>
              <label for="input-hora-final"
                >Hora Final
                <input
                  v-model="state.lembreteSelect.hr_final"
                  type="time"
                  id="input-hora-final"
                  name="input-hora-final"
                  :disabled="!state.lembreteSelect.mensagemSempre"
                />
              </label>
            </div>
          </div>
          <label for="textarea-mensagem"
            >Mensagem do Lembrete
            <v-textarea
              id="textarea-mensagem"
              v-model="state.lembreteSelect.msg"
            >
            </v-textarea>
          </label>
        </v-sheet>
        <div class="d-flex justify-space-between mt-4">
          <div>
            <p class="text-caption grey">Quem criou o lembrete</p>
            <p>{{ state.lembreteSelect.nome_criador || "-" }}</p>
            <p class="text-caption grey">
              {{ state.lembreteSelect.data_criacao || "-" }}
            </p>
          </div>
          <v-btn color="primary">SALVAR</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
#areaSuperior {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}
#areaFoto {
  width: 110px;
  height: 110px;
  border-radius: 100%;
  overflow: hidden;
  border: 2px solid gray;
}

#areaInformacoes {
}

#areaSwitch {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

#areaLembrar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
label {
  font-size: 14px;
}

input,
select {
  border: 1px solid #cecece;
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  padding-left: 15px;
  margin-top: 3px;
}

.switch {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}
</style>
