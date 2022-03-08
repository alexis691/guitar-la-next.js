import Clase from "./Clase"
import styles from '../styles/ListadoClases.module.css'

const ListadoClases = ({clases}) => {
  return (
    <>
        {clases.length === 0? <h1 className="heading">No hay clases disponibles</h1> : <h1 className="heading">Clases Disponibles</h1> }
        <div className={`${styles.listado} contenedor`}>
            {clases.map(clase=> (
                <Clase
                    key={clase.url}
                    clase={clase}
                />
            ))}
        </div>
    </>
  )
}

export default ListadoClases