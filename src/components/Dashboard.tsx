import React, { useEffect, useState } from 'react';
import {
    HStack,
    VStack,
    Box,
    Container,
    Heading,
    Text,
    ButtonGroup,
    Button,
    useColorModeValue,
    Icon,
    createIcon
} from '@chakra-ui/react';
import PageViewGraph from './charts/PageViewGraph';
import PieGraph from './charts/PieGraph';
import { IGraphData, IPieDataForLocation, IPieDataForSources } from '../types/interfaces.types';
import ChartService from '../services/chart.service';
import { capitalizeFirstLetter, dateToLongDate, objectToArray } from '../constants/usables.constant';
import { icons16 } from '../assets/icons';

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

    const icons = Object.keys(icons16);
    return (
        <>
            <Box bg='brandWhite' minH='inherit' w='100vw'>
                {/* {icons.map(icon => (
                    <Box m={5} textAlign="center">
                        <Icon name={icon} size='16px' color="teal.600" />
                        <Text fontSize="xs" mt={1}>
                            {icon}
                        </Text>
                    </Box>
                ))} */}

                <Container justifyContent='flex-start' maxW='100vw' pl={{ base: '20px', md: "380px" }} pr={{ base: 0, md: "60px" }}>
                    <HStack justify='space-between'>
                        <VStack align='flex-start'>
                            <Heading size='lg' fontSize='24px'>
                                Good morning Blessing
                            </Heading>
                            <Text fontSize='14px'>Check out your dashboard summary.</Text>
                        </VStack>

                        <Text fontSize='14px' color='brandOrange'>View  analytics</Text>
                    </HStack>

                    <Icon viewBox='0 0 20 20' color='red.100'>
                        <path d="M11.25 7.49992V3.33325H16.6667V7.49992H11.25ZM3.33337 9.99992V3.33325H8.75004V9.99992H3.33337ZM11.25 16.6666V9.99992H16.6667V16.6666H11.25ZM3.33337 16.6666V12.4999H8.75004V16.6666H3.33337ZM4.16671 9.16658H7.91671V4.16659H4.16671V9.16658ZM12.0834 15.8333H15.8334V10.8333H12.0834V15.8333ZM12.0834 6.66659H15.8334V4.16659H12.0834V6.66659ZM4.16671 15.8333H7.91671V13.3333H4.16671V15.8333Z" fill="#FF5403" />
                    </Icon>


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
                        <HStack spacing='16px' w='100%'>
                            <Box
                                border={'1px solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                p='24px' borderRadius='12px' w='50%'>
                                <HStack justify='space-between'>
                                    <Heading size='lg' fontSize='18px'>
                                        Top Locations
                                    </Heading>
                                    <Text fontSize='14px' color='brandOrange'>View full reports</Text>
                                </HStack>

                                <Box style={{ width: '100%' }}>
                                    <HStack my='30px'>
                                        <VStack align='left' w='100%' spacing='18px'>
                                            {locations.map((entry, index) => (
                                                <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{capitalizeFirstLetter(entry.country)}   {entry.percent}%</Heading>
                                            ))}
                                        </VStack>
                                        <>
                                            {locations && <PieGraph data={locations} />}
                                        </>
                                    </HStack>
                                </Box>

                            </Box>

                            <Box
                                border={'1px solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                p='24px' borderRadius='12px' w='50%'>
                                <HStack justify='space-between'>
                                    <Heading size='lg' fontSize='18px'>
                                        Top Referral source
                                    </Heading>
                                    <Text fontSize='14px' color='brandOrange'>View full reports</Text>
                                </HStack>

                                <Box style={{ width: '100%' }}>
                                    <HStack my='30px'>
                                        <VStack align='left' w='100%' spacing='18px'>
                                            {sources.map((entry, index) => (
                                                <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{capitalizeFirstLetter(entry.source)}   {entry.percent}%</Heading>
                                            ))}
                                        </VStack>
                                        <>
                                            {sources && <PieGraph data={sources} />}
                                        </>
                                    </HStack>
                                </Box>

                            </Box>
                        </HStack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Dashboard;