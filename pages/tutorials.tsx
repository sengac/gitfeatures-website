import React from 'react';
import { Box, Text, Heading, Stack, AspectRatio, SimpleGrid, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import Layout from '../components/Layout';
import HtmlHead from '../components/HtmlHead';


const Tutorials = () => {
    return (
        <div className="container">
            <HtmlHead title="GitFeatures: Tutorials" description="Tutorials of how to use GitFeatures." />

            <main>
                <Layout title="Tutorial Videos" shortTitle="Tutorials" href="/tutorials" children={(
                    <>
                        <SimpleGrid minChildWidth="360px" spacing="40px" mt={8}>
                            <Box>
                                <Text fontSize="xl" mb={4}>Getting Started</Text>
                                <AspectRatio maxW="720px" ratio={1.77} shadow="xl">
                                    <iframe
                                        title="todo"
                                        src="https://www.youtube.com/embed/x"
                                        allowFullScreen
                                    />
                                </AspectRatio>
                            </Box>
                            <Box>
                                <Text fontSize="xl" mb={4}>Configuring Git</Text>
                                <AspectRatio maxW="720px" ratio={1.77} shadow="xl">
                                    <iframe
                                        title="todo"
                                        src="https://www.youtube.com/embed/x"
                                        allowFullScreen
                                    />
                                </AspectRatio>
                            </Box>
                            <Box>
                                <Text fontSize="xl" mb={4}>Working With Git</Text>
                                <AspectRatio maxW="720px" ratio={1.77} shadow="xl">
                                    <iframe
                                        title="todo"
                                        src="https://www.youtube.com/embed/x"
                                        allowFullScreen
                                    />
                                </AspectRatio>
                            </Box>
                            <Box>
                                <Text fontSize="xl" mb={4}>Self-hosting GitFeatures</Text>
                                <AspectRatio maxW="720px" ratio={1.77} shadow="xl">
                                    <iframe
                                        title="todo"
                                        src="https://www.youtube.com/embed/x"
                                        allowFullScreen
                                    />
                                </AspectRatio>
                            </Box>
                            <Box>
                                <Text fontSize="xl" mb={4}>CORS Proxy Options</Text>
                                <AspectRatio maxW="720px" ratio={1.77} shadow="xl">
                                    <iframe
                                        title="todo"
                                        src="https://www.youtube.com/embed/x"
                                        allowFullScreen
                                    />
                                </AspectRatio>
                            </Box>
                        </SimpleGrid>
                        <Stack mt={16}>
                            <Heading as="h2" size="lg" fontFamily="LatoWeb">Articles & Videos</Heading>
                            <Text mt={4} fontFamily="LatoWeb">Videos and articles that cover how to apply GitFeatures to
                                your work.</Text>
                            <UnorderedList pl={4} pt={4} spacing={4} color="brand.500">
                                <ListItem>
                                    <Link color="brand.500" href="/acceptance-criteria">
                                        Card, Conversation, Confirmation - developing acceptance criteria with
                                        GitFeatures.
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link color="brand.500" href="/specifications-in-git">
                                        Specifications in Git - why you should always use Git for living specifications
                                        and how GitFeatures can help.
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link color="brand.500" href="/measure-feature-outcomes">
                                        Measure Feature Outcomes - creating agile feedback loops using feature toggles
                                        and contextual identifiers with GitFeatures.
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </Stack>
                    </>
                )} />
            </main>
        </div>
    );
};

export default Tutorials;