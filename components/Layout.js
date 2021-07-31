import Link from "next/link";
function Layout(props) {
  return (
    <div className="container">
      <Link href="/">
        <h1>
          <a>My Blog</a>
        </h1>
      </Link>
      {props.children}
      <style jsx>{`
        .container {
          padding: 2rem;
        }
        h1 a {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Layout;
