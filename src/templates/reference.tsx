import * as React from 'react';
import { graphql } from 'gatsby';
import styles from './reference.module.scss';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import ReferenceSidebar from '../components/ReferenceSidebar';

export interface ReferencePageProps {
  data: ReferenceTemplateQuery;
}

const ReferencePage: React.FunctionComponent<ReferencePageProps> = ({ data }) => {
  const page = data.current;

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

export interface ReferenceTemplateQuery {
  current: {
    html: string;
    tableOfContents: string;
    frontmatter: {
      title: string;
      module: string | null;
    };
  };
  // sidebar: {
  //   edges: ReferenceSidebarEdge[];
  // };
}

// export interface ReferenceSidebarEdge {
//   node: {
//     fields: {
//       slug: string;
//     };
//     frontmatter: {
//       title: string;
//       module: string | null;
//     };
//   };
// }

export const query = graphql`
  query($slug: String!) {
    current: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        module
      }
    }
  }
`;
