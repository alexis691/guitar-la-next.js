import Image from "next/image"
import Link from 'next/link'
import styles from '../styles/Clase.module.css'
import {formatearFecha2} from '../helpers'

const Clase = ({clase}) => {

    const {titulo, fecha_inicio, descripcion, foto, url} = clase

  return (
    <div>
        <Image
            layout='responsive'
            width={700}
            height={450}
            src={foto.url}    
            alt={`Imagen clase: ${titulo}`}    
        />
        <div className={styles.contenido}>
            <h2>{titulo}</h2>
            <p className={styles.fecha}>{formatearFecha2(fecha_inicio)}</p>
            <p className={styles.descripcion}>{descripcion}</p>
            <Link href={`/clases/${url}`}>
                <a className={styles.enlace}>
                    Leer mas...
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Clase