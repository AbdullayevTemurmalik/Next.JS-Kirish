import style from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={style.title}>Welcome to Next.js!</h1>
      <Image src="/next.svg" alt="Next.js Logo" width={200} height={200} />
    </>
  );
}
