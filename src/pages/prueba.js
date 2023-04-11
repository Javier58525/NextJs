import { useRouter } from "next/router";
import styles from '@/component/styles/Prueba.module.css'
import Link from 'next/link';

export default function Prueba() {
    const router = useRouter();
    const { id } = router.query;

    const pelicula = {
        titulo: "Volver al Futuro",
        sinopsis:
            "Marty McFly, un adolescente de los años 80, viaja en el tiempo a los años 50 en un DeLorean modificado, y debe asegurarse de que sus padres se conozcan para salvar su propio futuro.",
        elenco: "Michael J. Fox, Christopher Lloyd, Lea Thompson",
        calificacion: 8.5,
        imagen: "https://pics.filmaffinity.com/Regreso_al_futuro-100822308-large.jpg",
    };

    return (
        <div className={styles.container}>
            {/* Obtener información detallada de la película/serie según el id */}
            <h1 className={styles.title}>Detalles de la película/serie con id: {id}</h1>
            <div className={styles.movieDetails}>
                <img src={pelicula.imagen} alt={pelicula.titulo} className={styles.movieImage} />
                <div className={styles.movieInfo}>
                    <h2 className={styles.movieTitle}>{pelicula.titulo}</h2>
                    <p className={styles.movieSinopsis}>{pelicula.sinopsis}</p>
                    <p className={styles.movieElenco}>Elenco: {pelicula.elenco}</p>
                    <p className={styles.movieCalificacion}>Calificación: {pelicula.calificacion}</p>
                    <Link href="/" className="button"><button>Ir a la página principal</button></Link>

                </div>
            </div>
        </div>
    )
}
