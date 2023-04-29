import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // OJO Método map (sirve para recorrer el arreglo) -> arreglo.map((equipo, index) => { //OJO index es la posición dentro del arreglo
    // return <option></option>
    //})
    /*  const equipos = [
         "Programación",
         "Front End",
         "Data Science",
         "Devops",
         "UX y Diseño",
         "Movil",
         "Innovación y Gestión"
     ]*/

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value)
    }


    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>
            )}
            {/* OJO index es la posición dentro del arreglo*/}
            {/*<option>Programación</option> d
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>UX y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option>*/}

        </select>
    </div>
}

export default ListaOpciones;