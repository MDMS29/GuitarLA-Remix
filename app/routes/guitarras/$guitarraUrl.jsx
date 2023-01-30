import { useState } from "react"
import { useOutletContext, useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({ params }) {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra not found'
        })
    }

    return guitarra
}
export function meta({ data }) {
    if (!data) {
        return {
            title: 'Guitarra not found',
            description: 'Guitarra not found'
        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`
    }
}

const Guitarra = () => {

    const { agregarCarrito } = useOutletContext()

    const [cantidad, setCantidad] = useState(0)

    const guitarra = useLoaderData()
    const { imagen, nombre, descripcion, precio } = guitarra.data[0].attributes

    const handleSubmit = e => {
        e.preventDefault()
        if (cantidad < 1) {
            alert("Debe seleccionar una cantidad")
            return
        }

        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Iamgen Guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">
                    {descripcion}
                </p>
                <p className="precio">${precio}</p>
                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>
                    <select name="cantidad" id="cantidad" onChange={e => setCantidad(parseInt(e.target.value))}>
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <input type="submit" value="Agregar al Carrito" />
                </form>
            </div>
        </div>
    )
}

export default Guitarra