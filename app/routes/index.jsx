import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarra from '~/components/listado-guitarra'
import stylesGuitarra from '~/styles/guitarras.css'
import ListadoPosts from '~/components/listado-posts'
import stylesPost from '~/styles/blog.css'
import Curso from '~/components/curso'
import stylesCurso from '~/styles/curso.css'

export async function loader() {
    //Hace consultas al mismo tiempo
    const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()])

    return { guitarras, posts, curso }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarra
        },
        {
            rel: 'stylesheet',
            href: stylesPost
        },
        {
            rel: 'stylesheet',
            href: stylesCurso
        }
    ]
}

//Cambio de titulo de pestaña dinamico
export function meta() {
    return (
        {
            title: 'GuitarLA - Home'
        }
    )
}

const Index = () => {

    const { guitarras, posts, curso } = useLoaderData()

    return (
        <>
            <main className="contenedor">
                <ListadoGuitarra guitarras={guitarras.data} />
            </main>
            <Curso curso={curso.data.attributes} />
            <section className="contenedor">
                <ListadoPosts posts={posts.data} />
            </section>
        </>
    )
}

export default Index