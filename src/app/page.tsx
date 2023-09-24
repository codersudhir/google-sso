import Image from 'next/image'
import styles from './page.module.css'
import Homepage from '../../components/Home/Homepage'
import Header from '../../components/Header/Header'

export default function Home() {
  return (
    <main >
      <Header/>
    <Homepage/>
    </main>
  )
}
