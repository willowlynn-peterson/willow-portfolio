import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        {`Hi, Willow here.
        I'm an ex-PM, now designing digital experiences that feel natural and intentional.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
