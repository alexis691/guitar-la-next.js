import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
            <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagene sobre nosotros" />

            <div>
              <p>It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content 
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text
              </p>

              <p>It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content 
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text
              </p>
            </div>
          </div>
        </main>
    </Layout>  
  )
}

export default Nosotros