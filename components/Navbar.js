import styled from '@emotion/styled'
import Link from 'next/link'

const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    color: white;
    font-size: 0.8rem;
    padding: 1rem 2rem;
    background-color: black;
`
const StyledUl = styled.ul`
    list-style: none;
    li {
        margin-left: 1rem;
        float: left;
        font-weight: 400;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover{
        border-bottom: 2px solid white;
    }
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLink href='/'>PMATTX_</StyledLink>
            <StyledUl>
                <li>
                    <StyledLink href='/about'>
                        <a>About</a>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink href='/works'>
                        <a>Works</a>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink href='/contact'>
                        <a>Contact</a>
                    </StyledLink>
                </li>
            </StyledUl>
        </StyledNavbar>
    )
}

export default Navbar