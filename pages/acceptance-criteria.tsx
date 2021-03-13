import React from 'react';
import { AspectRatio, Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import HtmlHead from '../components/HtmlHead';


const AcceptanceCriteria = () => {
    return (
        <div className="container">
            <HtmlHead title="GitFeatures: Acceptance Criteria" description="Card, Conversation, Confirmation - developing acceptance criteria with GitFeatures." />

            <main>
                <Layout title="Card, Conversation, Confirmation" shortTitle="Acceptance Criteria" href="/acceptance-criteria" children={(
                    <Stack mt={12} maxWidth="1920px">
                        <Box mb={12} maxW={{ base: "360px", md: "720px" }}>
                            <Text fontSize="xl" mb={4}>The 3Cs with GitFeatures</Text>
                            <AspectRatio minW={{ base: "360px", md: "720px" }} ratio={1.77} shadow="xl">
                                <iframe
                                    title="todo"
                                    src="https://www.youtube.com/embed/x"
                                    allowFullScreen
                                />
                            </AspectRatio>
                        </Box>

                        <Heading as="h2" size="md" pb={4}>
                            Card: Product owner picks an item from the product backlog
                        </Heading>
                        <Text>
                            Card, Conversation, Confirmation (3Cs) are often forgotten or misunderstood in many agile projects. Rather than product owners creating good acceptance criteria,
                            developers and other team members are left with the task of interpreting vague user stories and writing an implementation. Frequently,
                            things are redone when the expectations of the product owner or stakeholders are not met. Worse still is the spectre of "workshopping",
                            where a solution is developed from a large number of meetings and circular discussions. This is not a smart or fair way to work.
                            So how does a product owner know what to build and how should they communicate what needs to be done to the team?
                        </Text>

                        <Text fontSize="sm" fontWeight="italic" pt={4}>
                            Note: JavaScript/TypeScript, React and Cucumber are used as examples in the following processes, but different examples can be made for most languages.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Prototypes and mocks with spike tasks is part of Design Thinking and BDD
                        </Heading>
                        <Text>
                            A spike task is time-boxed way to test an idea or prototype a design. This ties in well with Behavior-Driven Development and Design Thinking
                            since it puts the user interaction first. It can be a safe way to mock a prototype and help the product owner and team figure out what to create.
                            Prototypes can be made with UX wire-framing products such as <Link href="https://www.figma.com/" isExternal>Figma</Link>, <Link href="https://www.invisionapp.com/" isExternal>Invision</Link> or <Link href="https://balsamiq.com/" isExternal>Balsamiq</Link>.
                            For developers, better outcomes may be achieved using component libraries / design systems such as <Link href="https://chakra-ui.com/" isExternal>Chakra UI</Link> and <Link href="https://theme-ui.com/" isExternal>Theme UI</Link>.
                            If using a component library, mock data can be generated with libraries such as <Link href="https://miragejs.com/" isExternal>Mirage.js</Link> or <Link href="https://mswjs.io/" isExternal>Mock Service Worker</Link> to help gain a more realistic understanding of user behaviors and requirements.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Conversation: Example Mapping
                        </Heading>
                        <Text>
                            Example Mapping is a structured way to facilitate the conversation and drive the 3Cs. A product owner and team may start planning for a card by organising a
                            "Three Amigos" Example Mapping meeting. These meetings are traditionally a product owner, a developer and a tester.
                            However, this excludes designers who are often the most important contributors to  product design - since BDD flows from interface design.
                            For this reason, a "Four Amigos" meeting may be better at achieving the right outcomes.
                            It's important to note that example mapping meetings don't stop with the team.
                            There should be enough meetings to gather requirements and they should also involve stakeholders.
                            In general, no more than three people should attend the meetings and meetings should also be time-boxed to 25 minutes.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Prototypes and conversations lead to more cards, questions, prototypes and conversations
                        </Heading>
                        <Text>
                            The process of Example Mapping works by refining user stories - generating new, removing or clarifying existing stories, finding out what is not known (questions) and provide useful information for prototyping. During the conversation, ideas from the team around the design of the user interface should happen. Examples and rules that are added to the example map during the meeting will give a UX designer or developer enough information to mock up a prototype after the meeting. Anything that is not clearly understood is a question and assigned to a team member to investigate for a future Example Mapping meeting.
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Confirmation: Writing acceptance criteria with Gherkin
                        </Heading>
                        <Text>
                            Once all questions are answered and the user story is refined, usually a developer and possibly a tester will write the acceptance criteria in "Gherkin" format (Given, When, Then).
                            A good tester should know what to test and think of things that a developer normally doesn't.
                            However, a developer will know how the Gherkin needs to be written so they can write an implementation more easily.
                            Developers should drive the final Gherkin that gets written. In the end, the confirmation is an automated test - A Gherkin "Cool.feature" file,
                            an acceptance test file like "Cool.test.ts" that uses something like Jest-Cucumber to pair the feature and test files.
                            Acceptance tests are written using something like React Testing Library, Playwright or Cypress to drive them, and the implementation would be called something like "Cool.tsx".
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            The TDD part of BDD: Writing tests then implementing them like a Testing Trophy
                        </Heading>
                        <Text pb={6}>
                            Here is where the unfortunate naming of Behavior-Driven Development (BDD) is conflated with Test-Driven Development (TDD).
                            TDD, commonly referring to "unit test" driven development, is a best practice of writing a test first then writing the implementation.
                            A BDD test, commonly referring to a form of "integration test" driven development, is where you write the Gherkin first, then write the test, then write the implementation.
                            This is also known as Acceptance Test-Driven Development (ATDD). A unit test generally tests individual functions, algorithms and small units of code.
                            An integration test generally tests an how an interface behaves, such as a user interface or a programming interface (API).
                            In terms of user interfaces, there are interface testing libraries, and in terms of APIs there are methodologies such as Consumer-Driven Contract (CDC)
                            using tools such as <Link href="https://pactflow.io/" isExternal>Pact Flow</Link> or <Link href="https://spring.io/projects/spring-cloud-contract" isExternal>Spring Cloud Contract</Link> which enforces design by contract. Gherkin is a single-sided test that generally focuses on the boundaries of user interaction and CDC is a double-sided test that focuses on the boundaries of different systems (both consumers and producers) and their behaviors. Gherkin and CDC are both forms of integration tests. To illustrate the importance of integration testing, Kent C. Dodds suggests with the <Link href="https://testingjavascript.com/" isExternal>Testing Trophy</Link> that there should be more integration tests than other types of tests.
                        </Text>

                        <Image aria-label="Testing trophy" src="/testing-trophy-paths.svg" alt="Testing Trophy" maxWidth="360px" ignoreFallback={true} />

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Automated Specification: Powering CI/CD and agile feedback loops
                        </Heading>
                        <Text>
                            Together with automated integration tests, feature toggles and trunk-based development enable your team to release and test features more frequently.
                            However, this strategy all hinges on the quality of your tests, the isolation of your features and the discipline of your team to write good tests and clean up after themselves.
                            If you can manage to enforce this well, the benefits are super-fast and safe deployment to production, much more agility and fast access to user story validation through
                            feature feedback. This is discussed further in <Link color="brand.500" href="/measure-feature-outcomes">Measure Feature Outcomes - creating agile feedback loops using feature toggles and contextual identifiers with GitFeatures.</Link>
                        </Text>

                        <Heading as="h2" size="md" pt={12} pb={4}>
                            Technical debt and bug fixes: where does this fit in with BDD?
                        </Heading>
                        <Text>
                            Bug fixes must always come first in priority before features. Technical debt - such as refactoring for performance or architectural changes should come after that.
                            Lastly, features should be prioritised. While it's important that your team doesn't turn into a "feature factory", you must also at some stage demonstrate value to the customer.
                            For architectural or refactoring work, user stories aren't always great for features (a feature being an incremental improvement).
                            A user story is a user-centric "why are we doing this and what outcome do we want?", so much the same could be done for an architecture or refactoring story.
                            So long as you write the why and what outcome you want to achieve, you're on the right path.
                            For architecture planning, look at <strong><Link href="https://en.wikipedia.org/wiki/Event_storming" isExternal>Event Storming 🌩</Link></strong> and Domain-Driven Design (DDD).
                        </Text>
                    </Stack>
                )} />
            </main>
        </div>
    );
};

export default AcceptanceCriteria;