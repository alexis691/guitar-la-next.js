import Layout from '../../components/Layout'
import Image from "next/image"
import styles from '../../styles/Clase.module.css'
import { formatearFecha2 } from '../../helpers'

const Clase = ({clase}) => {

    const {titulo, fecha_inicio, descripcion, foto} = clase[0]   

    return (
        <Layout
            pagina={`Clase - ${titulo}`}
        >
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>

                <div className={styles.clase}>        
                    <Image
                        layout='responsive'
                        width={700}
                        height={450}
                        src={foto.url}    
                        alt={`Imagen clase: ${titulo}`}    
                    />     
                    <div>
                        <h1>{titulo}</h1>
                        <p className={styles.fecha}>{formatearFecha2(fecha_inicio)}</p>
                        <p className={styles.texto}>{descripcion}</p>
                    </div>

                </div>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}){

    const urlClase = `${process.env.API_URL}/clases?url=${url}`
    const answer = await fetch(urlClase)
    const clase = await answer.json()
    
    return{
        props:{
            clase
        }
    }
}

export default Clase