import NextLink from 'next/link'
import {
  Box,
  HStack,
  Button,
  Container,
  ButtonGroup,
  Heading,
  Flex,
  Link,
} from '@chakra-ui/react'

export const NavBar = () => (
  // TODO: add border/drop-shadow to surrounding container
  <Box shadow='xs' w='full'>
    <Container m={5} w='full' p={0}>
      <HStack
        w='full'
        spacing={10}
        alignItems='flex-end'
        justifyContent='space-between'
      >
        <Link href='/'>
          <Heading size='xl'>Timershare</Heading>
        </Link>
        {/* <Link href='/timer/oaisjfaodsf'>
          <Heading size='lg'>test room</Heading>
        </Link> */}
      </HStack>
    </Container>
  </Box>
)
