import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {
    Box,
    Center,
    chakra,
    Text,
    Stack, Button
} from '@chakra-ui/react';


const Footer = () => {
    const bg = useColorModeValue('gray.600', 'gray.600');

    return (
        <>
            <chakra.footer
                bg={bg}
                w="full"
                shadow="md"
            >
            <Center>
                <Stack alignItems="center" direction="row" color="white" fontFamily="LatoWeb" wrap="wrap" pt={12} pb={12}>
                    <Stack isInline spacing={6} ml={2} mb={2}>
                        <Box>
                            <chakra.a href="/terms">
                                <Button variant="ghost" fontWeight="normal" bg="gray.600" colorScheme="gray" _hover={{ bg: "gray.700" }}>Terms & Disclaimer</Button>
                            </chakra.a>
                        </Box>
                        <Box>
                            <chakra.a href="/privacy">
                                <Button variant="ghost" fontWeight="normal" bg="gray.600" colorScheme="gray" _hover={{ bg: "gray.700" }}>Privacy</Button>
                            </chakra.a>
                        </Box>
                        <Box width={4} />
                    </Stack>
                    <Text mb={2}>&copy; Software Engineering & Consulting Pty Ltd 2021</Text>
                </Stack>
            </Center>
            </chakra.footer>
        </>
    );
};

export default Footer;