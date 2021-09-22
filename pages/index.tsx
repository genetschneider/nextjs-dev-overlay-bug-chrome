import { GetServerSideProps } from "next";

interface Props {
  data: number;
}

export default function Home({ data }: Props) {
  return (
    <div>
      <h1>Hello world {data}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // simulate an error in SSR
  throw new Error("Error!");

  return {
    props: {
      data: Math.random(),
    },
  };
};
