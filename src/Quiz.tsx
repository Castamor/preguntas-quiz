import Iniciar from "./components/Iniciar";
import Juego from "./components/Juego";
import { usePreguntasStore } from "./store";

const Quiz = () => {
    const preguntas = usePreguntasStore(state => state.preguntas)

    const hayPreguntas = preguntas.length > 0


    return (
        <>
            <h1 className="titulo">PREGUNTAS QUIZ</h1>

            {!hayPreguntas && <Iniciar />}
            {hayPreguntas && <Juego />}
        </>
    );
}

export default Quiz;