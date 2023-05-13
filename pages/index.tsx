import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Landing from "@/components/Landing";
import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#e7ecee]">
        <Landing />
      </main>

      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center">
              {/* {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg px-5 py-3 text-sm font-light outline-none md:px-6 md:py-4 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))} */}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pb-24 pt-10 sm:px-4">
              {/* <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}

//BACKEND
export const getServerSideProps: GetServerSideProps = async () => {
  // const categories = await fetchCategories()
  return {
    props: {},
  };
};
