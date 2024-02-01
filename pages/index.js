import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <div style={{ textAlign: 'center' }}>
      Jeremy Paul T. Pangan

My hobbies is Reading and Watching Anime.
I took the course Computer Engineering because I wanted to learn more about Computers
I still don't know what I see in myself in 5 years
      </div>
      <div style={{ textAlign: 'center' }}>
        <strong>My Expectations in this subject is::</strong>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', marginLeft: '2em' }}>
          <li>I hope this subject is Fun. </li>
          <li>Learn a lot. </li>
          <li>Hope this helps me in my future.</li>
          <li>updated my code</li>
        </ul>
      </div>
      </section>
    </Layout>
  );
}