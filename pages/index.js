import Head from "next/head";
import { router } from "next/router";
import { useEffect } from "react";
import HomeDesign from "../Components/HomeDesign";
import MensCloths from "../Components/MensCloths";
import Slider from "../Components/Slider";

import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    const Token = localStorage.getItem("user");
    if (!Token) {
      router.push("/auth/Login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <Slider />

      {/* <div className="mt-12">
        <HomeCateSlider />
      </div> */}
      <div className="mt-6">
        <MensCloths />
      </div>
      <div className="mt-16">
        <HomeDesign />
      </div>
    </div>
  );
}