import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {
    Box, Button, chakra, Image,
    CloseButton,
    Flex, HStack, IconButton, useDisclosure, VStack, Stack, Center
} from '@chakra-ui/react';
import VisuallyHidden from '@reach/visually-hidden';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaDiscord, FaGithub, FaRocket, FaVideo } from 'react-icons/fa';


const Navbar = () => {
    const bg = useColorModeValue('white', 'gray.800');
    const mobileNav = useDisclosure();

    return (
        <>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
                position="fixed"
                top={0}
                zIndex={9}
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Stack direction="row" spacing={2}>
                        <Center height={8}>
                            <chakra.a
                                href="/"
                                title="GitFeatures Home Page"
                                display="flex"
                                alignItems="center"
                            >
                                <Image aria-label="GitFeatures logo" src="/favicon.svg" alt="GitFeatures logo" height={5} width={5} ignoreFallback={true} />
                                <VisuallyHidden>GitFeatures</VisuallyHidden>
                            </chakra.a>
                        </Center>
                        <Center height={8}>
                            <chakra.h1 fontFamily="LatoWeb" fontSize="md" fontWeight="normal">
                                GitFeatures
                            </chakra.h1>
                        </Center>
                    </Stack>
                    <HStack display="flex" alignItems="center" spacing={1} fontFamily="LatoWeb" fontWeight="normal">
                        <HStack
                            spacing={1}
                            mr={4}
                            color="brand.500"
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <chakra.a href="/tutorials">
                                <Button variant="ghost" fontWeight="normal" rightIcon={<FaVideo />}>Tutorial</Button>
                            </chakra.a>
                            <chakra.a href="https://github.com/sengac/gitfeatures" target="_blank">
                                <Button variant="ghost" fontWeight="normal" rightIcon={<FaGithub />}>GitHub</Button>
                            </chakra.a>
                            <chakra.a href="https://discord.gg/5ePSTT6mwH" target="_blank">
                                <Button variant="ghost" fontWeight="normal" rightIcon={<FaDiscord />}>Discord</Button>
                            </chakra.a>
                        </HStack>
                        <chakra.a href="https://app.gitfeatures.com" target="_blank">
                            <Button colorScheme="brand" size="sm" fontWeight="normal" rightIcon={<FaRocket />}>
                                Launch
                            </Button>
                        </chakra.a>
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />
                                <chakra.a href="/tutorials">
                                    <Button w="full" variant="ghost">
                                        Tutorial
                                    </Button>
                                </chakra.a>
                                <chakra.a href="https://github.com/gitfeatures/gitfeatures" target="_blank">
                                    <Button w="full" variant="ghost">
                                        GitHub
                                    </Button>
                                </chakra.a>
                                <chakra.a href="https://discord.gg/5ePSTT6mwH" target="_blank">
                                    <Button w="full" variant="ghost">
                                        Discord
                                    </Button>
                                </chakra.a>
                                <chakra.a href="https://app.gitfeatures.com" target="_blank">
                                    <Button w="full" variant="ghost">
                                        Launch
                                    </Button>
                                </chakra.a>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </>
    );
};

export default Navbar;