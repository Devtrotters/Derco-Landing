import styled, { keyframes } from 'styled-components';
export const ImgEnzo = styled.div`
    height: 451px;
    background-image: url('https://zupimages.net/up/21/25/2j6g.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 10 vh;
    @media (min-width: 768px) and (max-width: 768px) {
        width: 360px;
        height: 433px;
        margin-left: 39px;
        margin-top: 150px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 540px;
        height: 650px;
        margin-left: 165px;
        margin-top: 240px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        width: 750px;
        height: 902px;
        margin-left: 320px;
        margin-top: 240px;
    }
`;

export const NomStaff = styled.p`
    font-size: 30px;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 10px;
    height: 40px;
    @media (min-width: 768px) and (max-width: 768px) {
        margin-left: 425px;
        margin-top: -308px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-left: 825px;
        margin-top: -290px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-left: 1225px;
        margin-top: -290px;
    }
`;
export const NomStaff2 = styled(NomStaff)`
    @media (min-width: 768px) and (max-width: 768px) {
        margin-left: 39px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-left: 285px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-left: 385px;
    }
`;
export const ContainerSkill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    margin-bottom: 60px;
    height: 50px;
    width: 255px;
    @media (min-width: 768px) and (max-width: 768px) {
        margin-left: 395px;
        margin-top: 100px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-left: 825px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-left: 1225px;
    }
`;
export const ContainerSkill2 = styled(ContainerSkill)`
    @media (min-width: 768px) and (max-width: 768px) {
        padding-left: 39px;
        margin-top: -0px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-left: 285px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-left: 285px;
    }
`;
export const NomSkill = styled.p`
    font-size: 20px;
    color: #89e2b7;
    @media (min-width: 768px) and (max-width: 768px) {
        margin-left: 30px;
    }
`;
export const NomSkill2 = styled(NomSkill)`
    @media (min-width: 768px) and (max-width: 768px) {
        margin-left: -395px;
        padding-bottom: -300px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-left: 100px;
    }
`;
export const ImgGuillaume = styled(ImgEnzo)`
    background-image: url('https://zupimages.net/up/21/25/x0z4.png');
    @media (min-width: 768px) and (max-width: 768px) {
        width: 360px;
        height: 433px;
        margin-left: 370px;
        margin-top: 199px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        margin-left: 735px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        margin-left: 860px;
    }
`;
export const ImgPaul = styled(ImgEnzo)`
    background-image: url('https://zupimages.net/up/21/25/07f8.png');
    @media (min-width: 768px) and (max-width: 768px) {
        margin-top: 294px;
    }
`;
export const BioSkill = styled.p`
    visibility: hidden;
    position: absolute;

    @media (min-width: 768px) and (max-width: 768px) {
        visibility: visible;
        width: 300px;
        height: 180px;
        margin-top: 30px;
        font-weight: 500px;
        font-size: 16px;
        text-align: justify;
        position: relative;
        margin-left: 30px;
        line-height: 22px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        visibility: visible;
        margin-top: 270px;
        width: 320px;
        height: 180px;
        font-weight: 500px;
        line-height: 22px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        visibility: visible;
        margin-top: 330px;
        width: 320px;
        height: 245px;
        font-weight: 500px;
        line-height: 22px;
    }
`;
export const BioSkill2 = styled(BioSkill)`
    visibility: hidden;
    position: absolute;

    @media (min-width: 768px) and (max-width: 768px) {
        visibility: visible;
        width: 300px;
        height: 180px;
        margin-top: 20px;
        font-weight: 500px;
        font-size: 16px;
        text-align: justify;
        position: relative;
        margin-left: -395px;
        line-height: 22px;
        margin-bottom: -200px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        visibility: visible;
        width: 320px;
        height: 180px;
        margin-top: 260px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }
    @media (min-width: 1920px) and (max-width: 1920px) {
        visibility: visible;
        width: 320px;
        height: 245px;
        margin-top: 330px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        margin-left: 100px;
    }
`;
