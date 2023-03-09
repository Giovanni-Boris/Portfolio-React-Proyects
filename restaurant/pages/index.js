import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
export default function Home({ pizzaList }) {
  return (
    <>
      <Head>
        <title>Pizza Restaurant in Network</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const pizzaList = await res.json();
  return {
    props: { pizzaList },
  };
};
