import * as React from 'react';
import styles from './404.module.scss';
import Navbar from '../components/Navbar';
import Head from '../components/Head';

const NotFoundPage: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.NotFoundPage}>
      <Head title='Page not Found' />
      <Navbar />
      404
    </div>
  );
};

export default NotFoundPage;
