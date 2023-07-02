import React, { ReactNode } from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Container,
    ComponentWithAs,
    IconProps,
} from '@chakra-ui/react';

import { MainStackDashboardIcon, MainStackItemOneIcon, MainStackItemTwoIcon } from './Assets'
import NavItem from './SidebarItems';
import MainstackLogo from './../assets/mainstack.svg';


interface NestedObject {
    name: string;
    icon: ComponentWithAs<"svg", IconProps>;
}


const myArray: MyObject[] = [
    {
        property1: "Object 1",
        property2: 1,
        nestedObject: {
            nestedProperty1: "Nested 1",
            nestedProperty2: 10,
        },
    },

];

interface LinkItemProps {
    name: string;
    icon?: ComponentWithAs<"svg", IconProps>;
    subItems: NestedObject;
}
const LinkItems: Array<LinkItemProps> = [
    {
        name: 'Home',
        icon: MainStackDashboardIcon,
        subItems: {
            name: 'Dashboard', icon: MainStackDashboardIcon,
            name: 'Item1', icon: MainStackDashboardIcon,
            name: 'Item2', icon: MainStackDashboardIcon,
            name: 'Item3', icon: MainStackDashboardIcon,
        }
    },
    {
        name: 'Home',
        icon: MainStackDashboardIcon, subItems: {
            name: 'Dashboard', icon: MainStackDashboardIcon,
            name: 'Item1', icon: MainStackDashboardIcon,
            name: 'Item2', icon: MainStackDashboardIcon,
            name: 'Item3', icon: MainStackDashboardIcon,
        }
    },
    {
        name: 'Home',
        icon: MainStackDashboardIcon, subItems: {
            name: 'Dashboard', icon: MainStackDashboardIcon,
            name: 'Item1', icon: MainStackDashboardIcon,
            name: 'Item2', icon: MainStackDashboardIcon,
            name: 'Item3', icon: MainStackDashboardIcon,
        }
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
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image
                    boxSize='40px'
                    objectFit='cover'
                    src={MainstackLogo}
                    alt='Mainstack logo'
                />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};



export default Sidebar;