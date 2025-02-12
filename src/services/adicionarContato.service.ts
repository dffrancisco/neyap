import axios from "axios"
import type { iGetContactParam, iGetContactResponse, iGetDadosWhatsappResponse } from "../interfaces"

type iGetContact = (param: iGetContactParam) => Promise<iGetContactResponse>
type iGetDadosWhatsapp = (phone: string) => Promise<iGetDadosWhatsappResponse>

const getContact: iGetContact = async (param) => {
    const { data } = await axios.get(`
        https://realn8n.neyap.com.br/webhook/novo-contato?phone=${param.phone}&name=${param.name}&id_vendedor=${param.id_vendedor}&inbox_id=${param.inbox_id}`
    )

    return data
}

const getDadosWhatsapp: iGetDadosWhatsapp = async (phone) => {
    const options = {
        method: 'POST',
        headers: { apikey: '1520@Alves1520@Alves', 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: phone })
    };

    const response = await fetch('https://realevo.neyap.com.br/chat/fetchProfile/formosa', options);
    const json = await response.json();
    return json;
};


export default {
    getContact,
    getDadosWhatsapp
}