import styled from 'styled-components'

const ScTitle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Title = (props) => (
<ScTitle>{props.children}</ScTitle>
);

export default Title;