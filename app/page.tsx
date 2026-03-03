import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter"> {'Hi, Willow here. I&apos;m an ex-PM, now designing digital experiences...'}
      </h1>
      <p className="mb-4">
        {`I’m a Product Designer with 7 years of experience across customer experience and product management. I started at Delighted in Product Management to shape roadmaps and launch features before realizing I was most energized by designing the experience itself. I do my best work designing in small, fast-moving teams where there’s a direct line between an idea and seeing it in the hands of users.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
