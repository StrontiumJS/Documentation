import * as React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'gatsby';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [search, setSearch] = React.useState('');
  return (
    <div className={styles.Navbar}>
      <div className={styles.Topper} />
      <nav className={styles.Nav}>
        <Link to='/' className={styles.Brand}>
          <span>Strontium</span> <i className='fab fa-js' />
        </Link>
        <div className={styles.Search}>
          <i className='far fa-search' />
          <input
            type='text'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className={styles.NavList}>
          <li>
            <Link to='/reference' activeClassName={styles.NavItemActive} partiallyActive={true}>
              Documentation
            </Link>
          </li>
          <li>
            <Link to='/tutorials'>Tutorial</Link>
          </li>
          <li>
            <Link to='/changes'>Changes</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
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
