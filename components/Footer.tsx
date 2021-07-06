import styled from 'styled-components';
import {
    ContainerFoot,
    ContainerReseaux,
    Instagram,
    Linkedin,
    MentionLegal
} from 'styles/Footer.style';

export default function Contact() {
    return (
        <>
            <ContainerFoot>
                <MentionLegal>Mentions légales</MentionLegal>
                <ContainerReseaux>
                    <Linkedin>Linkedin</Linkedin>
                    <Instagram>Instagram</Instagram>
                </ContainerReseaux>
            </ContainerFoot>
        </>
    );
}
