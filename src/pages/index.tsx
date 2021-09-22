import { GetStaticProps } from "next";

import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

// Client-side -> Quando n precisamos de SEO
// Server-side -> Quando precisamos do SEO mas com dados dinamicos
// Static Site Generation -> Vamos gerar uma pagina estatica pro SEO que pode ser compartilhada(home do blog, post do blog, etc)

// Ps: tudo  que for feito no server side demora mais o carregamento da pagina no geral

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      {/* Todo conteudo adicionado ao componente <Head> é adicionado ao Head do _document, e assim o title da pagina, por exemplo, pode ser dinâmico */}
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} / month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="" />
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JcahoAiYxlVhAGZKHB67D3s", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
