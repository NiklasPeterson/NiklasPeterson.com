import getPosts from '@/utils/getPosts'

import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
import Nav from '@/components/Nav'
import Header from '@/components/Header'

const Blog = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={`${title} | Work`} description={description}>
      <Nav />

      <Header heading="Niklas Peterson" tagline="Designer." />

      <p>{description}</p>

      <PostList posts={posts} />
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const config = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../content/work', true, /\.md$/))

  return {
    props: {
      posts,
      title: config.default.title,
      description: config.default.description,
    },
  }
}
