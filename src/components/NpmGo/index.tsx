import * as React from 'react'
import styles from './NpmGo.module.scss'
import Typist from 'react-typist'

export interface NpmGoProps {}

const NpmGo: React.FunctionComponent<NpmGoProps> = () => {
  return <div className={styles.NpmGo}>
    $ <Typist startDelay={1000} className={styles.Typist} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>npm i --save strontium</Typist>
  </div>;
}

export default NpmGo
