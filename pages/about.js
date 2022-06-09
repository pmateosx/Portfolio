import styled from '@emotion/styled'
import Link from 'next/link'

const StyledLink = styled(Link)`
    color: white;
    font-size: 2rem;
    text-decoration: none;
    &:hover{
        border-bottom: 2px solid white;
    }
`

export default function About() {
  return (
    <StyledLink href={'/'}>
        <a>Home</a>
    </StyledLink>
  )
}
