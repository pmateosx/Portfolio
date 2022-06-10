import styled from "@emotion/styled"

const StyledContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    margin-bottom: 5rem;
`
const H2 = styled.h2`
    font-size: 2rem;
    text-align: left;
`
const StyledUl = styled.ul`
    list-style: none;
    padding: 0 1rem;
    li{
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
`

const Contact = () => {
    return(
        <StyledContact id="contact">
            <H2>Get in touch</H2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque</p>
            <StyledUl>
                <li>pmateos805@gmail.com</li>
                <li>+34 620 488 401</li>
            </StyledUl>
        </StyledContact>
    )
}

export default Contact