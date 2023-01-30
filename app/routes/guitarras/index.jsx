import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"

import ListadoGuitarra from "../../components/listado-guitarra"

//Cambio de titulo de pestaña dinamico
export function meta() {
    return {
        title: 'GuitarLA - Tienda'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}

const Tienda = () => {
    const guitarras = useLoaderData()

    return (
        <ListadoGuitarra guitarras={guitarras} />
    )
}

export default Tienda