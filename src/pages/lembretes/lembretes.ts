import axios from "axios";
import { reactive } from "vue";
import stateGlobal from "@/store/storeGlobal";

const baseURL = "https://n8n.neyap.com.br/";

interface iLembrete {
  id_lembrete: number;
  id_accounts_chatwoot: number;
  numero: string;
  dt_final: string;
  dt_inicial: string;
  proxima_msg: string;
  msg: string;
  ligado: string;
  repetir: string;
  msg_privada: string;
  data_criacao: string;
  nome_criador: string | null;
}

interface iNovoLembrete extends Partial<iLembrete> {
    mensagemAtiva: boolean,
    mensagemSomenteParaMim: boolean,
    lembrar: string,
    dataLembrete: string,
    horaInicio: string,
    horaFinal: string,
    repetirDe: number,
    repetirTempo: string,
    mensagemSempre: boolean
    
  }

export const state = reactive({
  dbLembretes: <iLembrete[]>{},
  novoLembrete: <iNovoLembrete> {
    mensagemAtiva: false,
    mensagemSomenteParaMim: false,
    lembrar: "v",
    dataLembrete: new Date().toISOString().substr(0, 10),
    horaLembrete: null,
    dt_inicial: new Date().toISOString().substr(0, 10),
    dt_final: new Date().toISOString().substr(0, 10),
    horaInicio: null,
    horaFinal: null,
    msg: '',
    repetirDe: 30,
    repetirTempo: 'minuto',
    mensagemSempre: false

  },
});

export const actions = {
  async getLembretes() {
    let { data } = await axios.post(baseURL + "webhook/lista-lembrete", {
      numero: stateGlobal.mensagemChatwoot.data.contact.phone_number,
      id_accounts_chatwoot: stateGlobal.mensagemChatwoot.data.currentAgent.id,
    });

    state.dbLembretes = data;

    console.log(data);
  },
};

export default { state, actions };
