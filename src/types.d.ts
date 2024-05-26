export interface respuesta {
    id: number
    texto: string
}

export interface pregunta {
    id: number
    tema: string
    pregunta: string
    codigo?: string
    respuestas: respuesta[]
    respuesta_correcta: Pick<PREGUNTA, id>
}