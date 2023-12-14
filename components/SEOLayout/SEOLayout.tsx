import Head from 'next/head';

interface SEOLayoutProps {
  title?: string;
  description?: string;
  children?: JSX.Element;
  og: {
    title?: string;
    description?: string;
    imageUrl?: string;
  };
}

const SEOLayout: React.FC<SEOLayoutProps> = ({
  title,
  description,
  og,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={og?.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.imageUrl} />
      </Head>
      {children}
    </>
  );
};

export default SEOLayout;
