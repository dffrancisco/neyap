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


export const state = reactive({
    dbLembretes: <iLembrete[]>{},

});

export const actions = {

    async getLembretes() {

        let { data } = await axios.post(baseURL + "webhook/lista-lembrete", {
            numero: stateGlobal.mensagemChatwoot.data.contact.phone_number,
            id_accounts_chatwoot: stateGlobal.mensagemChatwoot.data.currentAgent.id
        });

        state.dbLembretes = data;

        console.log(data);

    }
};

export default { state, actions };
