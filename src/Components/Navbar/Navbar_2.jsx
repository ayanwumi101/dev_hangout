import React from 'react'
import { Box, Text, Image, Flex, Button, VStack, Heading } from '@chakra-ui/react'
import {Add} from 'iconsax-react'
// import logo from '../../../assets/gift_circle_logo.svg'
// import { AddIcon } from '@chakra-ui/icons'

const Navbar_2 = () => {
    return (
        <Box p='3' boxShadow={'sm'}>
            <Flex w='90%' mx='auto' justifyContent='space-between' alignItems={'center'}>
                <Box>
                    <Heading size='md' color='#00BFB2'>DevHangout</Heading>
                    {/* <Image src={logo} /> */}
                </Box>

                <Box>
                    <Button bg='none' color='#0C4C84'> <Add />Create an account</Button>
                    <Button bg={'#00BFB2'} color='white' px='20px'  w='100px' h='38px' boxShadow={'md'} _hover={{ bg: '#00BFB2'}}>Sign in</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar_2