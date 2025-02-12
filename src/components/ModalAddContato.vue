<script setup lang="ts">
import { onMounted, reactive } from "vue";
import serviceAdicionarContato from "../services/adicionarContato.service";
import toast from "../plugins/toast";

const emits = defineEmits(["closeModal"]);

const props = defineProps<{
  idVendedor: number;
  inboxId: number;
}>();

const state = reactive({
  telefone: "",
  nome: "",
  loading: false,
  inputNome: <HTMLInputElement | null>null,
});

const actions = {
  async btnAdicionar() {
    if (state.telefone?.length < 18) {
      toast.warning("Telefone inválido.");
      return;
    }

    if (state.nome.length <= 0) {
      toast.warning("Informe um nome.");
      return;
    }

    let phone = state.telefone.replace(/\D/g, "");

    await actions.getContact(phone);
  },

  async getDadosWhatsapp() {
    try {
      state.loading = true;

      let phone = state.telefone.replace(/\D/g, "");

      if (phone?.length <= 0) {
        return;
      }

      if (state.nome?.length > 0) {
        return;
      }

      const data = await serviceAdicionarContato.getDadosWhatsapp(phone);

      if (data?.name) {
        state.nome = data.name;
      }
    } catch (error) {
      console.error("Ocorreu um erro ao adicionar o contato");
      console.error(error);
    } finally {
      state.loading = false;
    }
  },

  async getContact(phone: string) {
    try {
      state.loading = true;

      const data = await serviceAdicionarContato.getContact({
        phone: phone,
        name: state.nome,
        id_vendedor: props.idVendedor,
        inbox_id: props.inboxId,
      });

      if (data.error) {
        toast.warning(data.msg);
        return;
      }

      if (data.id_conversation) {
        window.parent.location.href = `https://realchat.neyap.com.br/app/accounts/1/conversations/${data.id_conversation}`;
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao adicionar o contato");
      console.error(error);
    } finally {
      state.loading = false;
    }
  },

  closeModal() {
    emits("closeModal");
  },
};

onMounted(() => {
  state.inputNome = document.getElementById("inputNome") as any;
});
</script>

<template>
  <v-card>
    <div class="d-flex align-center justify-space-between px-4 py-2">
      <v-card-title class="pa-0">Adicionar Contato</v-card-title>
      <v-icon size="large" @click="actions.closeModal">mdi-close</v-icon>
    </div>

    <v-divider></v-divider>

    <div class="pa-4">
      <div class="d-flex ga-4 flex-column">
        <v-text-field
          v-model="state.telefone"
          label="Telefone"
          v-mask="'+55 (##) # ####-####'"
          autofocus
          @blur="actions.getDadosWhatsapp"
          @keydown.enter="state.inputNome?.focus()"
        >
        </v-text-field>
        <v-text-field
          v-model="state.nome"
          label="Nome"
          id="inputNome"
          autocomplete="off"
          maxlength="30"
        ></v-text-field>
      </div>

      <div class="mt-8 d-flex justify-end ga-2">
        <v-btn variant="outlined" color="primary" @click="actions.closeModal">
          Cancelar
        </v-btn>
        <v-btn color="primary" @click="actions.btnAdicionar"> Adicionar </v-btn>
      </div>
    </div>
  </v-card>

  <v-overlay
    :model-value="state.loading"
    class="align-center justify-center"
    persistent
  >
    <v-progress-circular
      color="primary"
      indeterminate
      size="64"
    ></v-progress-circular>
  </v-overlay>
</template>
