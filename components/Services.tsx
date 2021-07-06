import styled from 'styled-components';
import { ContainerService, TextPrestation, TextService, TextService2 } from 'styles/Services.style';

export default function Services() {
    return (
        <>
            <ContainerService>
                <TextService>Services</TextService>
                <TextService2>- UX/UI Design ----- D</TextService2>
                <TextService2>----- VueJS----React</TextService2>
                <TextPrestation>
                    H2 Titre pour présenter les prestations et les mettres en avant
                </TextPrestation>
            </ContainerService>
        </>
    );
}
