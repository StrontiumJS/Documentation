import * as React from 'react';
import styles from './ReferenceSidebar.module.scss';
import { Link } from 'gatsby';

export interface ReferenceSidebarProps {}

const ReferenceSidebar: React.FunctionComponent<ReferenceSidebarProps> = () => {
  return (
    <div className={styles.ReferenceSidebar}>
      <section className={styles.Section}>
        <div className={styles.SectionTitle}>Validation</div>
        <ul className={styles.SectionParts}>
          <li>
            <Link to='/reference/validation/helpers/' activeClassName={styles.Active}>
              Helpers
            </Link>
          </li>
          <li>
            <Link to='/reference/validation/validators/' activeClassName={styles.Active}>
              Validators
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <div className={styles.SectionTitle}>HTTP</div>
        <ul className={styles.SectionParts}>
          <li>
            <Link to='/reference/http/controllers/' activeClassName={styles.Active}>
              Controllers
            </Link>
          </li>
          <li>
            <Link to='/reference/http/fastify/' activeClassName={styles.Active}>
              Fastify
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ReferenceSidebar;
