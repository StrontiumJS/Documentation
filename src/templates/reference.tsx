import * as React from 'react';
import { graphql } from 'gatsby';
import styles from './reference.module.scss';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import ReferenceSidebar from '../components/ReferenceSidebar';

const ReferencePage: React.FunctionComponent<any> = ({ data }) => {
  const page = data.markdownRemark;

  return (
    <div className={styles.ReferencePage}>
      <Head title={page.frontmatter.title} />
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.Sidebar}>
          <ReferenceSidebar />
        </div>
        <div className={styles.Content}>
          <h1>{page.frontmatter.title}</h1>
          <div
            className={styles.Table}
            dangerouslySetInnerHTML={{ __html: page.tableOfContents }}
          />
          <div className={styles.Markdown} dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </div>
    </div>
  );
};

export default ReferencePage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        module
      }
    }
  }
`;
