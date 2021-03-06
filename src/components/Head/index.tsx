import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface HeadProps {
  title?: string;
}

const Head: React.FunctionComponent<HeadProps> = (props) => {
  return (
    <Helmet>
      <link
        rel='stylesheet'
        href='https://pro.fontawesome.com/releases/v5.7.2/css/all.css'
        integrity='sha384-6jHF7Z3XI3fF4XZixAuSu0gGKrXwoX/w3uFPxC56OtjChio7wtTGJWRW53Nhx6Ev'
        crossOrigin='anonymous'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {props.title ? <title>Strontium | {props.title}</title> : <title>Strontium</title>}
    </Helmet>
  );
};

export default Head;
