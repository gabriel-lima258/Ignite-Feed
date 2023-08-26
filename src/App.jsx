import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego',
      role: 'Software Student',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-25 10:22:12'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk',
      role: 'Software Student',
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde pessoal 👋'},
      { type: 'paragraph', content: 'Hoje é dia de codar!'},
      { type: 'link', content: '👉 codding.backend/doctorcare'},
    ],
    publishedAt: new Date('2023-08-23 20:22:12'),
  },
]

export function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>
        
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>

      </div>
    </>
  )
}
