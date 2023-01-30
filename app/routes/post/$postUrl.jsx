import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers.js'
import styles from '~/styles/blog.css'

export async function loader({ params }) {
    const { postUrl } = params
    const post = await getPost(postUrl)

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Blog not found'
        })
    }

    return post
}


export function meta({ data }) {
    if (!data) {
        return {
            title: 'Blog not found',
            description: 'Blog not found'
        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`
    }
}

const Post = () => {

    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes

    return (
        <article className='contenedor post'>
           <img src={imagen.data.attributes.url} alt={`Imagen del blog ${titulo}`} className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    )
}

export default Post