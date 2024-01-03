import Head from 'next/head';
import { useContext } from "react";
import { SharedStateContext } from "../../context/layoutContext";

interface SEOLayoutProps {
  title?: string;
  typography?: string;
  favicon?: string;
  description?: string;
  children?: React.ReactNode;
  og: {
    title?: string;
    description?: string;
    imageUrl?: string;
    keywords?: string;
  };
}

const SEOLayout: React.FC<SEOLayoutProps> = ({
  title,
  favicon,
  description,
  og,
  children,
}) => {
  const data = useContext(SharedStateContext);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} sizes="any" />
        <meta name="description" content={description} />
        <meta name="keywords" content={og.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={og?.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.imageUrl} />
        {(data.state.typography === "Roboto" ||
          data.state.typographySecondary === "Roboto") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {(data.state.typography === "Montserrat" ||
          data.state.typographySecondary === "Montserrat") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {(data.state.typography === "Raleway" ||
          data.state.typographySecondary === "Raleway") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;700&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {(data.state.typography === "Open Sans" ||
          data.state.typographySecondary === "Open Sans") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
              rel="stylesheet"
            ></link>
          </>
        )}
        {(data.state.typography === "Oswald" ||
          data.state.typographySecondary === "Oswald") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap"
              rel="stylesheet"
            ></link>
          </>
        )}
        {(data.state.typography === "Source Code Pro" ||
          data.state.typographySecondary === "Source Code Pro") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap"
              rel="stylesheet"
            ></link>
          </>
        )}
        {(data.state.typography === "Lato" ||
          data.state.typographySecondary === "Lato") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
              rel="stylesheet"
            ></link>
          </>
        )}
        {(data.state.typography === "Poppins" ||
          data.state.typographySecondary === "Poppins") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&display=swap"
              rel="stylesheet"
            ></link>
          </>
        )}
      </Head>
      <main>{children}</main>
    </>
  );
};

export default SEOLayout;
