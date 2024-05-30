import { usePreguntasStore } from "../store";

const Juego = () => {

    const preguntas = usePreguntasStore(state => state.preguntas)
    const preguntasActiva = usePreguntasStore(state => state.preguntaActiva)

    const preguntaActiva = preguntas[preguntasActiva]

    return (
        <form className="formulario">
            <label className="pregunta">{preguntaActiva.pregunta}</label>
            <div className="contenedor-opcion">
                {preguntaActiva.respuestas.map(({id, texto}) => (
                    <option value={id} className="opcion">{texto}</option>
                ))}
            </div>
        </form>
    );
}

export default Juego;