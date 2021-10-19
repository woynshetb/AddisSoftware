import styled from'styled-components';

const StyledHeader = styled.header`
  background-color: white;
  padding: 5px 5px;
  height:60px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  
 
`
const Container = styled.div`
width: 660px;
margin-left: 35px;

`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`
const Text = styled.h1`
align-items: center;
font-size: 30px;
color:brown;
font-weight: bold;`

export default function NavBar() {
  return (
    <Container>
    <StyledHeader>
      <Nav><Text>Employee's Information</Text></Nav>
    </StyledHeader>
    </Container>
   
  )
}
