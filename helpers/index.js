export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const formatearFecha2 = fecha => {
    const fechaNueva = new Date(fecha+" 00:00:00")
      
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}