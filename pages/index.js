import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Collections from "./Collections";

export default function Home() {
  return (
    <>
      <Head>
        <title> Quicknode Graph NFT API </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>heelo</h1>
      <Collections />
    </>
  );
}
