import Link from "next/link";
import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { client } from "../tina/__generated__/client";
import { InferGetStaticPropsType } from "next";

export default function Poc(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const posts = props.data.websitesConnection?.edges;

  return (
    <Section className="flex-1">
      <Container size="large" width="small">
        {posts?.map((item) => (
          <div>
            {console.log(item)}
            <Link href={`/websites/` + item.node._sys.filename}>
              <span> {item.node._sys.filename} </span>
            </Link>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.websitesConnection();
  return {
    props: {
      ...tinaProps,
    },
  };
};
