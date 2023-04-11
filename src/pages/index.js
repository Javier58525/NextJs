import styles from '@/component/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const peliculaDestacada = {
    id: 1,
    titulo: 'Volver al Futuro',
    sinopsis:
      'Marty McFly, un adolescente de los años 80, viaja en el tiempo a los años 50 en un DeLorean modificado, y debe asegurarse de que sus padres se conozcan para salvar su propio futuro.',
    elenco: 'Michael J. Fox, Christopher Lloyd, Lea Thompson',
    calificacion: 8.5,
    imagen: 'https://pics.filmaffinity.com/Regreso_al_futuro-100822308-large.jpg',
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1} tabIndex="1">¡Bienvenido a Claro Video!</h1>
      <p className={styles.paragraph} tabIndex="2">Contenido destacado, novedades, categorías, etc.</p>
      <h2 className={styles.heading2} tabIndex="3">Película destacada</h2>
      <h3 className={styles.heading3} tabIndex="4">{peliculaDestacada.titulo}</h3>
      <p className={styles.paragraph} tabIndex="5">{peliculaDestacada.sinopsis}</p>
      <p className={styles.paragraph} tabIndex="6">Elenco: {peliculaDestacada.elenco}</p>
      <Link href={`/prueba`} tabIndex="7">
        <img className={styles.imageLink} src={peliculaDestacada.imagen} alt={peliculaDestacada.titulo} width={500} height={700} tabIndex="0" />

      </Link>
    </div>
  );
}

