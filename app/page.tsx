import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header';
import Description from '@/components/Description';

function Home() {
  return (
    <main className={styles.main}>
      <Header text="An Awesome Header" subText='Here is the sub text Of the header element' />
      <Description />
    </main>
  )
}
export default Home;