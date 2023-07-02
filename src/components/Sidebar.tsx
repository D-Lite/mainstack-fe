import React, { ReactNode } from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    Heading,
    Image,
    Text,
    useColorModeValue,
    BoxProps,
} from '@chakra-ui/react';
import { Icon, HStack } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md'

import { MainStackDashboardIcon, MainStackItemOneIcon, MainStackItemTwoIcon } from './Assets'
import NavItem from './SidebarItems';
import MainstackLogo from './../assets/mainstack.svg';
import { INavObject } from '../types/interfaces.types';
import { SearchIcon } from '@chakra-ui/icons';


const LinkItems: INavObject[] = [
    {
        name: '',
        icon: MainStackDashboardIcon,
        subNavs: [
            { name: 'Dashboard', icon: MainStackDashboardIcon, active: true },
            { name: 'Item 1', icon: MainStackDashboardIcon, active: false },
            { name: 'Item 2', icon: MainStackDashboardIcon, active: false },
            { name: 'Item 3', icon: MainStackDashboardIcon, active: false }
        ]
    },
    {
        name: 'OTHERS 1',
        icon: MainStackDashboardIcon,
        subNavs: [
            { name: 'Item 4', icon: MainStackDashboardIcon, active: false },
            { name: 'Item 5', icon: MainStackDashboardIcon, active: false }
        ]
    },
    {
        name: 'OTHERS 2',
        icon: MainStackDashboardIcon,
        subNavs: [
            { name: 'Item 6', icon: MainStackDashboardIcon, active: false },
            { name: 'Item 7', icon: MainStackDashboardIcon, active: false },
            { name: 'Item 8', icon: MainStackDashboardIcon, active: false }
        ]
    },

];


interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg='brandWhite'
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: '305px' }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image
                    boxSize='40px'
                    objectFit='cover'
                    src={MainstackLogo}
                    alt='Mainstack logo'
                />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((navcategory) => (
                <>
                    <NavItem key={navcategory.name} icon={navcategory.icon}>
                        {/* <Icon as={navcategory.icon} /> */}
                        {navcategory.name}
                    </NavItem>
                    {navcategory.subNavs.map((link, index) => (
                        <NavItem key={index} icon={MdSettings} activeState={link.active}>
                            {/* <Icon as={MdSettings} /> */}
                            {link.name}
                        </NavItem>

                    ))}
                </>
            ))}

            <Box ml="60px">
                <HStack>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />
                    <Text>
                        Blessing Daniels
                    </Text>
                    <IconButton aria-label='Search database' icon={<SearchIcon />} />
                </HStack>
            </Box>
        </Box>
    );
};

export default Sidebar;