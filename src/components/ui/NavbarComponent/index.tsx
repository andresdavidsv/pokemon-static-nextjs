import React from 'react';
import NextLink from 'next/link';
import { Button, Navbar, Text } from '@nextui-org/react';

export const NavbarComponent = () => {
  return (
    <Navbar isBordered variant={'sticky'}>
      <Navbar.Brand id="content-brand">
        <NextLink href="/" passHref>
          <Text b color="inherit" hideIn="xs">
            Pokemon Static
          </Text>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <NextLink href="/" passHref>
          Home
        </NextLink>
        <NextLink href="/favorites" passHref>
          Favorites
        </NextLink>
      </Navbar.Content>
      <Navbar.Content id="content-login">
        <NextLink color="inherit" href="/login" passHref>
          Login
        </NextLink>
      </Navbar.Content>
    </Navbar>
  );
};
