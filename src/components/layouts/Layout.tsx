import React, { FC } from 'react';
import Head from 'next/head';
import { Container } from '@nextui-org/react';

import dynamic from 'next/dynamic';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const NavbarComponent = dynamic(
  () =>
    import('../ui/NavbarComponent/index').then((mod) => mod.NavbarComponent),
  {
    ssr: false,
  }
);

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Admin Tool'}</title>
        <meta name="author" content="Andres Solarte" />
        <meta name="descritpion" content="Internal Tool" />
        <meta name="keywords" content="Internal Tool" />
      </Head>
      <NavbarComponent />
      <Container fluid>
        <main>{children}</main>
      </Container>
    </>
  );
};
