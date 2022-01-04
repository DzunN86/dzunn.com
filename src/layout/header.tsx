import { Button, Heading, HStack, IconButton, Link, useColorMode } from "@chakra-ui/react"
import NextLink from 'next/link';
import { IoMoon, IoSunny } from 'react-icons/io5';

import { motion } from "framer-motion";


const Header = () => {
  const { colorMode, toggleColorMode} = useColorMode()
  const MotionButton = motion(Button);
  return (
    <HStack as='nav' justifyContent='space-between' alignItems='center' py={3}>
      <NextLink href='/' passHref>
        <Link>
          <Heading size='sm'>Dzun.</Heading>
        </Link>
      </NextLink>
      <HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
        <NextLink href='/about' passHref>
          <MotionButton as={Link} size='sm' variant='ghost'>
            About
          </MotionButton>
        </NextLink>
        <NextLink href='/writings' passHref>
          <MotionButton as={Link} size='sm' variant='ghost'>
            Writings
          </MotionButton>
        </NextLink>
        <NextLink href='/bookmarks' passHref>
          <MotionButton as={Link} size='sm' variant='ghost'>
            Bookmark
          </MotionButton>
        </NextLink>
        <IconButton
          aria-label='toggle theme'
          icon={colorMode === 'light' ? <IoMoon /> : <IoSunny />}
          variant='ghost'
          size='sm'
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  )
}

export default Header;