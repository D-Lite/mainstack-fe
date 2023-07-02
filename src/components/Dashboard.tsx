import React, { ReactNode } from 'react';
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


} from '@chakra-ui/react';
import PageViewGraph from './charts/PageViewGraph';
import LocationPieGraph from './charts/LocationPieGraph';
import { IPieData } from '../types/interfaces';


const Dashboard = () => {
    const locationPieData: IPieData[] = [
        { name: 'Nigeria', value: 50, color: '#599EEA' },
        { name: 'United States', value: 24, color: '#844FF6' },
        { name: 'Netherlands', value: 24, color: '#0FB77A' },
        { name: 'Andorra', value: 24, color: '#FAB70A' },
        { name: 'Others', value: 24, color: '#F09468' },
    ];

    const referralPieData: IPieData[] = [
        { name: 'Facebook', value: 50, color: '#599EEA' },
        { name: 'Instagram', value: 24, color: '#844FF6' },
        { name: 'LinkedIn', value: 24, color: '#0FB77A' },
        { name: 'Twitter', value: 24, color: '#FAB70A' },
        { name: 'Others', value: 24, color: '#F09468' },
    ];
    return (
        <>
            <Box bg='brandWhite' minH='inherit' w='100vw'>
                <Container justifyContent='flex-start' maxW='100vw' pl={{ base: '20px', md: "320px" }} pr={{ base: 0, md: "60px" }}>
                    <HStack justify='space-between'>
                        <VStack align='flex-start'>
                            <Heading size='lg' fontSize='24px'>
                                Good morning Blessing
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
                        <Button rounded={'full'} my={'5px'}>1 Day</Button>
                        <Button rounded={'full'} my={'5px'}>3 Days</Button>
                        <Button rounded={'full'} my={'5px'}>7 Days</Button>
                        <Button rounded={'full'} my={'5px'}>30 Days</Button>
                        <Button rounded={'full'} my={'5px'}>All Time</Button>
                        <Button rounded={'full'} my={'5px'}>Custom Time</Button>
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
                            500
                        </Heading>
                        <PageViewGraph />
                    </Box>

                    <Box my='24px'>
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
                                        <VStack align='left' w='40%' spacing='18px'>
                                            {locationPieData.map((entry, index) => (
                                                <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{entry.name}   {entry.value}%</Heading>
                                            ))}
                                        </VStack>
                                        <>
                                            <LocationPieGraph data={locationPieData} />
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
                                        <VStack align='left' w='40%' spacing='18px'>
                                            {referralPieData.map((entry, index) => (
                                                <Heading key={`cell-${index}`} as='h6' fontSize='14px'>{entry.name}   {entry.value}%</Heading>
                                            ))}
                                        </VStack>
                                        <>
                                            <LocationPieGraph data={referralPieData} />
                                        </>
                                    </HStack>
                                </Box>

                            </Box>
                            {/* <Box border={'1px solid'}
                                borderColor={useColorModeValue('gray.200', 'gray.700')}
                                p='24px' borderRadius='10px' w='50%'>
                                Top Referral source
                            </Box> */}
                        </HStack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Dashboard;