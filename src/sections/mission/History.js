import React from "react"
import styled, {withTheme} from "styled-components";
import Text from "../../components/Text";
import MissionTitle from "../../components/MissionTitle";
import {breakPoints} from "../../app-config";


const Header = (props) => {
    return (
        <Container>
            <TitleWrapper>
                <MissionTitle leftAlign left={-20}>
                    <span className={'mission-title-item'}>Notre</span>
                    <span className={'mission-title-item'}>Histoire</span>
                </MissionTitle>
            </TitleWrapper>
            <Story>
                <Text
                    color={props.theme.blue}
                >
                    <Bold>La région bruxelloise se caractérise par la diversité
                    culturelle et mixité sociale de ses habitants.</Bold>  Des communautés issues de toutes les parties du monde
                    y vivent et y travaillent.
                    <br/>Cette diversité <Bold>constitue une richesse potentielle pour le développement de la région.</Bold> Pourtant
                    certains groupes connaissent de nombreuses discriminations sur le marché de l’emploi qui freinent
                    leur dynamisme.
                    Particulièrement pour les jeunes, les femmes seules et les migrants.
                </Text>
                <Text
                    color={props.theme.blue}
                >
                    Ils sont souvent sous-représentés dans le tissu socio-économique de la région, notamment dans le
                    secteur porteur de la création de petites et moyennes entreprises. Or face aux défis sociétaux
                    actuels, il semble impératif d’offrir des outils pour permettre à tous de se sentir légitime
                    d’innover et de créer.
                    L’ambition de Start Création est de <Bold>rendre plus accessible les rouages du processus de la création
                    d’entreprise</Bold> à ces publics.
                </Text>
            </Story>
        </Container>
    )
}

export default withTheme(Header)

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
`

const Story = styled.div`
  display: grid;
  @media (min-width: ${breakPoints.md}){
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;
  }
`

const TitleWrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
   @media (min-width: ${breakPoints.lg}){
      margin-left: -40px;
      margin-top: 100px;
   }
`

const Bold = styled.span`
  font-weight: 600;
`
