import Head from 'next/head';

interface SEOLayoutProps {
  title?: string;
  favicon?: string;
  description?: string;
  children?: JSX.Element;
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
      </Head>
      {children}
    </>
  );
};

export default SEOLayout;
