import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import SEOLayout from "../../components/SEOLayout";
import { WebsitesQuery } from "../../tina/__generated__/types";
import { TemplateLayout } from "../../components/Templates/Templates";

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
    <SEOLayout {...SEOAdapter(data)}>
      <TemplateLayout {...data.websites} />
    </SEOLayout>
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
