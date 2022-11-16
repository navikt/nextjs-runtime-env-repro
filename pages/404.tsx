import getConfig from "next/config";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();

function NotFoundPage() {
  return (
    <div className="container">
      <div className="main">
        <h1>Uh oh! Page not found. This is a static page</h1>
        <Link href="/">Client side navigation link back to root</Link>
        <h2>For fun, here are publicRuntimeConfig values on a static page</h2>
        <pre>{JSON.stringify(publicRuntimeConfig, null, 2)}</pre>
      </div>
    </div>
  );
}

export default NotFoundPage;
