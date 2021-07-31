import Link from "next/link";
function PostCard({ post }) {
  function createMarkup(html) {
    return { __html: html };
  }
  return (
    <div>
      <Link href={`posts/${post.id}`}>
        <h3>
          <a>{post.title.rendered}</a>
        </h3>
      </Link>

      <div
        className="excerpt"
        dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)}
      />
      <style jsx>{`
        h3 a {
          cursor: pointer;
          color: darkred;
        }
        .excerpt {
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
}

export default PostCard;
