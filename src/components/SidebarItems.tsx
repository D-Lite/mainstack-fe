import { ReactText } from 'react';

import {
    Flex,
    Icon,
    Link,
    FlexProps,
    ComponentWithAs,
    IconProps,
} from '@chakra-ui/react';

interface NavItemProps extends FlexProps {
    icon?: ComponentWithAs<"svg", IconProps>;
    children: ReactText;
    activeState?: boolean;
}

const NavItem = ({ icon, children, activeState }: NavItemProps) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} my='16px'>
            <Flex
                align="center"
                p="4"
                pl="60px"
                borderLeft={activeState && "3px solid"}
                borderTopColor={activeState && "brandOrange"}
                color={activeState && "brandOrange"}
                role="group"

                cursor="pointer"
                _hover={{
                    color: 'brandOrange',
                }}
            >
                {icon && (
                    <Icon
                        mr="4"
                        ml="0px"
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