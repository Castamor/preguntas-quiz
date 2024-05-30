


const Nivel = ({children}: {children: string}) => {
    return (
        <>
            <input className="input" type="radio" name="pregunta" id={children} />
            <label className="nivel" htmlFor={children}>{children}</label>
        </>
    );
}

export default Nivel;