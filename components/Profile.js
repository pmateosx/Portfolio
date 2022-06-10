import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const StyledProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    margin-top: 4rem;
`
const H2 = styled.h2`
    font-size: 2rem;
`
const SectionTitle = styled.h4`
    color: grey;
    font-size: 1rem;
    text-align: left;
`
const SubTitle = styled.h5`
    font-size: 1rem;
    text-align: left;
    margin-bottom: -1rem;
    color: grey;
`
const Paragraph = styled.p`
    color: white;
    line-height: 1.3rem;
    width: 100%;
`
const StyledUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 140px);
    grid-gap: 2px;
    list-style-position: inside;

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 140px);
    }
`
const StyledImage = styled(Image)`
    border-radius: 50%;
`
const LinksContainer = styled.div`
    width: 100%;
    a {
        margin-right: 2rem;
    }
`
const Section = styled.section`
    width: 100%;
`

const Profile = () => {
    return (
        <StyledProfile id="about">
            <StyledImage
            src="/dfbloaduq/image/upload/v1654794772/portfolio/foto_personal_linkedin_r1r0l3.jpg"
            alt="Pablo Mateos"
            width={300}
            height={300}
            priority="false"
            />
            <Section >
                <SubTitle>My name is</SubTitle>
                <H2> Pablo Mateos Luis</H2> 
                <Paragraph>I`m a Full Stack Developer with an Art Director background. I like to find new ways to say things, face new challenges and always build something new. I love team play and consider it fundamental to reach the best results.</Paragraph>
            </Section >
            <Section >
                <SectionTitle>Programming Skills</SectionTitle>
                <Paragraph>Here are a few technologies I`ve been working with recently: </Paragraph>
                <StyledUl>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>NodeJs</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>Sass</li>
                    <li>Next</li>
                </StyledUl>
            </Section >
            <LinksContainer>
                <SectionTitle>Links</SectionTitle>
                    <a href="https://github.com/pmateosx" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/pablo-mateos-luis/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <Link href={'/media/cv-pablo-mateos.pdf'}>
                        <a target="_blank" rel="noreferrer">CV in PDF</a>
                    </Link>
            </LinksContainer>
        </StyledProfile>
    )
}

export default Profile