import React from 'react';
import { AspectRatio, Box, Heading, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import HtmlHead from '../components/HtmlHead';


const SpecificationsInGit = () => {
    return (
        <div className="container">
            <HtmlHead title="GitFeatures: Specifications in Git" description="Specifications in Git - why you should always use Git for living specifications and how GitFeatures can help." />

            <main>
                <Layout title="Specifications in Git" shortTitle="Specifications in Git" href="/specifications-in-git" children={(
                    <Stack mt={12} maxWidth="1920px">
                        <Box mb={12} maxW={{ base: "360px", md: "720px" }}>
                            <Text fontSize="xl" mb={4}>How GitFeatures makes specifications in Git easier to manage</Text>
                            <AspectRatio minW={{ base: "360px", md: "720px" }} ratio={1.77} shadow="xl">
                                <iframe sandbox="allow-same-origin allow-scripts allow-popups"
                                        src="https://videos.gitfeatures.com/videos/embed/a06b3533-1eed-424b-bcb1-5d59bcce14b5"
                                        frameBorder="0" allowFullScreen></iframe>
                            </AspectRatio>
                        </Box>

                        <Heading as="h2" size="md" pb={4}>
                            Standardizing version control
                        </Heading>
                        <Text>
                            While there are other version control systems, Git has become the industry standard for source code. However when it comes to specifications, this is not the case in many organizations who still use word processing documents, spreadsheets or wiki-like document management systems for this purpose. If Git provides excellent traceability, portability and is good enough for code, why is it not the case for the code's specification?
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Difficulty using Git
                        </Heading>
                        <Text>
                            Non-technical people may find Git a challenge to use. How many managers in your organisation have Git installed on their PC? Furthermore, would a non-technical person really want to read a Gherkin feature file to understand how and why the software is written the way it was written? It's suggested that not-only Given, When, Then should appear in these files, but enough information about the feature should also exist in it too, which can be paragraphs long. How do you link graphical designs to such a feature file? In many ways, Gherkin and Git have not been practical for specifications.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Making Git the easy way to store specifications
                        </Heading>
                        <Text>
                            GitFeatures has most of the functionality required for retrieving and storing objects in Git. It saves documents in Markdown format and links them together with YAML trees. It provides access to these files and displays them in an interface that most users would be familiar with.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Self-hosting GitFeatures
                        </Heading>
                        <Text>
                            Best of all, you can self-host GitFeatures since it's MIT licensed - all it requires is a place to host its static HTML, JavaScript, image and font files. You can also configure GitFeatures to launch custom repositories, use your own CORS proxy by default amongst other options by modifying the HTML meta configuration tag.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Trees and documents that are manageable like Mind Maps
                        </Heading>
                        <Text>
                            Part of the reason for GitFeatures' existence is the desire for a mindmap-like specification writing tool. Quickly adding and removing nodes is an important feature in GitFeatures - much the same way as it is in a mindmap tool. Nodes can be added and remove using keystrokes, which can be particularly useful for tasks like Example Mapping.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Tagging your specification with your code and feature releases
                        </Heading>
                        <Text>
                            Would it be good to be able to tag a specification as "dev, test, staging, prod" with Git to align with your code? You can be sure to easily trace all of the decisions that lead up to a feature and a release for any environment. For example, just tag in attendees and a time in your example mapping sessions. That goes straight into Git history, along with the examples, rules and new user stories you all came up with. There will always be a snapshot of this.. but what about the people who tested a feature? No worries! Put the usernames of the people who are to test the feature in the toggle condition of a feature. That's also snapshotted! You'll know who has access to what and what features were enabled for each stage and a history of that too.
                        </Text>
                    </Stack>
                )} />
            </main>
        </div>
    );
};

export default SpecificationsInGit;