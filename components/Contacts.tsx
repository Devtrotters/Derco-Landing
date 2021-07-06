import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import {
    BoutonForm,
    Contact,
    ContainerDetails,
    ContainerFooter,
    ContainerForm,
    ContainerInfo,
    ContainerPlusInfo,
    ContainerTel,
    Detail,
    Input,
    Input2,
    InputMessageSup,
    Label2,
    LabelArea,
    LabelMail,
    LabelNom,
    LabelTel,
    Question,
    Tel
} from 'styles/Contact.style';

export default function Contacts() {
    const [detailvalue, setdetailvalue] = useState('Plus de détails ou');
    const [questionvalue, setquestionvalue] = useState('des questions ?');

    const [classlabelnom, setclasslabelnom] = useState('');
    const [classlabelmail, setclasslabelmail] = useState('');
    const [classlabeltel, setclasslabeltel] = useState('');
    const [classlabelarea, setclasslabelarea] = useState('');

    React.useEffect(() => {
        function resize() {
            if (window.innerWidth >= 1440) {
                setdetailvalue('Nous contacter');
                setquestionvalue('Plus de détails ou des questions ?');
            }
        }
        window.document.addEventListener('resize', resize());

        return () => {};
    }, []);
    const valider = () => {
        console.log('Boutton appuyé');
    };

    const handleFocusnom = () => {
        if ((classlabelnom === 'focusnom') & (event.target.value === '')) {
            setclasslabelnom('');
        } else {
            setclasslabelnom('focusnom');
        }
    };
    const handleFocusmail = () => {
        if ((classlabelmail === 'focusmail') & (event.target.value === '')) {
            setclasslabelmail('');
        } else {
            setclasslabelmail('focusmail');
        }
    };
    const handleFocustel = () => {
        if ((classlabeltel === 'focustel') & (event.target.value === '')) {
            setclasslabeltel('');
        } else {
            setclasslabeltel('focustel');
        }
    };
    const handleFocusarea = () => {
        if ((classlabelarea === 'focusarea') & (event.target.value === '')) {
            setclasslabelarea('');
        } else {
            setclasslabelarea('focusarea');
        }
    };

    return (
        <>
            <ContainerDetails>
                <Detail>{detailvalue}</Detail>
                <Question>{questionvalue}</Question>
            </ContainerDetails>
            <ContainerForm>
                <LabelNom className={classlabelnom}>{'Votre nom & prénom*'}</LabelNom>
                <Input
                    onFocus={handleFocusnom}
                    onBlur={handleFocusnom}
                    placeholder="Votre nom & prénom*"
                />
                <LabelMail className={classlabelmail}>{'Adresse mail*'}</LabelMail>
                <Input2
                    onFocus={handleFocusmail}
                    onBlur={handleFocusmail}
                    placeholder="Adresse mail*"
                />
                <LabelTel className={classlabeltel}>{'Téléphone*'}</LabelTel>
                <Input2 onFocus={handleFocustel} onBlur={handleFocustel} placeholder="Téléphone*" />
                <ContainerPlusInfo>
                    <Detail>Vous avez besoin</Detail>
                    <Question> D&apos;informations</Question>
                </ContainerPlusInfo>
                <LabelArea className={classlabelarea}>{'Message suplémentaire*'}</LabelArea>
                <InputMessageSup
                    className={classlabelarea}
                    onFocus={handleFocusarea}
                    onBlur={handleFocusarea}
                    placeholder="Message suplémentaire*"></InputMessageSup>
                <BoutonForm onClick={valider}>Envoyer</BoutonForm>
            </ContainerForm>
            <ContainerFooter>
                <Contact>contact@dernierecohorte.com</Contact>
                <ContainerTel>
                    <Tel>06 59 45 26 84</Tel>
                    <Tel>07 83 07 75 32</Tel>
                </ContainerTel>
            </ContainerFooter>
        </>
    );
}
