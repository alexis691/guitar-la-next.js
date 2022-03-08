import Layout from "../components/Layout"
import Entrada from "../components/Entrada"
import styles from '../styles/Blog.module.css'
import ListadoBlog from "../components/ListadoBlog"

const Blog = ({entradas}) => {

  return (
    <Layout
        pagina='Blog'
    >
        <main className="contenedor">
          <ListadoBlog 
            entradas={entradas}
          />       
        </main>
    </Layout>  
  )
}

//THIS runs in the server
export async function getServerSideProps(){
 
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
  const answer = await fetch(url)
  const entradas = await answer.json()

  return {
    props: {
      entradas
    }
  }
}

export default Blog