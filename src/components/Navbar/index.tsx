import * as React from 'react';
import styles from './Navbar.module.scss';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Topper} />
      <nav className={styles.Nav}>
        <a href='/' className={styles.Brand}>
          <i className='far fa-brackets-curly' /> <span>Strontium</span>
        </a>
        <div className={styles.Search}>
          <i className='far fa-search' />
          <input type='text' placeholder='Search' />
        </div>
        <ul className={styles.NavList}>
          <li>
            <a href='/docs'>Documentation</a>
          </li>
          <li>
            <a href='/tutorial'>Tutorial</a>
          </li>
          <li>
            <a href='/changes'>Changes</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='http://github.com/StrontiumJS' target='_blank'>
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
