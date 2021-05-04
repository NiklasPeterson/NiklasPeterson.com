import styled from 'styled-components'
import ProjectCard from '@/components/Project/ProjectCard'
import ProjectContainer from './Project/ProjectContainer'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ProjectContainer>
        {posts &&
          posts.map((post) => {
            return (
              <ProjectCard
                key={post.slug}
                title={post.frontmatter.title}
                thumbnail={post.frontmatter.thumbnail}
                description={post.frontmatter.description}
                link={{ pathname: `/post/${post.slug}` }}
                linkText={post.frontmatter.linkText}
              />
            )
          })}
      </ProjectContainer>
    </div>
  )
}
