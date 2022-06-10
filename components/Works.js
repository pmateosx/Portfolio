import styled from "@emotion/styled"
import Image from "next/image"

const StyledImage = styled(Image)`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
`
const H2 = styled.h2`
    font-size: 2rem;
`
const  Container = styled.div`
    width: 100%;
    padding: 2rem;
`
const WorkTitle = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
`
const WorkSubtitle = styled.h4`
    font-size: 0.9rem;
    font-weight: 400;
    color: grey;
    margin-bottom: 2rem;
    margin-top: 0;
`
const Works = () => {
    return (
        <Container id="work">
            <H2>Works</H2>
            <StyledImage
                src="/dfbloaduq/image/upload/v1654857913/portfolio/mon2_uvswzx.jpg"
                alt="Monefy preview"
                width={600}
                height={500}
                layout="responsive"
                objectFit= "cover"
                priority = "false"
            />
            <div>
                <WorkTitle>Monefy</WorkTitle>
                <WorkSubtitle>React | JavaScript | MongoDB | Express | Node JS</WorkSubtitle>
            </div>

            <StyledImage
                src="/dfbloaduq/image/upload/v1654858647/portfolio/devsite_tpfiwc.jpg"
                alt="DevSite preview"
                width={600}
                height={500}
                layout="responsive"
                objectFit= "cover"
                priority = "false"
            />
            <div>
                <WorkTitle>DevSite</WorkTitle>
                <WorkSubtitle> JavaScript | MongoDB | Express | Node JS</WorkSubtitle>
            </div>

            <StyledImage
                src="/dfbloaduq/image/upload/v1654859212/portfolio/pixx_dapcht.jpg"
                alt="PixelKeys preview"
                width={600}
                height={500}
                layout="responsive"
                objectFit= "cover"
                priority = "false"
            />
            <div>
                <WorkTitle>PixelKeys</WorkTitle>
                <WorkSubtitle>JavaScript | Canvas | CSS | HTML</WorkSubtitle>
            </div>
        </Container>
    )
}

export default Works