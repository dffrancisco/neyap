export interface iGetContactParam {
    phone: string,
    name: string,
    id_vendedor: number | null,
    inbox_id: number | null
}

export interface iGetContactResponse {
    id_conversation: number,
    error: boolean,
    msg: string
}

export interface iGetDadosWhatsappResponse {
    name: string,
}