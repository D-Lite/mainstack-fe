import { ComponentWithAs, IconProps } from "@chakra-ui/react";

interface IPieData {
    name: string;
    value: number;
    color: string;
}

interface INavNestedObject {
    name: string;
    icon: ComponentWithAs<"svg", IconProps>;
    active: boolean;
}

interface INavObject {
    name: string;
    icon: ComponentWithAs<"svg", IconProps>;
    subNavs: INavNestedObject[];
}

export type { IPieData, INavObject };