import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
        <Head>
            <title>GuitarLa - {pagina}</title>
            <meta name='description' content='Sitio web de guitarras' />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        </Head>

        <Header 
          guitarra={guitarra}
        />

        {children}

        <Footer />
    </div>
  )
}

//esto se pone cuando no le mandas un prop y quieres un valor por defecto cuando no lo mandes
Layout.defaultProps = {
  guitarra: null
}

export default Layout