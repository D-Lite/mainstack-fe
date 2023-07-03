import { useEffect, useState } from 'react';
import {
    HStack,
    Stack,
    VStack,
    Box,
    Container,
    Heading,
    Text,
    ButtonGroup,
    Button,
    useColorModeValue,
    Skeleton,
    Circle,
} from '@chakra-ui/react';

import PageViewGraph from './charts/PageViewGraph';
import PieGraph from './charts/PieGraph';
import { IGraphData, IPieDataForLocation, IPieDataForSources } from '../types/interfaces.types';
import ChartService from '../services/chart.service';
import { capitalizeFirstLetter, dateToLongDate, objectToArray } from '../constants/usables.constant';

const Dashboard = () => {

    const [locations, setLocations] = useState<IPieDataForLocation[]>([]);
    const [sources, setSources] = useState<IPieDataForSources[]>([]);
    const [graphData, setGraphData] = useState<{ views: object }>();
    const [graphDataModified, setGraphDataModified] = useState<IGraphData[]>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        ChartService.getPieData()
            .then((response: any) => {
                setLocations(response.data.top_locations);
                setSources(response.data.top_sources);
                setGraphData(response.data.graph_data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        if (graphData?.views) {
            const dataCheck = objectToArray(graphData?.views);
            setGraphDataModified(dataCheck);
            const dataChecked = dataCheck.forEach((item) => {
                item.key = dateToLongDate(item.key);
            })
        }
    }, [graphData])

    const pageCount = 0 || graphDataModified && graphDataModified.reduce((accumulator, currentObject) => accumulator + currentObject.value, 0);

    const daysButton = [
        { name: '1 Day', active: false },
        { name: '3 Days', active: false },
        { name: '7 Days', active: false },
        { name: '30 Days', active: false },
        { name: 'All Time', active: true },
        { name: 'Custom Time', active: false }
    ]

    let currentTimeoftheDay: 'morning' | 'afternoon' | 'evening' = 'morning';

    function getGreetingTime(): string {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {
            currentTimeoftheDay = 'morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            currentTimeoftheDay = 'afternoon';
        } else {
            currentTimeoftheDay = 'evening';
        }

        return currentTimeoftheDay;
    }
    getGreetingTime()


    useEffect(() => {
        if (sources && locations && graphDataModified) {
            setIsLoaded(true);
        }
    }, [graphDataModified]);

    const timeEmojis = {
        morning: '⛅️',
        afternoon: '☀️',
        evening: '🌙'
    }

    const colors: Array<string> = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'];

    return (
        <>
            <Box bg='brandWhite' minH='inherit' w='100vw'>
                <Container justifyContent='flex-start' maxW='100vw' pl={{ base: '20px', md: "380px" }} pr={{ base: 0, md: "60px" }}>
                    <HStack justify='space-between'>
                        <VStack align='flex-start'>
                            <Heading size='lg' fontSize='24px'>
                                {currentTimeoftheDay && `Good ${currentTimeoftheDay}, Blessing ${timeEmojis[currentTimeoftheDay]}`}
                            </Heading>
                            <Text fontSize='14px'>Check out your dashboard summary.</Text>
                        </VStack>

                        <Text fontSize='14px' color='brandOrange'>View  analytics</Text>
                    </HStack>

                    <ButtonGroup variant='outline' spacing='12px'
                        color='brandBlack' borderRadius='100px' rounded={'full'}
                        my='20px'
                        flexWrap={'wrap'}
                    >
                        {daysButton.map((days, index) => (
                            <Skeleton key={index} size='16' isLoaded={isLoaded}>
                                <Button key={index} rounded={'full'}
                                    my={'5px'}
                                    variant={days.active === true ? 'dayButtonActive' : 'dayButtonInActive'}
                                > {days.name}</Button>
                            </Skeleton>
                        ))}
                    </ButtonGroup>

                    <Box border={'1px solid'}
                        borderColor={useColorModeValue('gray.200', 'gray.700')}
                        px='24px' py='30px' borderRadius='10px'
                    >
                        <HStack>
                            <VStack align='left'>
                                <Skeleton height='40px' isLoaded={isLoaded}>

                                    <Heading size='lg' fontSize='18px'>
                                        Page Views
                                    </Heading>
                                    <Text fontSize='14px'>All time</Text>
                                </Skeleton>
                            </VStack>
                        </HStack>

                        <Skeleton size='20' isLoaded={isLoaded}>

                            <Heading size='lg' fontSize='48px' my='30px'>
                                {pageCount ? pageCount : 0}
                            </Heading>
                        </Skeleton>


                        <Skeleton data-testid="graphDataSkeletonTest" height='500px' isLoaded={isLoaded} fadeDuration={4}>
                            {graphDataModified && <PageViewGraph data={graphDataModified} />}
                        </Skeleton>
                    </Box>

                    <Box my='24px' mx='0'>
                        <Stack spacing='16px' w='100%' direction={['column', 'column', 'column', 'row']}>
                            <Box
                                border={'1px solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                p='24px' borderRadius='12px' w={{ base: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                                <HStack justify='space-between'>
                                    <Skeleton height='40px' isLoaded={isLoaded}>
                                        <Heading size='lg' fontSize='18px'>
                                            Top Locations
                                        </Heading>
                                    </Skeleton>

                                    <Skeleton height='40px' isLoaded={isLoaded}>
                                        <Text fontSize='14px' color='brandOrange'>View full reports</Text>
                                    </Skeleton>
                                </HStack>

                                <Box style={{ width: '100%' }}>
                                    <Skeleton height='300px' isLoaded={isLoaded} fadeDuration={4} data-testid="locationsPieSkeletonTest">

                                        <Stack my='30px' direction={['column', 'column', 'column', 'column', 'row']}>
                                            <VStack align='left' w='100%' spacing='18px'>
                                                {locations.map((entry, index) => (
                                                    <HStack align='left' w='100%' alignItems='center'>
                                                        <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{capitalizeFirstLetter(entry.country)}   {entry.percent}%</Heading>
                                                        <Circle size='3' ml='12px' bg={colors[index]} />
                                                    </HStack>
                                                ))}
                                            </VStack>
                                            <>
                                                {locations && <PieGraph data={locations} colors={colors} />}
                                            </>
                                        </Stack>
                                    </Skeleton>
                                </Box>

                            </Box>

                            <Box
                                border={'1px solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                p='24px' borderRadius='12px' w={{ base: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                                <HStack justify='space-between'>
                                    <Skeleton height='40px' isLoaded={isLoaded}>
                                        <Heading size='lg' fontSize='18px'>
                                            Top Referral source
                                        </Heading>
                                    </Skeleton>

                                    <Skeleton height='40px' isLoaded={isLoaded}>
                                        <Text fontSize='14px' color='brandOrange'>View full reports</Text>
                                    </Skeleton>
                                </HStack>

                                <Box style={{ width: '100%' }}>
                                    <Skeleton height='300px' isLoaded={isLoaded} fadeDuration={4} data-testid="sourcesPieSkeletonTest">
                                        <Stack my='30px' direction={['column', 'column', 'column', 'column', 'row']}>
                                            <VStack align='left' w='100%' spacing='18px'>
                                                {sources.map((entry, index) => (
                                                    <HStack align='left' w='100%' alignItems='center'>
                                                        <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{capitalizeFirstLetter(entry.source)}   {entry.percent}% </Heading>
                                                        <Circle size='3' ml='12px' bg={colors[index]} />
                                                    </HStack>
                                                ))}
                                            </VStack>
                                            <>
                                                {sources && <PieGraph data={sources} colors={colors} />}
                                            </>
                                        </Stack>
                                    </Skeleton>
                                </Box>

                            </Box>
                        </Stack>
                    </Box>
                </Container >
            </Box >
        </>
    )
}

export default Dashboard;