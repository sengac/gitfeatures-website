import React from 'react';
import {Heading, Link, ListItem, Stack, Text, UnorderedList} from '@chakra-ui/react';
import Layout from '../components/Layout';
import HtmlHead from '../components/HtmlHead';
import { ExternalLinkIcon } from '@chakra-ui/icons';


/**
 * Adopted from: https://www.business.vic.gov.au/__data/assets/word_doc/0011/1113599/BV-Privacy-Policy-Template-Update-2017.docx
 */
const Privacy = () => {
    return (
        <div className="container">
            <HtmlHead title="GitFeatures: Privacy" description="Our privacy policy." />

            <main>
                <Layout title="Privacy Policy" shortTitle="Privacy" href="/privacy" children={(
                    <Stack maxWidth="1920px">
                        <Text pt={6} pb={8}>
                            Software Engineering & Consulting Pty Ltd is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
                            We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
                            A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at <Link href="https://www.oaic.gov.au" isExternal>www.oaic.gov.au <ExternalLinkIcon mx="2px" /></Link>
                        </Text>

                        <Heading as="h2" size="md" pt={4}>
                            What is Personal Information and why do we collect it?
                        </Heading>

                        <Text pt={6} pb={8}>
                            Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include: names, addresses, email addresses, phone and facsimile numbers.
                            This Personal Information is obtained in many ways including interviews, correspondence, by telephone, by email, via our websites gitfeatures.com and app.gitfeatures.com, from your website, from media and publications, from other publicly available sources, from cookies and from third parties. We don’t guarantee website links or policy of authorised third parties.
                            We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.
                            When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.
                        </Text>

                        <Heading as="h2" size="md" pt={4}>
                            Sensitive Information
                        </Heading>

                        <Text pt={6} pb={2}>
                            Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.
                        </Text>

                        <Text pt={2} pb={2}>
                            Sensitive information will be used by us only:
                        </Text>

                        <UnorderedList pl={4} pt={2} pb={8}>
                            <ListItem>For the primary purpose for which it was obtained</ListItem>
                            <ListItem>For a secondary purpose that is directly related to the primary purpose</ListItem>
                            <ListItem>With your consent; or where required or authorised by law.</ListItem>
                        </UnorderedList>

                        <Heading as="h2" size="md" pt={4}>
                            Third Parties
                        </Heading>

                        <Text pt={6} pb={8}>
                            Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
                        </Text>

                        <Heading as="h2" size="md" pt={4}>
                            Disclosure of Personal Information
                        </Heading>

                        <Text pt={6} pb={2}>
                            Your Personal Information may be disclosed in a number of circumstances including the following:
                        </Text>

                        <UnorderedList pl={4} pt={2} pb={8}>
                            <ListItem>Third parties where you consent to the use or disclosure; and</ListItem>
                            <ListItem>Where required or authorised by law.</ListItem>
                        </UnorderedList>

                        <Heading as="h2" size="md" pt={4}>
                            Security of Personal Information
                        </Heading>

                        <Text pt={6} pb={8}>
                            Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.
                            When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.
                        </Text>

                        <Heading as="h2" size="md" pt={4}>
                            Access to your Personal Information
                        </Heading>

                        <Text pt={6} pb={8}>
                            You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.
                            Software Engineering & Consulting Pty Ltd will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information.
                            In order to protect your Personal Information we may require identification from you before releasing the requested information.
                        </Text>

                        <Heading as="h2" size="md" pt={4}>
                            Maintaining the Quality of your Personal Information
                        </Heading>

                        <Text pt={6} pb={8}>
                            It is an important to us that your Personal Information is up to date. We  will  take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.
                        </Text>

                        <Heading as="h2" size="md" pt={4}>
                            Policy Updates
                        </Heading>

                        <Text pt={6} pb={8}>
                            This Policy may change from time to time and is available on our website.
                        </Text>

                        <Heading as="h2" size="md" pt={4}>
                            Privacy Policy Complaints and Enquiries
                        </Heading>

                        <Text pt={6} pb={2}>
                            If you have any queries or complaints about our Privacy Policy please contact us at:
                        </Text>

                        <Text pt={2} pb={8}>
                            Unit 10, 49-53 Bilyana Street, Balmoral, Queensland, Australia<br />
                            privacy@gitfeatures.com<br />
                            +61 478 914 599
                        </Text>
                    </Stack>
                )} />
            </main>
        </div>
    );
};

export default Privacy;