import styled, { keyframes } from 'styled-components';

export const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    margin-top: 100px;
    margin-bottom: 70px;
    width: 250px;
    height: 82px;
    @media (min-width: 768px) and (max-width: 768px) {
        margin-top: 195px;
        padding-left: 25px;
        width: 400px;
        font-size: 25px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 445px;
        height: 34px;
        margin-top: 440px;
        margin-left: 165px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        width: 445px;
        height: 34px;
        margin-top: 440px;
        margin-left: 165px;
    }
`;
export const Detail = styled.p`
    font-size: 30px;
    font-weight: 200;
    @media (min-width: 1440px) and (max-width: 1440px) {
        color: #89e2b7;
        font-size: 25px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        color: #89e2b7;
        font-size: 40px;
    }
`;
export const Question = styled.p`
    font-size: 30px;
    color: #89e2b7;
    font-weight: 200;
    @media (min-width: 1440px) and (max-width: 1440px) {
        color: #f4f4f4;

        font-size: 25px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        color: #f4f4f4;
        font-size: 40px;
        width: 270px;
    }
`;
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin-top: 70px;
    margin-bottom: 92px;
    @media (min-width: 1440px) and (max-width: 1440px) {
        padding: 165px;
        margin-top: -120px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        padding: 165px;
        margin-top: -120px;
    }
`;
export const apparition = keyframes`
    from {
        background-color: red; 
        
    }

    to{
        background-color: orange;
    }
    to {
        background-color: green;
    }
`;
export const Input = styled.input`
    display: flex;
    font-size: 30px;
    height: 70px;
    font-weight: 200;
    border: none;
    border-bottom: solid 2px #f4f4f4;
    background-color: #181818;
    color: #f4f4f4;
    outline: none;
    ::placeholder {
        opacity: 0;
        color: #f4f4f4;
    }
    &:focus {
        ::placeholder {
            opacity: 0;
        }
    }
    @media (min-width: 768px) and (max-width: 768px) {
        width: 690px;
        font-size: 30px;
        margin-left: 29px;
        padding-top: -100px;
        border-bottom: solid 3px #f4f4f4;
    }
`;
export const Input2 = styled(Input)`
    margin-top: 30px;
`;
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    margin-top: 100px;
    margin-bottom: 70px;
    width: 250px;
    height: 82px;
`;
export const InputMessageSup = styled.textarea`
    margin-top: 0px;
    height: 100px;
    width: 100%;
    font-size: 30px;
    font-weight: 200;
    background-color: #181818;
    color: #f4f4f4;
    outline: none;
    border: none;
    border-bottom: solid 2px #f4f4f4;
    ::placeholder {
        opacity: 0;
    }
    &:focus {
        ::placeholder {
            opacity: 0;
        }
    }
    @media (min-width: 768px) and (max-width: 768px) {
        width: 690px;
        font-size: 30px;
        margin-left: 29px;
        border-bottom: solid 3px #f4f4f4;
        height: 200px;
        padding-top: 45px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        padding-top: 10px;
        padding-bottom: 190px;
        border-bottom: solid 3px #f4f4f4;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        padding-top: 10px;
        padding-bottom: 190px;
        border-bottom: solid 3px #f4f4f4;
    }
`;

export const ContainerPlusInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 9px;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 250px;
    height: 82px;
    @media (min-width: 768px) and (max-width: 768px) {
        width: 690px;
        font-size: 25px;
        margin-left: 29px;
        padding-top: -100px;
        border-bottom: solid 3px #f4f4f4;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        flex-direction: row;
        justify-content: space-between;
        width: 76.5vw;
        text-align: center;
        margin-left: 0px;
        border-bottom: solid 2px #f4f4f4;
        padding-top: 30px;
        margin-top: 20px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        flex-direction: row;
        justify-content: space-between;
        width: 83.1vw;
        text-align: center;
        margin-left: 0px;
        border-bottom: solid 2px #f4f4f4;
        padding-top: 10px;
        margin-top: 20px;
    }
`;
export const BoutonForm = styled.button`
    width: 246px;
    height: 50px;
    margin: auto;
    margin-top: 60px;
    margin-bottom: 10px;
    font-size: 30px;
    border: none;
    background-color: #181818;
    border-bottom: solid 2px #f4f4f4;
    color: #f4f4f4;
    cursor: pointer;
    & :active {
    }
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 50px;
        width: 303px;
        border-bottom: solid 3px #f4f4f4;
        height: 120px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 50px;
        padding-bottom: 95px;
        margin-left: 865px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 50px;
        padding-bottom: 95px;
        margin-left: 1359px;
    }
`;
export const ContainerFooter = styled.section`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-top: -220px;
        width: 440px;
        margin-top: -360px;
        margin-left: 90px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-top: -220px;
        width: 440px;
        margin-top: -360px;
        margin-left: 90px;
    }
`;
export const ContainerTel = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 80px;
    margin-left: 15px;
    margin-right: 15px;
    @media (min-width: 768px) and (max-width: 768px) {
        justify-content: center;
        margin-top: 10px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 440px;
        margin-left: 70px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        width: 440px;
        margin-left: 70px;
    }
