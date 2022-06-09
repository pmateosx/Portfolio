import styled from "@emotion/styled"

const Container = styled.div`
    display: grid;
    place-items: center;
    width: 600px;
`

const Layout = ({ children }) => {
    return(
    <Container>
        {children}
    </Container>
    )
}

export default Layout