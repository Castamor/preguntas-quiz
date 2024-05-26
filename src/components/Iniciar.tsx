import { usePreguntasStore } from "../store";
import './estilos.scss'

const Iniciar = () => {
    const obtenerPreguntas = usePreguntasStore(state => state.obtenerPreguntas)
    const LIMITE = usePreguntasStore(state => state.LIMITE)

    return (
        <div className="btnIniciar">
            <button 
                type="button" 
                className="iniciar"
                onClick={() => obtenerPreguntas(LIMITE)}
            >
                Iniciar
            </button>
        </div>
    );
}

export default Iniciar;