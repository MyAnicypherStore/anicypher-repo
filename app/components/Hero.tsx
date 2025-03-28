import Image from "next/image";
import { client, urlFor } from "../lib/sanity";



async function getData() {
    const query = "*[_type == 'heroImage'][0]";
    const data = await client.fetch(query);
    return data;
  }

export default async function Hero(){
    const links= await getData();
    return(
        <section className="mx-auto pt-40 max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                 <span>
                    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
                        Accessorize Like a Main Character!
                    </h1>
                        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                             Turning everyday items into legendary loot for anime fans—because you deserve a main character arc too!
                        </p>
                    </span>
                </div>

                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-15 top-12 z-10 -ml-15 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-5">
                        <Image
                            src={urlFor(links.image2).url()}
                            alt="First Hero Image"
                            className="h-full w-full object-cover object-center"
                            priority
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image
                            src={urlFor(links.image1).url()}
                            alt="Great Photo"
                            className="h-full w-full object-cover object-center"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}