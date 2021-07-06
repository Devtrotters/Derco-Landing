import styled, { keyframes } from 'styled-components';

export const ImgAktif = styled.div`
    height: 200px;
    background-image: url('https://zupimages.net/up/21/25/u0uu.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 10 vh;
    @media (min-width: 768px) and (max-width: 768px) {
        height: 307px;
        margin-left: 39px;
        width: 690px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        visibility: hidden;
        position: absolute;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        visibility: hidden;
        position: absolute;
    }
`;

export const TitreSite = styled.p`
    font-size: 25px;
    margin-top: 10px;
    margin-left: 15px;
    margin-bottom: 30px;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 40px;
        padding-left: 23px;
        margin-bottom: 60px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-weight: 500;
        font-size: 100px;
        line-height: 137px;

        margin-top: 110px;
        margin-left: 165px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-weight: 500;
        font-size: 100px;
        line-height: 137px;

        margin-top: 110px;
        margin-left: 320px;
    }
`;
export const ImgHealthy = styled(ImgAktif)`
    background-image: url('https://zupimages.net/up/21/25/7gcu.jpg');
`;
export const ImgSecret = styled(ImgAktif)`
    background-image: url('https://zupimages.net/up/21/25/tdem.jpg');
`;
export const ImgKinosa = styled(ImgAktif)`
    background-image: url('https://www.datocms-assets.com/46261/1618298142-headerparticulier.webp');
`;
export const ImgWinner = styled(ImgAktif)`
    background-image: url('https://zupimages.net/up/21/25/d3cl.jpg');
`;
