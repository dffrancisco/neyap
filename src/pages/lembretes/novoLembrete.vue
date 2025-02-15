<script setup lang="ts">
import { state } from "./lembretes";
import cNavBar from "@/components/cNavBar.vue";
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
            <span class="text-caption">Mensagem Ativa</span>
            <v-switch
              v-model="state.novoLembrete.mensagemAtiva"
              color="primary"
              :value="true"
              hide-details
            ></v-switch>
          </div>
        </div>
        <div id="areaLembrar">
          <div id="centralizarRadios">
            <v-radio-group inline v-model="state.novoLembrete.lembrar" density="compact">
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
          <div
            v-if="state.novoLembrete.lembrar == '1'"
            class="d-flex ga-4 mb-4"
          >
            <label for="input-data-do-lembrete"
              >Data do Lembrete
              <input
                v-model="state.novoLembrete.dataLembrete"
                type="date"
                id="input-data-do-lembrete"
                name="input-data-do-lembrete"
              />
            </label>
            <label for="input-hora-do-lembrete"
              >Hora do Lembrete
              <input
                v-model="state.novoLembrete.dataLembrete"
                type="time"
                id="input-hora-do-lembrete"
                name="input-hora-do-lembrete"
              />
            </label>
            <label class="switch">
              <v-switch
                v-model="state.novoLembrete.mensagemSomenteParaMim"
                color="primary"
                :value="true"
                hide-details
              ></v-switch>
              Mensagem somente para mim (Privada)</label
            >
          </div>

          <div v-else class="mb-4">
            <div class="d-flex ga-4 mb-4">
              <label for="input-data-inicial"
                >Data Início
                <input
                  v-model="state.novoLembrete.dt_inicial"
                  type="date"
                  id="input-data-inicial"
                  name="input-data-inicial"
                />
              </label>
              <label for="input-hora-inicial"
                >Hora Início
                <input
                  v-model="state.novoLembrete.horaInicio"
                  type="time"
                  id="input-hora-inicial"
                  name="input-hora-inicial"
                />
              </label>
              <label for="input-repetir-de"
                >Repetir de
                <input
                  v-model="state.novoLembrete.repetirDe"
                  type="number"
                  :min="0"
                  :max="400"
                  id="input-repetir-de"
                  name="input-repetir-de"
                />
              </label>
              <label for="select-tempo"
                >Tempo
                <select
                  name="select-tempo"
                  id="select-tempo"
                  v-model="state.novoLembrete.repetirTempo"
                >
                  <option value="minuto">Minuto</option>
                  <option value="hora">Hora</option>
                  <option value="dia">Dia</option>
                  <option value="mes">Mês</option>
                  <option value="tododia">Todo dia</option>
                </select>
              </label>
            </div>
            <div class="d-flex ga-4">
              <div class="switch">
                <span
                  class="text-caption"
                  @click="() => (state.novoLembrete.mensagemSempre = false)"
                  >Mensagem <br />
                  Sempre</span
                >
                <v-switch
                  v-model="state.novoLembrete.mensagemSempre"
                  color="primary"
                  :value="true"
                  hide-details
                ></v-switch>
                <span
                  class="text-caption"
                  @click="() => (state.novoLembrete.mensagemSempre = true)"
                  >Mensagem até a <br />
                  Data Final</span
                >
              </div>
              <label for="input-data-final"
                >Data Final
                <input
                  v-model="state.novoLembrete.dt_final"
                  type="date"
                  id="input-data-final"
                  name="input-data-final"
                  :disabled="!state.novoLembrete.mensagemSempre"
                />
              </label>
              <label for="input-hora-final"
                >Hora Final
                <input
                  v-model="state.novoLembrete.horaFinal"
                  type="time"
                  id="input-hora-final"
                  name="input-hora-final"
                  :disabled="!state.novoLembrete.mensagemSempre"
                />
              </label>
            </div>
          </div>
          <label for="textarea-mensagem"
            >Mensagem do Lembrete
            <v-textarea
              id="textarea-mensagem"
              placeholder="Meu lembrete é..."
 
            ></v-textarea>
          </label>
        </v-sheet>
        <div class="d-flex justify-space-between mt-4">
          <div>
            <p class="text-caption grey">Quem criou o lembrete</p>
            <p>{{ state.novoLembrete.nome_criador || "-" }}</p>
            <p class="text-caption grey">
              {{ state.novoLembrete.data_criacao || "-" }}
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
