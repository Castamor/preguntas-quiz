import Nivel from './Nivel';
import './estilos.scss'

const Menu = () => {

    return (
        <>
            <div className='titulo'>
                <p className='saludo'>¡Hola!</p>
                <h1 className="texto">VAMOS A JUGAR...</h1>
            </div>

            <div className='niveles'>
                <Nivel>10</Nivel>
                <Nivel>20</Nivel>
                <Nivel>30</Nivel>
            </div>

            <div className='selector-temas'>
                <button type="button" className='tema'>1</button>
                <button type="button" className='tema'>2</button>
                <button type="button" className='tema'>3</button>
                <button type="button" className='tema'>4</button>
            </div>
        </>
    );
}

export default Menu;