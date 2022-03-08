import Layout from "../components/Layout"
import ListadoClases from "../components/ListadoClases"

const clases = ({clases}) => {
  return (
    <Layout
        pagina="Clases"
    >
        <main className="contenedor">
            <ListadoClases
                clases={clases}
            />
        </main>
    </Layout>
  )
}

export async function getServerSideProps(){

    const url = `${process.env.API_URL}/clases?_sort=fecha_inicio:desc`
    const answer = await fetch(url)
    const clases = await answer.json()

    return {
        props: {
            clases
        }
    }

}

export default clases