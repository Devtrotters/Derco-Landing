import Contacts from 'components/Contacts';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Projets from 'components/Projets';
import Services from 'components/Services';
import Staff from 'components/Staff';
import Technos from 'components/Technos';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { css } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyle';

export default function Home() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <Projets />
            <Services />
            <Technos />
            <Staff />
            <Contacts />
            <Footer />
        </>
    );
}
