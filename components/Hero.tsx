import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Text, Button, Center, chakra, Flex, Stack, Code } from '@chakra-ui/react';
import { FaRocket, FaVideo } from 'react-icons/fa';


const Hero = () => {
    return (
        <>
            <Box
                h="400px"
                mt={8}
                mb={4}
                backgroundImage="url('/you-x-ventures-Oalh2MojUuk-unsplash.jpg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
            />
            <Box px={4} py={8} mx="auto">
                <Box
                    w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                    textAlign={{ base: "left", md: "center" }}
                    mx="auto">
                    <chakra.h1
                        mb={3}
                        fontFamily="LatoWeb"
                        fontSize={{ base: "4xl", md: "5xl" }}
                        fontWeight={{ base: "bold", md: "bold" }}
                        color={useColorModeValue("gray.900", "gray.100")}
                        lineHeight="shorter"
                    >
                        Fueling Behavior-Driven Development 🚀
                    </chakra.h1>
                    <chakra.p
                        mb={12}
                        fontFamily="LatoWeb"
                        fontSize={{ base: "lg", md: "xl" }}
                        color="gray.700"
                        lineHeight="base"
                    >
                        Specifications make a difference. We’re on a mission to help teams <u>deliver the right software</u> using GitFeatures.
                    </chakra.p>
                    <chakra.p
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        color="gray.500"
                        textTransform="uppercase"
                    >
                        Pre-alpha Release v0.0.1-alpha.6
                    </chakra.p>
                    <Center>
                        <Stack p={6} isInline wrap="wrap">
                            <chakra.a href="https://app.gitfeatures.com" target="_blank">
                                <Button
                                    fontFamily="LatoWeb"
                                    fontWeight="normal"
                                    m={2}
                                    variant="solid"
                                    size="lg"
                                    type="submit"
                                    colorScheme="brand"
                                    rightIcon={<FaRocket />}
                                >
                                    Launch GitFeatures
                                </Button>
                            </chakra.a>
                            <chakra.a href="/tutorials">
                                <Button
                                    fontFamily="LatoWeb"
                                    fontWeight="normal"
                                    m={2}
                                    variant="outline"
                                    size="lg"
                                    type="submit"
                                    colorScheme="brand"
                                    rightIcon={<FaVideo />}
                                >
                                    Watch Tutorial
                                </Button>
                            </chakra.a>
                        </Stack>
                    </Center>
                    <Center flexDirection="column" pb={8}>
                        <Text fontSize="xs" fontWeight="semibold" color="gray.500" textTransform="uppercase" mb={2}>Install CLI app bundle & CORS proxy with NPM</Text>
                        <Code display="flex" borderWidth="1px" pt={2} pb={2} pl={4} pr={4} borderRadius="md" borderColor="brand.500" color="brand.700" height={12} fontFamily="Courier New" fontSize="md" alignItems="center">
                            npm i -g gitfeatures@latest
                        </Code>
                    </Center>
                    <chakra.p
                        mb={3}
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        color="gray.700"
                        textTransform="uppercase"
                    >
                        Open Source BDD Specification Tool - For Product Owners, Developers, Testers & UX Designers
                    </chakra.p>
                </Box>
            </Box>
        </>
    );
};

export default Hero;