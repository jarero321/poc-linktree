import { InferGetStaticPropsType } from 'next';
import { useTina } from 'tinacms/dist/react';
import client from '../../tina/__generated__/client';
import SEOLayout from "../../components/SEOLayout";

export default function PocPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  console.log(data);
  const { poc } = data;
  return (
    <SEOLayout
      title={poc.titleSEO}
      description={poc.description}
      og={{
        description: poc.descriptionOG,
        title: poc.titleOG,
        imageUrl: poc.ogImg,
      }}
    >
      <div className="w-screen min-h-screen bg-black text-white">
        Esto es mi primer componente chidito
      </div>
    </SEOLayout>
  );
}



export const getStaticProps = async ({ params }) => {
    const tinaProps = await client.queries.poc({
        relativePath: `${params.filename}.mdx`
    })
    return {
        props: {
            ...tinaProps
        }
    }
}

export const getStaticPaths = async () => {
    const pocListData = await client.queries.pocConnection()
    return {
        paths: pocListData.data.pocConnection.edges.map((post) => ({
            params: { filename: post.node._sys.filename }
        })),
        fallback: "blocking"
    }
}