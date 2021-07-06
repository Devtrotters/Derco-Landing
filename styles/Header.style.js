import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 15vh;
    display: grid;

    flex-direction: center;
    @media (min-width: 768px) and (max-width: 768px) {
    }
`;

export const Description = styled.p`
    font-size: 20px;
    font-family: 'Manrope';
    font-style: normal;
    line-height: 27px;
    margin-left: 15px;
    padding-right: 15px;
    margin-top: 254px;
    width: 346px;
    height: 60px;
    font-weight: 300;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 40px;
        width: 690px;
        height: 120px;
        margin-left: 39px;
        margin-right: 39px;
        align-self: center;
        padding-bottom: 0;
        line-height: 55px;
        margin-top: 290px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 40px;
        width: 910px;
        height: 180px;
        margin-left: 267px;
        margin-right: 267px;
        line-height: 55px;
        margin-top: 460px;
        font-weight: 300;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 40px;
        width: 910px;
        height: 180px;
        margin-left: 507px;
        margin-right: 267px;
        line-height: 55px;
        margin-top: 460px;
        font-weight: 300;
    }
`;
export const ContainerSociaux = styled.div`
    display: flex;
    flex-direction: row;
`;
export const Linkedin = styled.p`
    font-family: 'Manrope';
    color: #89e2b7;
    font-size: 15px;
    font-family: 'Manrope';
    font-style: normal;
    text-decoration: none;
    list-style: none;
    padding-top: 20px;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 25px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 25px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 25px;
    }
`;
export const Instagram = styled.p`
    color: #89e2b7;
    font-size: 15px;
    font-family: 'Manrope';
    font-style: normal;
    text-decoration: none;
    list-style: none;
    padding-top: 20px;
    padding-left: 15px;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 25px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 25px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 25px;
    }
`;
export const LienProjets = styled.p`
    color: #89e2b7;
    font-size: 16px;
    font-family: 'Manrope';
    font-style: normal;
    text-decoration: none;
    list-style: none;
    padding-top: 69vh;
    padding-left: 15px;
    padding-bottom: 2vh;
    @media (min-width: 768px) and (max-width: 768px) {
        padding-top: 50vh;
        padding-left: 39px;
        font-size: 20px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        visibility: hidden;
        margin-bottom: -60px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        visibility: hidden;
        margin-bottom: -60px;
    }
`;
export const Menu = styled.ul`
    position: absolute;
    margin-left: 30vw;
    margin-top: 8vh;
    margin-right: 20vw;

    height: 27px;
    display: flex;

    li {
        padding-left: 60px;
        color: red;
        display: flex;
        flex-direction: row;
        font-size: 20px;
        height: 27px;
        cursor: pointer;
    }
`;
export const ContainerSpan = styled.div`
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;

    width: 200px;
    height: 30px;
    margin-left: 60px;
    margin-top: 4px;
    span {
        background-color: red;
        width: 24px;
        height: 4px;
        margin-top: 3px;
        transition-duration: 0.1s;
        transition-property: transform;
        transition-timing-function: linear;
    }
    &.croix {
        span {
            :first-child {
                background-color: red;
                transform: rotate(49deg);
                visibility: visible;
                padding: 0;
                margin-top: 10px;
            }
            :last-child {
                background-color: red;
                transform: rotate(-49deg);
                margin-top: -11px;
                visibility: visible;
                padding: 0;
            }
            visibility: hidden;
        }
    }
`;
