import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {

  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colleccion</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>

      <Curso
        curso={curso}
      />

      <section className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        />
      </section>

    </Layout>     
  )
}



//consultar la API
export async function getServerSideProps(){
  //ESTO FUNCIONA PERO NO ES OPTIMIZADO (AQUI EL FETCH SE HACE UNO A UNO)
  //====================================================================

  // const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  // const respuesta = await fetch(url)
  // const guitarras = await respuesta.json();

  // const url = `${process.env.API_URL}/curso`
  // const respuesta = await fetch(url)
  // const guitarras = await respuesta.json();

  
  //ESTO SI ESTA OPTIMIZADO (AQUI EL FETCH SE HACEN LOS DOS AL MISMO TIEMPO)
  //====================================================================
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCurso = `${process.env.API_URL}/cursos`
  const urlEntradas = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`


  const [resGuitarras, resCurso, resEntradas] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCurso),
      fetch(urlEntradas)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resEntradas.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}