import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        backgroundColor:
            hexToRgba
                (colorPrimario, 0.6)
    }

    /*console.log(colaboradores.length > 0)*/

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.lenght > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                {/*<h3>Programación</h3>*/}
                {/*<h3>{props.datos.titulo}</h3>*/}
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {/*<Colaborador />*/}
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }

                </div>
            </section>
        }

    </>
}
export default Equipo;
