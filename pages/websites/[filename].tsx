import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import SEOLayout from "../../components/SEOLayout";
import { WebsitesQuery } from "../../tina/__generated__/types";
import TemplateLayout from "../../components/Templates/Templates";
import { SharedStateProvider } from "../../context/layoutContext";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const ServiceList = lazy(
  () => import("../../components/ServicesList/ServiceList")
);
import { Suspense, lazy, useEffect, useState } from "react";

export default function WebPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const SEOAdapter = (data: WebsitesQuery) => {
    const SEOData = {
      favicon: data.websites.seo.favicon,
      title: data.websites.seo.seoTitle,
      description: data.websites.seo.seoDescription,
      og: {
        title: data.websites.seo.titleOG,
        description: data.websites.seo.descriptionOG,
        imageUrl: data.websites.seo.imageOG,
        keywords: data.websites.seo.keywords,
      },
    };
    return SEOData;
  };

  const [loaderPage, setLoaderPage] = useState(
    props.data.websites.loader.isLoader
  );
  const handleActive = () => {
    setTimeout(() => {
      setLoaderPage(false);
    }, 1000);
  };
  useEffect(() => {
    handleActive();
  }, []);
  return (
    <SharedStateProvider>
      <Suspense fallback={() => <div> Loading bb </div>}>
        <SEOLayout {...SEOAdapter(data)}>
          <AnimatePresence mode="sync">
            {loaderPage ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [1] }}
                transition={{ type: "spring" }}
                exit={{ opacity: 0 }}
                key="loader"
                className="w-screen h-screen flex items-center justify-center absolute"
                style={{
                  backgroundColor: props.data.websites.loader.backgroundColor,
                }}
              >
                <motion.picture
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [0, 0, 0.5, 0.8, 1], scale: [1, 1.3, 1] }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src={props.data.websites.loader.loaderImage}
                    width={60}
                    height={60}
                    alt=""
                  />
                </motion.picture>
              </motion.div>
            ) : (
              <>
                <TemplateLayout {...data.websites} />
                <ServiceList {...data.websites} />
              </>
            )}
          </AnimatePresence>
        </SEOLayout>
      </Suspense>
    </SharedStateProvider>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.websites({
    relativePath: `${params.filename}.mdx`,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  const pocListData = await client.queries.websitesConnection();
  return {
    paths: pocListData.data.websitesConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: "blocking",
  };
};
