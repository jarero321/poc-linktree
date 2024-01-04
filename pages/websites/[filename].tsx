import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import SEOLayout from "../../components/SEOLayout";
import { WebsitesQuery } from "../../tina/__generated__/types";
import TemplateLayout from "../../components/Templates/Templates";
import { SharedStateProvider } from "../../context/layoutContext";
import Image from "next/image";
import { motion } from "framer-motion";
const ServiceList = lazy(
  () => import("../../components/ServicesList/ServiceList")
);
import { Suspense, lazy } from "react";

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
  return (
    <SharedStateProvider>
      <Suspense fallback={() => <div> Loading bb </div>}>
        <SEOLayout {...SEOAdapter(data)}>
          {props.data.websites.loader.isLoader ? (
            <motion.div
              className="w-screen h-screen flex items-center justify-center absolute"
              style={{
                backgroundColor: props.data.websites.loader.backgroundColor,
              }}
            >
              <motion.picture>
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
