import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, chakra, Flex, Text, LinkBox, LinkOverlay, SimpleGrid, Stack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import {FaChartLine, FaCheck, FaExternalLinkAlt, FaGit, FaGitAlt, FaVideo} from 'react-icons/fa';


const Features = () => {
    const Feature = ({ href, icon, title, children }: { href: string, icon: React.ReactNode, title: string, children: React.ReactNode }) => {
        return (
            <Box>
                <Icon
                    boxSize={12}
                    color={useColorModeValue(null,"brand.700")}
                    mb={4}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    {icon}
                </Icon>
                <chakra.h3
                    mb={5}
                    fontFamily="LatoWeb"
                    fontSize="2xl"
                    lineHeight="shorter"
                    fontWeight="extrabold"
                    color={useColorModeValue(null,"gray.900")}
                >
                    <LinkOverlay href={href}>
                        {title}
                    </LinkOverlay>
                </chakra.h3>
                <chakra.p
                    lineHeight="tall"
                    color={useColorModeValue("gray.700", "gray.500")}
                >
                    {children}
                </chakra.p>
            </Box>
        );
    };

    return (
        <Flex
            bg="gray.300"
            p={{ base: 8, md: 20 }}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                px={{ base: 4, lg: 16, xl: 24 }}
                py={{ base: 8, md: 20 }}
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                shadow="xl"
            >
                <LinkBox as="article">
                    <Feature
                        href="/acceptance-criteria"
                        title="Better Acceptance Criteria"
                        icon={<FaCheck />}
                    >
                        Contrary to popular opinion amongst some product owners, a story isn't ready to be started unless it has good acceptance criteria. Product owners - take ownership and collaboratively write acceptance criteria with your peers using <strong>Example Mapping</strong>. Practice the 3Cs - Card (adding a feature in the tree), Conversation (starting an example map), Confirmation (writing the acceptance criteria in Gherkin).
                    </Feature>
                    <Stack mt={4} color="brand.500" fontWeight="bold" isInline spacing={2} alignItems="center">
                        <Box mr={2}><FaVideo /></Box>
                        <Text>How to smash out your acceptance criteria ...</Text>
                    </Stack>
                </LinkBox>

                <LinkBox as="article">
                    <Feature
                        href="/specifications-in-git"
                        title="Specifications in Git"
                        icon={<FaGitAlt />}
                    >
                        Don't put a specification in a wiki, word processor or spreadsheet. Store it in Git and tag it with your releases. Version your specification and feature releases to be in sync with your code - this is what makes a <strong>living specification</strong>. GitFeatures makes this easy for everyone to access through a straightforward web app.
                    </Feature>
                    <Stack mt={4} color="brand.500" fontWeight="bold" isInline spacing={2} alignItems="center">
                        <Box mr={2}><FaVideo /></Box>
                        <Text>Why you should care about living specifications ...</Text>
                    </Stack>
                </LinkBox>

                <LinkBox as="article">
                    <Feature
                        href="/measure-feature-outcomes"
                        title="Measure Feature Outcomes"
                        icon={<FaChartLine />}
                    >
                        There's no point in writing something unless you've checked that it's what your users want. It's not just about verifying that you've met the acceptance criteria that you thought of, but <strong>validating</strong> both the acceptance criteria and the non-functional requirements of the feature with your users through feedback. Capture feedback using feature toggles and contextual identifiers. This is what forms an agile feedback loop for continuous improvement.
                    </Feature>
                    <Stack mt={4} color="brand.500" fontWeight="bold" isInline spacing={2} alignItems="center">
                        <Box mr={2}><FaVideo /></Box>
                        <Text>
                            What is a feedback loop?
                            Here's what you need to know.
                        </Text>
                    </Stack>
                </LinkBox>
            </SimpleGrid>
        </Flex>
    );
};

export default Features;