import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';

import PageViewGraph from './charts/PageViewGraph';
import PieGraph from './charts/PieGraph';
import { IGraphData, IPieDataForLocation, IPieDataForSources } from '../types/interfaces.types';
import ChartService from '../services/chart.service';
import { capitalizeFirstLetter, dateToLongDate, objectToArray } from '../constants/usables.constant';
import { Flex } from '@chakra-ui/react';

const Dashboard = () => {

    const [locations, setLocations] = useState<IPieDataForLocation[]>([]);
    const [sources, setSources] = useState<IPieDataForSources[]>([]);
    const [graphData, setGraphData] = useState<unknown>();
    const [graphDataModified, setGraphDataModified] = useState<IGraphData[]>();

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

    useEffect(() => {
        getGreetingTime()
    }, []);

    const timeEmojis = {
        morning: '⛅️',
        afternoon: '☀️',
        evening: '🌙'
    }
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

                            <Button key={index} rounded={'full'} my={'5px'} colorScheme={days.active === true ? 'red' : 'gray'} bg={days.active ? 'red.300' : 'brandWhite'}>{days.name}</Button>

                        ))}
                    </ButtonGroup>

                    <Box border={'1px solid'}
                        borderColor={useColorModeValue('gray.200', 'gray.700')}
                        px='24px' py='30px' borderRadius='10px'
                    >
                        <HStack>
                            <VStack align='left'>
                                <Heading size='lg' fontSize='18px'>
                                    Page Views
                                </Heading>
                                <Text fontSize='14px'>All time</Text>
                            </VStack>
                        </HStack>
                        <Heading size='lg' fontSize='48px' my='30px'>
                            {pageCount ? pageCount : 0}
                        </Heading>
                        {graphDataModified && <PageViewGraph data={graphDataModified} />}
                    </Box>

                    <Box my='24px' mx='0'>
                        <Stack spacing='16px' w='100%' direction={['column', 'column', 'column', 'row']}>
                            <Box
                                border={'1px solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                p='24px' borderRadius='12px' w={{ base: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                                <HStack justify='space-between'>
                                    <Heading size='lg' fontSize='18px'>
                                        Top Locations
                                    </Heading>
                                    <Text fontSize='14px' color='brandOrange'>View full reports</Text>
                                </HStack>

                                <Box style={{ width: '100%' }}>
                                    <Stack my='30px' direction={['column', 'column', 'column', 'column', 'row']}>
                                        <VStack align='left' w='100%' spacing='18px'>
                                            {locations.map((entry, index) => (
                                                <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{capitalizeFirstLetter(entry.country)}   {entry.percent}%</Heading>
                                            ))}
                                        </VStack>
                                        <>
                                            {locations && <PieGraph data={locations} />}
                                        </>
                                    </Stack>
                                </Box>

                            </Box>

                            <Box
                                border={'1px solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                p='24px' borderRadius='12px' w={{ base: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                                <HStack justify='space-between'>
                                    <Heading size='lg' fontSize='18px'>
                                        Top Referral source
                                    </Heading>
                                    <Text fontSize='14px' color='brandOrange'>View full reports</Text>
                                </HStack>

                                <Box style={{ width: '100%' }}>
                                    <Stack my='30px' direction={['column', 'column', 'column', 'column', 'row']}>
                                        <VStack align='left' w='100%' spacing='18px'>
                                            {sources.map((entry, index) => (
                                                <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{capitalizeFirstLetter(entry.source)}   {entry.percent}%</Heading>
                                            ))}
                                        </VStack>
                                        <>
                                            {sources && <PieGraph data={sources} />}
                                        </>
                                    </Stack>
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