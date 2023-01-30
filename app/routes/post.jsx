import { Outlet } from '@remix-run/react'
import styles from '~/styles/blog.css'


//Cambio de titulo de pestaña dinamico
export function meta() {
    return (
        {
            title: 'GuitarLA - Blogs'
        }
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

const Blog = () => {
    return (
        <main className="contenedor">
            <Outlet />
        </main>
    )
}

export default Blog