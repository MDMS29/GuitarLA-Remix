import { Link } from "@remix-run/react"

const Guitarra = ({ guitarra }) => {
    const { imagen, nombre, descripcion, precio, url } = guitarra
    return (
        <div className="guitarra">
            <img src={imagen.data.attributes.formats.small.url} alt={`Guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
                <Link to={`/guitarras/${url}`} className="enlace">Ver {nombre}</Link>
            </div>
        </div>
    )
}

export default Guitarra