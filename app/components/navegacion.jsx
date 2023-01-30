import { Link, useLocation } from '@remix-run/react'

import imagen from '../../public/img/carrito.png'

const Navegacion = () => {

    const location = useLocation()
    
    return (
        <nav className="navegacion">
            <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link>

            <Link to='/nosotros' className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link>

            <Link to='/guitarras' className={location.pathname === '/guitarras' ? 'active' : ''}>Tienda</Link>

            <Link to='/post' className={location.pathname === '/post' ? 'active' : ''}>Blog</Link>
            
            <Link to='/carrito' className={location.pathname === '/carrito' ? 'active' : ''}>
                <img src={imagen} alt="Logo Carrito" />
            </Link>
        </nav>
    )
}

export default Navegacion