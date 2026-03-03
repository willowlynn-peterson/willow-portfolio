import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter"> {'Hi, Willow here.'}
      </h1>
      <p className="mb-4">
        {`I'm an ex-PM, now designing digital experiences that feel natural and intentional.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
