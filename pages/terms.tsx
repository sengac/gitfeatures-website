import React from 'react';
import {Heading, Link, Stack, Text} from '@chakra-ui/react';
import Layout from '../components/Layout';
import HtmlHead from '../components/HtmlHead';
import {ExternalLinkIcon} from "@chakra-ui/icons";


const Terms = () => {
    return (
        <div className="container">
            <HtmlHead title="GitFeatures: Terms" description="Website terms and conditions." />

            <main>
                <Layout title="Terms" shortTitle="Terms" href="/terms" children={(
                    <Stack maxWidth="1920px">
                        <Heading as="h2" size="md" pt={8}>
                            Disclaimer
                        </Heading>

                        <Text pt={8} pb={2} fontWeight="bold">
                            Software Engineering & Consulting Pty Ltd accepts no responsibility for the accuracy or completeness of any material contained on this site.
                        </Text>
                        <Text pt={2} pb={4} fontWeight="bold">
                            Additionally, Software Engineering & Consulting Pty Ltd disclaims all liability to any person in respect of anything, and of the consequences of anything, done or omitted to be done by any such person in reliance, whether wholly or partially, upon any information presented on this site.
                        </Text>

                        <Heading as="h2" size="md" pt={8}>
                            Caution
                        </Heading>

                        <Text pt={8} pb={2}>
                            Material on this site is made available on the understanding that Software Engineering & Consulting Pty Ltd is not providing professional advice. Before relying on any of the material on this site, users should obtain appropriate professional advice. Views and recommendations of third parties, which may also be included on this site, do not necessarily reflect the views of Software Engineering & Consulting Pty Ltd, or indicate a commitment to a particular course of action. Links to other Internet sites are for your convenience. These links do not constitute endorsement of material at those sites, or any associated organisation, product or service.
                        </Text>

                        <Heading as="h2" size="md" pt={8}>
                            Website Code License
                        </Heading>

                        <Text pt={8} pb={4}>
                            &copy; Software Engineering & Consulting Pty Ltd 2021
                        </Text>

                        <Text pt={4} pb={4}>
                            The code for gitfeatures.com is licensed under the Creative Commons Attribution 4.0 International License.
                        </Text>

                        <Text pt={2} pb={4}>
                            A copy of this license can be obtained from: <Link href="https://creativecommons.org/licenses/by/4.0/" isExternal>creativecommons.org/licenses/by/4.0/ <ExternalLinkIcon mx="2px" /></Link>
                        </Text>

                        <Text pt={2} pb={4}>
                            The website code for GitFeatures.com is available in its entirety from <Link href="https://github.com/sengac/gitfeatures-website" isExternal>github.com/sengac/gitfeatures-website <ExternalLinkIcon mx="2px" /></Link>
                        </Text>

                        <Heading as="h2" size="md" pt={8}>
                            Third Party Copyright
                        </Heading>

                        <Text pt={8} pb={4}>
                            Except as permitted by the copyright law applicable to you, you may not reproduce or communicate any third party content on this website, including files downloadable from this website, without the permission of the copyright owner.
                        </Text>

                        <Text pt={2} pb={4}>
                            The Australian Copyright Act allows certain uses of content from the internet without the copyright owner's permission. This includes uses by educational institutions and by Commonwealth and State governments, provided fair compensation is paid. For more information, see <Link href="https://www.copyright.com.au" isExternal>www.copyright.com.au <ExternalLinkIcon mx="2px" /></Link> and <Link href="https://www.copyright.org.au" isExternal>www.copyright.org.au <ExternalLinkIcon mx="2px" /></Link>.
                        </Text>
                    </Stack>
                )} />
            </main>
        </div>
    );
};

export default Terms;