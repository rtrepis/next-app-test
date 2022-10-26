import axios from "axios";
import { GetStaticProps, NextPage } from "next";

const URL = process.env.NEXT_PUBLIC_API_URL;

interface Sequences {
  name: string;
  pictograms: number[];
  private: boolean;
  id: string;
}

const ListPage: NextPage = ({ sequences }: any) => {
  return (
    <>
      <h2>List Page</h2>
      <h3> Listado de Items</h3>
      {sequences.map((element: any) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const { data } = await axios.get(URL!);

  return {
    props: {
      sequences: data.sequences,
    },
  };
};

export default ListPage;
