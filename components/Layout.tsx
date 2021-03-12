import React from 'react';
import Navbar from './Navbar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Footer from './Footer';


const Layout = ({ href, title, shortTitle, children }: { href: string, title: string, shortTitle: string, children: React.ReactNode }) => {
    return (
        <Flex direction="column" minHeight="100vh">
            <Navbar />

            <Flex direction="column" minHeight="300px" mt={14} flexGrow={1} p={12}>

                <Breadcrumb spacing="8px" mb={8} separator={<ChevronRightIcon color="gray.500" />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href={href}>{shortTitle}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Heading fontFamily="LatoWeb">{title}</Heading>

                {children}

            </Flex>

            <Footer />
        </Flex>
    );
};

export default Layout;