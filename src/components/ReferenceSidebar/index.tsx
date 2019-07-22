import * as React from 'react';
import styles from './ReferenceSidebar.module.scss';
import { Link } from 'gatsby';
import { entries } from 'lodash';

export interface ReferenceSidebarProps {}

const ReferenceSidebar: React.FunctionComponent<ReferenceSidebarProps> = () => {
  return (
    <div className={styles.ReferenceSidebar}>
      <section className={styles.Section}>
        <div className={styles.SectionTitle}>Database</div>
        <ul className={styles.SectionParts}>
          <li>
            <Link to='/reference/database/introduction/' activeClassName={styles.Active}>
              Introduction
            </Link>
          </li>
          <li>
            <Link to='/reference/database/PostgreSQL/' activeClassName={styles.Active}>
              PostgreSQL
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.Section}>
        <div className={styles.SectionTitle}>Validation</div>
        <ul className={styles.SectionParts}>
          <li>
            <Link to='/reference/validation/validators/' activeClassName={styles.Active}>
              Validators
            </Link>
          </li>
          <li>
            <Link to='/reference/validation/helpers/' activeClassName={styles.Active}>
              Helpers
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ReferenceSidebar;
