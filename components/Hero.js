import styled from "@emotion/styled"

const HeroStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;
    padding: 2rem;
    margin-top: 2rem;
`
const H1 = styled.h1`
    color: white;
    margin: 0;
    font-size: 5.5rem;
    line-height: 6rem;
`
const Subtitle = styled.h5`
    text-align: left;
    margin: 0.75rem 0;
    color: #B3B3B3;
    font-size: 1.5rem;

    @media (min-width: 611px){
        font-size: 2rem;
    }
`

const Hero = () => {
    return(
        <HeroStyle >
            <div>
                <H1>
                    Hey! Hi, <br/> I´m Pablo
                </H1>
                <Subtitle>Full Stack Web Developer</Subtitle>
            </div>
        </HeroStyle>
    )
}

export default Hero