import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="#bb8a94" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/">Home</Link>
        <Link as={RouterLink} to="/projects">Projects</Link>
        <Link as={RouterLink} to="/info">Info</Link>
      </Flex>
    </Box>
  );
};

export default Header;
