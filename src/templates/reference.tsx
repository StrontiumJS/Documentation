import * as React from 'react';
import { graphql } from 'gatsby';
import styles from './reference.module.scss';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Helmet from 'react-helmet';

const ReferencePage: React.FunctionComponent<any> = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <div className={styles.ReferencePage}>
      <Head title={page.frontmatter.title} />
      <Navbar />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  );
};

export default ReferencePage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        module
      }
    }
  }
`;
