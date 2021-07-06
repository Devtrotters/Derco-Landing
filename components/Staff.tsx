import styled from 'styled-components';
import {
    BioSkill,
    BioSkill2,
    ContainerSkill,
    ContainerSkill2,
    ImgEnzo,
    ImgGuillaume,
    ImgPaul,
    NomSkill,
    NomSkill2,
    NomStaff,
    NomStaff2
} from 'styles/Staff.style';

export default function Staff() {
    return (
        <>
            <ImgEnzo></ImgEnzo>
            <NomStaff>Enzo viry</NomStaff>
            <ContainerSkill>
                <NomSkill>Developper Web</NomSkill>
                <NomSkill>Vue Js</NomSkill>
                <BioSkill>
                    L’univers du développement web a piqué ma curiosité il y a maintenant 10 ans.
                    Depuis, j’ai eu la chance de travailler sur de nombreux projets, à la fois
                    personnels et professionnels qui m’ont permis d’affiner mes compétences aussi
                    bien techniques qu’organisationnelles.
                </BioSkill>
            </ContainerSkill>
            <ImgGuillaume></ImgGuillaume>
            <NomStaff2>Guillaume Pinho</NomStaff2>
            <ContainerSkill2>
                <NomSkill2>UX/UI Design</NomSkill2>
                <NomSkill2>Graphisme Print</NomSkill2>
                <BioSkill2>
                    Passionné de Design graphique et spécialisé en UX/UI, de nombreux artistes
                    m’inspirent au quotidien tels que Ben Bos, Saul Bass ou Nielsen Norman. Curieux,
                    je suis toujours à la recherche de nouvelles créations graphiques pour
                    développer mon portfolio.
                </BioSkill2>
            </ContainerSkill2>
            <ImgPaul></ImgPaul>
            <NomStaff>Paul Contremoulin</NomStaff>

            <ContainerSkill>
                <NomSkill>Developper Web</NomSkill>
                <NomSkill>Vue Js</NomSkill>
                <BioSkill>
                    L’univers du développement web a piqué ma curiosité il y a maintenant 10 ans.
                    Depuis, j’ai eu la chance de travailler sur de nombreux projets, à la fois
                    personnels et professionnels qui m’ont permis d’affiner mes compétences aussi
                    bien techniques qu’organisationnelles.
                </BioSkill>
            </ContainerSkill>
        </>
    );
}
