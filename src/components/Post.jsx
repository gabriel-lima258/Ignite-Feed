import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar} 
                    src="https://github.com/gabriel-lima258.png"
                    />  
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='24 de Agosto às 17:18h' dateTime='2023-08-24 17:18:34'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">👉 jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

        </article>
    )
}