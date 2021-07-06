import styled, { keyframes } from 'styled-components';

export const ContainerService = styled.section`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    @media (min-width: 768px) and (max-width: 768px) {
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        padding-top: 240px;
        margin-bottom: 550px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        padding-top: 240px;
        margin-bottom: 550px;
    }
`;
export const TextService = styled.p`
    margin-left: 15px;
    font-size: 20px;
    font-weight: 300;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 40px;
        margin-left: 39px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 40px;
        margin-left: 165px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 40px;
        margin-left: 320px;
    }
`;
export const TextService2 = styled.p`
    margin-left: 0px;
    font-weight: 300;
    font-size: 40px;
    padding-top: 9px;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 80px;
        padding-left: 15px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 120px;
        padding-top: 55px;
        text-align: center;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 120px;
        padding-top: 55px;
        text-align: center;
    }
`;
export const TextPrestation = styled.p`
    font-weight: 200;
    font-size: 20px;
    line-height: 27px;
    padding-top: 100px;
    width: 344px;
    height: 55px;
    margin-left: 15px;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 25px;
        width: 450px;
        height: 440px;
        margin-left: 50px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        display: none;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        display: none;
    }
`;
