import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'
import { useRouter } from "next/router"

const Header = ({guitarra}) => {

  //hook para saber informacion de la ruta en la que estamos
  const router = useRouter();

  return (
    <header className={styles.header}>
        <div className="contenedor">
           <div className={styles.barra}>
                {/* Si da un problema tienes que crear el <a></a> */}
                <Link href='/'>
                  <a>
                    <Image width={400} height={100} src='/img/logo.svg' alt='Imagen Logo' />
                  </a>
                </Link>

                <nav className={styles.navegacion}>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/tienda'>Tienda</Link>
                    <Link href='/clases'>Clases</Link>
                    <Link href="/carrito">
                      <a>
                        <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="Imagen Carrito"/>
                      </a>
                    </Link>
                </nav>
           </div>

            {guitarra && (
              <div className={styles.modelo}>
                <h2>Modelo {guitarra.nombre}</h2>
                <p>{guitarra.descripcion}</p>
                <p className={styles.precio}>$ {guitarra.precio}</p>
                <Link href={`/guitarras/${guitarra.url}`}>
                  <a className={styles.enlace}>
                    Ver Producto
                  </a>
                </Link>
              </div>
            )}
        </div>

        {router.pathname === '/' && (
          <div className={styles.guitarra} > 
            <Image Layout='fixed' width={430} height={900} src='/img/header_guitarra.png' alt='Imagen Header guitarra'/>
          </div>
        )}
        
    </header>
  )
}

export default Header