import styled from 'styled-components'
import Link from 'next/link'
import Heading3 from '@components/Heading/Heading3'

const ProjectCard = (props) => (
  <ScProjectCard>
    <Link href={props.link}>
      <a>
        <ScImage
          src={props.thumbnail || '/'}
          alt={props.title}
          width={320}
          height={240}
        />
      </a>
    </Link>

    <Heading3 text={props.title} />
    <p>{props.description}</p>
    <Link href={props.link}>
      <ScLink>{props.linkText || 'Read more'}</ScLink>
    </Link>
  </ScProjectCard>
)

export default ProjectCard

const ScProjectCard = styled.div`
  width: 320px;
  margin-bottom: 24px;
`

const ScImage = styled.img`
  width: 320px;
  height: 240px;
  border-radius: 24px;
  overflow: hidden;
`

const ScLink = styled.a`
  border-bottom: 1px dotted var(--color-link);
  box-shadow: none;
  transition-duration: 0.5s;

  color: var(--color-link);
  text-decoration: none;
  cursor: pointer;

  :hover {
    box-shadow: none;
    border-bottom: 1px dotted var(--color-link-hover);
    transition-duration: 0.1s;

    color: var(--color-link-hover);
    text-decoration: none;
  }
`
