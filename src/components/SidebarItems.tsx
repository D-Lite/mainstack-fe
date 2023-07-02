import React, { ReactNode } from 'react';
import { ReactText } from 'react';

import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    TextProps,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    ComponentWithAs,
    IconProps,
} from '@chakra-ui/react';

interface NavItemProps extends FlexProps {
    icon: ComponentWithAs<"svg", IconProps>;
    children: ReactText;
    activeState: boolean;
}

const NavItem = ({ icon, children, activeState }: NavItemProps) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} my='16px'>
            <Flex
                align="center"
                p="4"
                borderLeft={activeState && "2px solid"}
                borderColor={activeState && "brandOrange"}
                // borderRadius="lg"
                role="group"

                cursor="pointer"
                _hover={{
                    bg: 'brandOrange',
                    color: 'white',
                }}
            >
                {icon && (
                    <Icon
                        mr="4"
                        ml="50px"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link >
    );
};

export default NavItem;