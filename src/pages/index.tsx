import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

export default function Home() {
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
            <span>for $9.90 / month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="" />
      </main>
    </>
  );
}
