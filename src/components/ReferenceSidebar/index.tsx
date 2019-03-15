import * as React from 'react';
import styles from './ReferenceSidebar.module.scss';
import { Link } from 'gatsby';
import { entries } from 'lodash';
import { ReferenceSidebarEdge } from '../../templates/reference';

export interface ReferenceSidebarProps {
  data: ReferenceSidebarEdge[];
}

interface Article {
  slug: string;
  title: string;
  module: string | null;
}

const ReferenceSidebar: React.FunctionComponent<ReferenceSidebarProps> = ({ data }) => {
  const articles = data.map(({ node }) => ({
    slug: node.fields.slug,
    title: node.frontmatter.title,
    module: node.frontmatter.module,
  }));

  const grouped = entries(
    articles.reduce(
      (modules, article) => {
        if (article.module === null) {
          return modules;
        }

        if (modules[article.module]) {
          modules[article.module].push(article);
        } else {
          modules[article.module] = [article];
        }
        return modules;
      },
      {} as { [key: string]: Article[] },
    ),
  );

  return (
    <div className={styles.ReferenceSidebar}>
      {grouped.map(([name, articles]) => (
        <section key={name} className={styles.Section}>
          <div className={styles.SectionTitle}>{name}</div>
          <ul className={styles.SectionParts}>
            {articles.map((article) => (
              <li key={article.slug}>
                <Link to={article.slug} activeClassName={styles.Active}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default ReferenceSidebar;
