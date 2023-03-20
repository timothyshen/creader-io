import Head from "next/head";
import ConnectButton from "@/app/components/ConnectButton";
import NFTMintPage from "@/app/components/NFTMintPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Creader | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* create a middle aligned title and button */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Creader</h1>
          <ConnectButton></ConnectButton>
        </div>
      </div>
      <NFTMintPage />
    </>
  );
}
