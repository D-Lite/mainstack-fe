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

} from '@chakra-ui/react';

const Dashboard = () => {
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

                </Container>
            </Box>
        </>
    )
}

export default Dashboard;