import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    Image,
    Text,
    useColorModeValue,
    BoxProps,
} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

import { MainStackDashboardIcon, MainStackItemFourIcon, MainStackItemFiveIcon, MainStackItemOneIcon, MainStackItemSixIcon, MainStackItemThreeIcon, MainStackItemTwoIcon, MainStackItemEightIcon, MainStackItemSevenIcon, MainStackMoreToggle } from '../assets/MainstackIconPack'
import NavItem from './SidebarItems';
import MainstackLogo from './../assets/mainstack.svg';
import { INavObject } from '../types/interfaces.types';


const LinkItems: INavObject[] = [
    {
        name: '',
        subNavs: [
            { name: 'Dashboard', icon: MainStackDashboardIcon, active: true },
            { name: 'Item 1', icon: MainStackItemOneIcon, active: false },
            { name: 'Item 2', icon: MainStackItemTwoIcon, active: false },
            { name: 'Item 3', icon: MainStackItemThreeIcon, active: false }
        ]
    },
    {
        name: 'OTHERS 1',
        subNavs: [
            { name: 'Item 4', icon: MainStackItemFourIcon, active: false },
            { name: 'Item 5', icon: MainStackItemFiveIcon, active: false }
        ]
    },
    {
        name: 'OTHERS 2',
        subNavs: [
            { name: 'Item 6', icon: MainStackItemSixIcon, active: false },
            { name: 'Item 7', icon: MainStackItemSevenIcon, active: false },
            { name: 'Item 8', icon: MainStackItemEightIcon, active: false }
        ]
    },

];

interface SidebarProps extends BoxProps {
    onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg='brandWhite'
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: '305px' }}
            pos="fixed"
            h="full"
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
                    {navcategory.name && (
                        <NavItem key={navcategory.name} >
                            {navcategory.name}
                        </NavItem>
                    )}
                    {navcategory.subNavs.map((link, index) => (
                        <NavItem key={index} icon={link.icon} activeState={link.active}>
                            {link.name}
                        </NavItem>

                    ))}
                </>
            ))}

            <Box ml="60px" mt='100px' mr='16px'>
                <HStack align='center' justify='space-between'>
                    <Flex align='center'>
                        <Avatar name='Blessing Daniels' src='https://bit.ly/daniel-olabemiwo' size='sm' />
                        <Text ml='12px'>
                            Blessing Daniels
                        </Text>
                    </Flex>
                    <IconButton icon={<MainStackMoreToggle />} variant='unstyled' aria-label={''} />
                </HStack>
            </Box>
        </Box>
    );
};

export default Sidebar;