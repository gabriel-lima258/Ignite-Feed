import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css';

export function App() {
  return (
    <>
      <Header/>

      <Post
        author="Gabriel Lima"
        content="lorem ipsum dolor sit amet, consectesstur adipaaa"
      />
    </>
  )
}
