import * as React from 'react'
import styles from './index.module.scss'
import Link from '../components/Link';

const IndexPage: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.Container}>
      Welcome to <Link href='https://github.com/StrontiumJS/Framework'>StrontiumJS</Link>
    </div>
  )
};

export default IndexPage;
