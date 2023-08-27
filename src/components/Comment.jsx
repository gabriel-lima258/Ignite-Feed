import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeCount() {
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar
            hasBorder={false}
            src="https://github.com/maykbrito.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Lima</strong>
                            <time title='24 de Agosto às 17:18h' dateTime='2023-08-24 17:18:34'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}