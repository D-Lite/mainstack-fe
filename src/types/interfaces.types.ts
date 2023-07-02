import { ComponentWithAs, IconProps } from "@chakra-ui/react";

interface IPieDataForLocation {
    count: number;
    percent: number;
    country: string;
}

interface IPieDataForSources {
    count: number;
    percent: number;
    source: string;
}

interface IPieData extends IPieDataForLocation, IPieDataForSources {
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

interface IGraphData {
    key: string;
    value: number;
}

export type { IPieData, INavObject, IPieDataForLocation, IPieDataForSources, IGraphData };