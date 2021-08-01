import Skeleton from "../../components/Skeleton";
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const posts = await fetch("https://hoclam.me/wp-json/wp/v2/posts").then(
    (res) => res.json()
  ); // your fetch function here
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const post_id = ctx.params.id; //id [id]

  const post = await fetch(
    `https://hoclam.me/wp-json/wp/v2/posts/${post_id}`
  ).then((res) => res.json()); // your fetch function here

  if (post.data !== undefined && post.data.status === 404) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { post },
  };
};
function SinglePost({ post }) {
  return !post ? (
    <div>...</div>
  ) : (
    <div>
      <h2>{post.title.rendered}</h2>
      <p>{post.excerpt.rendered}</p>
    </div>
  );
}

export default SinglePost;
