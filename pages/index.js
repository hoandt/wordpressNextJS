import PostCard from "../components/PostCard";
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const posts = await fetch("https://hoclam.me/wp-json/wp/v2/posts").then(
    (res) => res.json()
  ); // your fetch function here

  return {
    props: { posts },
  };
};
export default function Posts({ posts }) {
  return (
    <div className="recipe-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <style jsx>{`
        .recipe-list {
          padding: 1rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}
