import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
    const query = "*[_type=='heroImage'][0]"  
    
    const data = await client.fetch(query)

    return data;
}
export default async function Hero(){
    const data = await getData()
    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-24">
                    <h1 className="mb-4 text-4xl font-black text-zinc-900 dark:text-zinc-100 sm:text-5xl md:mb-8 md:text-6xl">
                    The best clothing at a higher price.
                    </h1>
                    <p className="max-w-md leading-relaxed text-gray-500 dark:text-gray-400 xl:text-lg">
                        We sell only the most exlusive and hight quality products for you.
                        We are the best so come and shop with us.
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-3xl -bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                        <Image 
                            src={urlFor(data.image1).url()} 
                            alt="Great Photo"
                            className="h-full w-full object-cover object-center"
                            priority
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-lg ">
                        <Image
                            src={urlFor(data.image2).url()} 
                            alt="Great Photo"
                            className="h-full w-full object-cover object-center"
                            priority
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-2xl mb-7">
                    <Link href="/Men" className="border-none flex w-1/3 items-center justify-center font-semibold text-gray-500 dark:text-gray-300 transition duration-100 hover:bg-gray-100 bg-gray-50 dark:bg-zinc-950 dark:hover:bg-zinc-800 active:bg-gray-200">
                        Men
                    </Link>
                    <Link href="/Women" className="border-none flex w-1/3 items-center justify-center font-semibold text-gray-500 dark:text-gray-300 transition duration-100 hover:bg-gray-100 bg-gray-50 dark:bg-zinc-950 dark:hover:bg-zinc-800 active:bg-gray-200">
                        Women
                    </Link>
                    <Link href="/Teens" className="border-none flex w-1/3 items-center justify-center font-semibold text-gray-500 dark:text-gray-300 transition duration-100 hover:bg-gray-100 bg-gray-50 dark:bg-zinc-950 dark:hover:bg-zinc-800 active:bg-gray-200">
                        Teens
                    </Link>
                </div>
            </div>
        </section>
    )
}