import MediaQuery from 'react';
import styled, { keyframes } from 'styled-components';

export const ContainerGlobal = styled.section`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    box-sizing: content-box;
    padding-left: 15px;
    @media (min-width: 1440px) and (max-width: 1440px) {
        padding-left: 150px;
        padding-top: 55px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        padding-left: 380px;
        padding-top: 55px;
        height: 520px;
    }
`;
export const TextOutil = styled.p`
    font-weight: 300;
    font-size: 40px;
    line-height: 55px;
    display: none;
    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 836px;
        height: 60px;
        display: initial;
        padding-left: 165px;
        margin-top: 100px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        width: 836px;
        height: 60px;
        display: initial;
        padding-left: 320px;
        margin-top: 100px;
    }
`;

export const ContainerTechno = styled.section`
    height: 440px;
    margin: 15px;
    background-color: #000000;
    padding-top: 110px;
    padding-left: 3vh;
    padding-right: 3vh;

    @media (min-width: 414px) and (max-width: 414px) {
        margin-left: 33px;
    }
    @media (min-width: 768px) and (max-width: 768px) {
        width: 342px;
        height: 440px;
        margin-left: 27px;
        margin-top: 150px;
        @media (min-width: 1440px) and (max-width: 1440px) {
            width: 350px;
            height: 450px;
        }
        @media (min-width: 1920px) and (max-width: 1920px) {
        }
    }
`;
export const ContainerTechno2 = styled(ContainerTechno)`
    &.techno2 {
        transform: translatex(-347px);

        @media (min-width: 414px) and (max-width: 414px) {
            transform: translatex(-370px);
        }
        @media (min-width: 768px) and (max-width: 768px) {
            transform: translatex(-380px);
        }
    }
`;
export const ContainerTechno3 = styled(ContainerTechno)`
    &.techno3 {
        transform: translatex(-694px);
        @media (min-width: 414px) and (max-width: 414px) {
            transform: translatex(-738px);
        }
        @media (min-width: 768px) and (max-width: 768px) {
            transform: translatex(-375px);
        }
    }
`;
export const TitreUx = styled.p`
    font-size: 25px;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 30px;
    width: 258px;
    height: 65px;
`;
export const ParagraphUx = styled.p`
    font-size: 16px;
    margin-top: 20px;
    margin-left: 15px;
    margin-bottom: 40px;
    width: 262px;
    height: 135px;
`;

export const ContainerBouttons = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
    margin-bottom: 100px;
    @media (min-width: 768px) and (max-width: 768px) {
        justify-content: flex-start;
        margin-left: 45px;
        margin-top: 6px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        display: none;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        display: none;
    }
`;

export const Boutton1 = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000000;
    border-radius: 90%;
    width: 80px;
    height: 80px;
    align-items: center;
    cursor: pointer;
`;
export const Boutton2 = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000000;
    width: 80px;
    height: 80px;
    border-radius: 90%;
    margin-left: 30px;
    align-items: center;
    cursor: pointer;
`;
