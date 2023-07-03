import React, { ReactNode } from 'react';
import {
    IconButton,
    Flex,
    Heading,
    useColorModeValue,
    FlexProps,
} from '@chakra-ui/react';
import { MainstackIcon } from './Assets';

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const TopNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: '300px' }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
            {...rest}
            w={{ base: '100vw', md: 60 }}

        >

            <Heading size='lg'
                ml={{ base: 0, md: '60px' }}
                fontSize='20px'>
                Dashboard
            </Heading>

            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<MainstackIcon />}
            />
        </Flex>
    );
};

export default TopNav;