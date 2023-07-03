import { ReactText } from 'react';

import {
    Flex,
    Icon,
    Link,
    FlexProps,
    Menu,
    MenuButton,
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
                borderLeft={activeState && "3px solid"}
                borderTopColor={activeState && "brandOrange"}
                color={activeState && "brandOrange"}
                // borderRadius="lg"
                role="group"

                cursor="pointer"
                _hover={{
                    bg: 'brandWhite',
                    color: 'brandOrange',
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