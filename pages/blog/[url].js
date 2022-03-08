import Layout from "../../components/Layout"
import Image from "next/image"
import {formatearFecha} from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const {contenido, imagen, published_at, titulo} = entrada[0]

    return (
        <Layout 
            pagina={titulo}
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen de entrada: ${titulo}`} />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

//Esta funcion dice que se puede llegar a renderizar (creo)
export async function getStaticPaths(){
    
  const url = `${process.env.API_URL}/blogs`
  const answer = await fetch(url)
  const entradas = await answer.json()
  const paths = entradas.map(entrada => ({
    params: {url: entrada.url}
  }))

  return {
    paths,
    fallback: false
  }
}
  
//Esta funcion ya busca el registro con el id (url en este caso)
export async function getStaticProps({params: { url }}){
   
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`  
  const answer = await fetch(urlBlog)
  const entrada = await answer.json()

  return {
    props: {
      entrada
    }
  }
}

//DINAMIC
// export async function getServerSideProps({query: {id}}){

//     const url = `${process.env.API_URL}/blogs/${id}`
//     const answer = await fetch(url);
//     const entrada = await answer.json()

//     console.log(entrada)

//     return {
//         props: {
//             entrada
//         }
//     }
// }


export default EntradaBlog