import { create } from 'zustand'
import { type pregunta } from '../types'

interface StoreTypes {
    LIMITE: number
    tema: string
    preguntaActiva: number | null
    preguntas: pregunta[]
    // eslint-disable-next-line no-unused-vars
    obtenerPreguntas: (limite: number) => void
}

export const usePreguntasStore = create<StoreTypes>((set) => ({
    LIMITE: 5,
    tema: 'Astrología',
    preguntaActiva: null,
    preguntas: [],
    async obtenerPreguntas(limite) {
        const respuesta: pregunta[] = 
        await fetch('/datos.json')
            .then(res => res.json())
            .then(datos => datos.preguntas)

        const preguntasDesordenadas = respuesta.sort(() => Math.random() - 0.5).slice(0, limite)
        set({ preguntas: preguntasDesordenadas })
    },
}))