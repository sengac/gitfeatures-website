import React from 'react';
import Head from 'next/head';


const HtmlHead = ({ title, description }: { title: string, description: string }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};

export default HtmlHead;