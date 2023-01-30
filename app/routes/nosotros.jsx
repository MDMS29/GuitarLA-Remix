import styles from '~/styles/nosotros.css'
import imagen from '../../public/img/nosotros.jpg'

//Cambio de titulo de pestaña dinamico
export function meta() {
    return (
        {
            title: 'GuitarLA - Nosotros'
        }
    )
}

export function links(){
    return[
        {
            rel : 'stylesheet',
            href : styles
        },
        {
            rel : 'preload',
            href : imagen,
            as : 'image'
        }
    ]
}


const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen Nosotros" />
                <div>
                    <p>Suspendisse eu pretium sapien, ac bibendum mi. Pellentesque et posuere dui. Vivamus malesuada metus non turpis placerat euismod. Suspendisse potenti. Duis fermentum iaculis dui, posuere hendrerit elit volutpat a. Sed vel massa et nunc vehicula gravida et convallis eros. Donec aliquet pharetra erat, id sollicitudin velit consectetur a.
                    </p>
                    <p>Sed vulputate tempus velit, commodo pharetra enim efficitur sed. Ut varius tincidunt libero eu mollis. Mauris ac luctus sem. Praesent vitae faucibus orci, eu sodales eros. Maecenas pellentesque velit interdum fringilla finibus. Donec condimentum maximus magna quis pulvinar. Mauris ultricies lacinia sem, ut blandit lacus facilisis non. Nullam feugiat leo ut nibh posuere dictum. Fusce efficitur eu nisl rutrum sagittis. Aliquam sit amet metus lobortis, placerat dolor id, lobortis sem. Mauris non pretium ligula.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros