import * as React from 'react';
import styles from './Link.module.scss';

export interface LinkProps {
  className?: string;
  href: string;
  newTab?: boolean;
}

const Link: React.FunctionComponent<LinkProps> = ({ className, children, href, newTab }) => {
  return (
    <a
      className={[styles.Link, className].join(' ')}
      href={href}
      target={newTab ? '_blank' : undefined}
    >
      {children}
    </a>
  );
};

export default Link;
