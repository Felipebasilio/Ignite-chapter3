// import styles from "../styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Todo conteudo adicionado ao componente <Head> é adicionado ao Head do _document, e assim o title da pagina, por exemplo, pode ser dinâmico */}
      <Head>
        <title>ig.news</title>
      </Head>
      <h1>Hello world</h1>
    </>
  );
}
