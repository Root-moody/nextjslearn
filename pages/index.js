import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Moody | Home</title>
      </Head>
      <div className='maindiv'>
        <div className='innermain'>
          <h2 className='titles'>Homepage</h2>
          <div>
            <p className='paragraphs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex debitis sunt accusantium, voluptas, architecto blanditiis rerum eos deleniti dicta molestiae doloremque libero voluptates ad beatae repudiandae quis in vero unde eum natus deserunt cumque et? Minus veritatis cumque officia ducimus temporibus ea est ad sapiente.</p>
            <p className='paragraphs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae obcaecati, mollitia natus tempore amet commodi fuga quisquam earum maiores, ipsa quis illum deleniti incidunt. Sapiente itaque molestiae atque voluptatem distinctio quod officia. Accusamus, maiores natus laboriosam similique, soluta aliquam rerum, dignissimos totam quidem magnam ab.</p>
            <p className='paragraphs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem magni dicta nobis dolor expedita facilis obcaecati consectetur repudiandae voluptatem, provident id tempora eius odit non quis nam, adipisci, in animi quasi eaque! Modi, fugit? Reprehenderit voluptates libero culpa voluptatibus dolores, nobis labore reiciendis odio!</p>
          </div>
        </div>
      </div>
    </>
  )
}
