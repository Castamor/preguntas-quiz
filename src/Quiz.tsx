import Menu from "./components/Menu";
import Juego from "./components/Juego";
import { usePreguntasStore } from "./store";

const Quiz = () => {
    const preguntas = usePreguntasStore(state => state.preguntas)

    const hayPreguntas = preguntas.length > 0

    return (
        <>
            {!hayPreguntas && <Menu />}
            {hayPreguntas && <Juego />}
        </>
    );
}

export default Quiz;