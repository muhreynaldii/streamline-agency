import Head from "next/head";
import Navbar from "@components/Navbar";
import HeroPages from "./HeroPages";
import Client from "./Client";
import Service from "./Service";
import News from "./News";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Streamline Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Navbar />
      <HeroPages />
      <Client />
      <Service />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