`;
export const Tel = styled.p`
    font-size: 20px;
    font-weight: 500;
    @media (min-width: 768px) and (max-width: 768px) {
        margin: 30px;
        font-size: 30px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 30px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 30px;
    }
`;
export const Contact = styled.p`
    font-size: 20px;
    color: #89e2b7;
    width: 293px;
    height: 26px;
    margin: auto;
    @media (min-width: 768px) and (max-width: 768px) {
        font-size: 30px;
        margin-left: 166px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 30px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        font-size: 30px;
    }
`;

export const LabelNom = styled.label`
    display: flex;
    font-size: 30px;
    margin-top: -562px;
    position: absolute;
    visibility: visible;
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: ease-in;
    font-weight: 200;
    pointer-events: none;
    &.focusnom {
        color: '#F4F4F4';
        visibility: visible;
        transform: translatey(-37px) translatex(-70px) scale(0.5);
    }
    @media (min-width: 768px) and (max-width: 768px) {
        padding-left: 30px;
        margin-top: -725px;
        &.focusnom {
            color: '#F4F4F4';
            visibility: visible;
            transform: translatey(-37px) translatex(-65px) scale(0.5);
        }
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-top: -705px;
        &.focusnom {
            color: '#F4F4F4';
            visibility: visible;
            transform: translatey(-37px) translatex(-65px) scale(0.5);
        }
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-top: -710px;
        font-size: 40px;
        &.focusnom {
            color: '#F4F4F4';
            visibility: visible;
            transform: translatey(-37px) translatex(-95px) scale(0.5);
        }
    }
`;
export const LabelMail = styled(LabelNom)`
    display: flex;
    font-size: 30px;
    margin-top: -362px;
    position: absolute;
    visibility: visible;
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: ease-in;
    font-weight: 200;
    pointer-events: none;
    &.focusmail {
        color: '#F4F4F4';
        visibility: visible;
        transform: translatey(-37px) translatex(-45px) scale(0.5);
    }
    @media (min-width: 768px) and (max-width: 768px) {
        padding-left: 30px;
        margin-top: -525px;
        &.focusmail {
            color: '#F4F4F4';
            visibility: visible;
            transform: translatey(-37px) translatex(-40px) scale(0.5);
        }
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-top: -505px;
        &.focusmail {
            color: '#F4F4F4';
            visibility: visible;
            transform: translatey(-37px) translatex(-40px) scale(0.5);
        }
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-top: -510px;
        font-size: 40px;
        &.focusmail {
            transform: translatey(-37px) translatex(-60px) scale(0.5);
        }
    }
`;
export const LabelTel = styled(LabelNom)`
    display: flex;
    font-size: 30px;
    margin-top: -162px;
    position: absolute;
    visibility: visible;
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: ease-in;
    font-weight: 200;
    pointer-events: none;
    &.focustel {
        color: '#F4F4F4';
        visibility: visible;
        transform: translatey(-37px) translatex(-38px) scale(0.5);
    }
    @media (min-width: 768px) and (max-width: 768px) {
        padding-left: 30px;
        margin-top: -325px;

        &.focustel {
            color: '#F4F4F4';
            visibility: visible;
            transform: translatey(-37px) translatex(-32px) scale(0.5);
        }
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-top: -305px;
        &.focustel {
        }
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-top: -310px;
        font-size: 40px;
        &.focustel {
            transform: translatey(-37px) translatex(-48px) scale(0.5);
        }
    }
`;
export const LabelArea = styled(LabelNom)`
    display: flex;
    font-size: 30px;
    margin-top: 250px;
    position: absolute;
    visibility: visible;
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: ease-in;
    font-weight: 200;
    pointer-events: none;
    &.focusarea {
        color: '#F4F4F4';
        visibility: visible;
        transform: translatey(-37px) translatex(-80px) scale(0.5);
    }
    @media (min-width: 768px) and (max-width: 768px) {
        padding-left: 30px;
        margin-top: 140px;
        &.focusarea {
            color: '#F4F4F4';
            visibility: visible;
            transform: translatey(-37px) translatex(-78px) scale(0.5);
        }
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-top: 90px;
        &.focusarea {
        }
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-top: 100px;
        font-size: 40px;
        &.focusarea {
            transform: translatey(-37px) translatex(-110px) scale(0.5);
        }
    }
`;
