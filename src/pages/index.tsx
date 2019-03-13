import * as React from 'react'
import styles from './index.module.scss'
import Navbar from '../components/Navbar';
import Head from '../components/Head';
import NpmGo from '../components/NpmGo';

const IndexPage: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.IndexPage}>
      <Head />
      <Navbar />
      <div className={styles.Content}>
        <div className={styles.Landing}>
          <div className={styles.Hero}>
            <h1>Imagine what you could create</h1>
            <h2>A NodeJS framework for production, not just projects.</h2>

            <NpmGo />
          </div>
        </div>
      </div>
    </div>
  )
};

export default IndexPage;
