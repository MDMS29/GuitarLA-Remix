import { Link } from "react-router-dom"
import { formatearFecha } from '~/utils/helpers.js'

const Post = ({ post }) => {
    const { titulo, contenido, imagen, publishedAt, url } = post
    return (
        <article className="post">
            <img src={imagen.data.attributes.formats.small.url} alt={`Imagen del blog ${titulo}`} className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link to={`/post/${url}`} className="enlace">Leer Post</Link>
            </div>
        </article>
    )
}

export default Post