import styled from 'styled-components'

const ProjectContainer = (props) => (
  <ScProjectContainer>{props.children}</ScProjectContainer>
)

export default ProjectContainer

const ScProjectContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
`
