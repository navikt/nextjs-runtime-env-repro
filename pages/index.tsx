import Head from "next/head";
import getConfig from "next/config";
import { GetServerSideProps } from "next";

const { publicRuntimeConfig } = getConfig();

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NextJS publicRuntimeConfig repro</title>
        <meta
          name="description"
          content="Reproduction of publicRuntimeConfig bug"
        />
      </Head>

      <main className="main">
        <h2>Repro steps</h2>
        <ol>
          <li>
            Go to the 404 page:{" "}
            <a href="/this-page-does-not-exist">Link to a not found page</a>
          </li>
          <li>
            Refresh to make sure NextJS loads the initial page on the 404 page.
          </li>
          <li>
            Trigger a client side navigation back here (404 page has a link back)
          </li>
          <li>
            Observe that the following environment variables are missing:
            <ul className="env-list">
              <li>PROVIDED_AT_SERVER_RUNTIME</li>
              <li>ALSO_PROVIDED_AT_SERVER_RUNTIME</li>
              <li>RUNTIME_ENVIRONMENT</li>
            </ul>
          </li>
        </ol>
        <h2>These are my runtime config properties</h2>
        <pre>{JSON.stringify(publicRuntimeConfig, null, 2)}</pre>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("This page is SSR'd!");

  return {
    props: {},
  };
};
