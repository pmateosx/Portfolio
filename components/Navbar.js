import styled from '@emotion/styled'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

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
    z-index: 100;
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
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid white;
        padding-bottom: 1rem;
    }
`
const Logo = styled.h4`
    font-weight: 500;
    cursor: pointer;
`

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
        
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <StyledNavbar>
            <Logo onClick={toggleHome}>PMATTX_</Logo>
            <StyledUl>
                <li>
                    <StyledLink to='about' smooth={true} duration={500} spy={true}>
                        About
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='work' smooth={true} duration={500} spy={true}>
                        Works
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='contact' smooth={true} duration={500} spy={true}>
                        Contact
                    </StyledLink>
                </li>
            </StyledUl>
        </StyledNavbar>
    )
}

export default Navbar