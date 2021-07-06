import styled, { keyframes } from 'styled-components';

export const ContainerFoot = styled.div`
    @media (min-width: 1440px) and (max-width: 1440px) {
        display: flex;
        flex-direction: row;
        width: 390px;
        justify-content: space-between;
        height: 31px;
        margin: auto;
        padding-top: 50px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        display: flex;
        flex-direction: row;
        width: 390px;
        justify-content: space-between;
        height: 31px;
        margin: auto;
        padding-top: 50px;
    }
`;
export const ContainerReseaux = styled.div`
    @media (min-width: 1440px) and (max-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 184px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 184px;
    }
`;
export const MentionLegal = styled.p`
    font-size: 20px;
    width: 163px;
    height: 31px;
    margin: auto;
    margin-bottom: 180px;
    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 163px;
        height: 31px;
        margin: 0;
        text-align: center;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        width: 163px;
        height: 31px;
        margin: 0;
        text-align: center;
    }
`;
export const Linkedin = styled.p`
    display: none;
    width: 74px;
    height: 31px;
    @media (min-width: 1440px) and (max-width: 1440px) {
        display: initial;
        font-size: 20px;
        padding-left: 20px;
        width: 163px;
        height: 31px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        display: initial;
        font-size: 20px;
        padding-left: 20px;
        width: 163px;
        height: 31px;
    }
`;
export const Instagram = styled.p`
    display: none;
    width: 74px;
    height: 31px;
    @media (min-width: 1440px) and (max-width: 1440px) {
        display: initial;
        font-size: 20px;
        margin-left: 25px;
        text-align: center;
        width: 163px;
        height: 31px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        display: initial;
        font-size: 20px;
        margin-left: 25px;
        text-align: center;
        width: 163px;
        height: 31px;
    }
`;
