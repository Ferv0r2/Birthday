import Head from "next/head";
import { useRouter } from "next/router";

const metaData = {
  title: "To. 지영",
  siteName: "To. 지영",
  description: "#0713 #생일 #축하 #특별한날",
  url: "https://tinywhales.org/",
  robots: "follow, index",
  image: "images/main.png",
};

const SEO = () => {
  const router = useRouter();

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="robots" content={metaData.robots} />
      <meta content={metaData.description} name="description" />
      <meta property="og:url" content={`${metaData.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content={metaData.type} />
      <meta property="og:site_name" content={metaData.siteName} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:image" name="image" content={metaData.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />

      <link rel="icon" type="image/jpg" href="logo.jpg" />

      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

export default SEO;
