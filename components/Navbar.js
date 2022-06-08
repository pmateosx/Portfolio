import styled from '@emotion/styled'

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 0.8rem;
    padding: 1rem 1.5rem;
`
const StyledUl = styled.ul`
    list-style: none;
    li {
        margin-left: 1rem;
        float: left;
    }
    
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <p>pmattx_</p>
            <StyledUl>
                <li>Home</li>
                <li>Works</li>
                <li>About</li>
            </StyledUl>
        </StyledNavbar>
    )
}

export default Navbar