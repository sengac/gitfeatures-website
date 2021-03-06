import React from 'react';
import { AspectRatio, Stack, Box, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Layout from '../components/Layout';
import HtmlHead from '../components/HtmlHead';


const MeasureFeatureOutcomes = () => {
    return (
        <div className="container">
            <HtmlHead title="GitFeatures: Measure Feature Outcomes" description="Measure Feature Outcomes - creating agile feedback loops using feature toggles and contextual identifiers with GitFeatures." />

            <main>
                <Layout title="Measure Feature Outcomes" shortTitle="Measure Feature Outcomes" href="/measure-feature-outcomes" children={(
                    <Stack mt={12} maxWidth="1920px">
                        <Box mb={12} maxW={{ base: "360px", md: "720px" }}>
                            <Text fontSize="xl" mb={4}>Using feature toggles and conditions to measure outcomes</Text>
                            <AspectRatio minW={{ base: "360px", md: "720px" }} ratio={1.77} shadow="xl">
                                <iframe sandbox="allow-same-origin allow-scripts allow-popups"
                                        src="https://videos.gitfeatures.com/videos/embed/a06b3533-1eed-424b-bcb1-5d59bcce14b5"
                                        frameBorder="0" allowFullScreen></iframe>
                            </AspectRatio>
                        </Box>

                        <Heading as="h2" size="md" pb={4}>
                            Trunk-based development & Feature Toggles
                        </Heading>
                        <Text>
                            For every feature that has a toggle state of "enabled" or "completed", GitFeatures generates an entry in the <strong>feature-toggles.yml</strong> of your repository. The benefits of feature toggles and trunk-based development are widely discussed if you quickly search. These articles provide a good overview of how to implement feature toggles:
                        </Text>
                        <UnorderedList pt={4} pl={4} color="brand.500">
                            <ListItem><Link href="https://medium.com/@noahrobi/feature-toggles-give-you-superpowers-78fdeb7ab5e8" isExternal>https://medium.com/@noahrobi/feature-toggles-give-you-superpowers-78fdeb7ab5e8</Link></ListItem>
                            <ListItem><Link href="https://www.thoughtworks.com/insights/blog/managing-feature-toggles-teams" isExternal>https://www.thoughtworks.com/insights/blog/managing-feature-toggles-teams</Link></ListItem>
                        </UnorderedList>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            How to use feature identifiers for contextual feedback on a feature
                        </Heading>
                        <Text>
                            One of the most useful things about a feature in GitFeatures (or feature flags in general) is its identifier. Much the same way as you use this identifier in an if statement to enable or disable a feature, you can also use an identifier in analytical software, such as Google Analytics and send custom events that contain feature identifiers to build goals and perform A/B tests on features. Not only useful for user behavior metrics, it can be used for debugging by sending custom events with the feature identifier to a system such as Sentry or DataDog when an error occurs with the feature. It can also be used inside your app for displaying contextual help or triggering a form that pops up to request feedback from a user if the feature is being used. There is a lot you can do with feature toggles to validate the success of your acceptance criteria.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Superpowers with "Toggle Conditions"
                        </Heading>
                        <Text>
                            An identifier is great for sending feature identifiers to predefined places for all features and turning them on and off, but what if you want to send more information than just the identifier, such as an epic or a user list of allowed users. The freeform "Toggle Conditions" field allows you to put any custom logic that your application interprets. For example, your application could be written to interpret something like this: <pre>{ (JSON.stringify(JSON.parse('{ "sendErrorsTo": "email@biz.com", "sendToDataDog": true, "allowedUsers": ["chrisc", "rolandq", "alexisr"], "featureGroups": ["SPECIAL_USERS", "PRE_RELEASE"], "splitTraffic": "50/50" }'), null, 2)) }</pre>
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Tagging your spec to deploy toggles
                        </Heading>
                        <Text>
                            Unlike a lot of feature toggle management systems, GitFeatures requires you to version control all changes to released features, including the their toggle state. This provides easy traceability via Git history if things go wrong and enables you to target multiple environments and different users through a feature node in your specification and Git tagging.
                        </Text>
                    </Stack>
                )} />
            </main>
        </div>
    );
};

export default MeasureFeatureOutcomes;