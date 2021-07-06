import styled from 'styled-components';
import {
    ImgAktif,
    ImgHealthy,
    ImgKinosa,
    ImgSecret,
    ImgWinner,
    TitreSite
} from 'styles/Projets.style';

export default function Projets() {
    return (
        <>
            <ImgAktif></ImgAktif>
            <TitreSite>Aktif Transac</TitreSite>
            <ImgHealthy></ImgHealthy>
            <TitreSite>Healthybody</TitreSite>
            <ImgSecret></ImgSecret>
            <TitreSite>Le Secret du Prieuré</TitreSite>
            <ImgKinosa></ImgKinosa>
            <TitreSite>Kinosa</TitreSite>
            <ImgWinner></ImgWinner>
            <TitreSite>Winner’s Gym</TitreSite>
        </>
    );
}
