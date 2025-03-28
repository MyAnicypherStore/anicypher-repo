import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";


async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
            _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
             price_id
        }`;
    const data = await client.fetch(query);
    return data;
  }

  export const dynamic = "force-dynamic";

  //the params get destructured (becomes an object of type "slug" which is a string)
  //the slug comes from the "newest" file when a image is clicked, it passed the slug to here

  export default async function ProductPge({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }){
    const data: fullProduct=await getData((await params).slug);
    return(
         <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 pt-40">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
              </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
            <div className="mt-5">
                <Button className="disabled bg-muted-foreground cursor-not-allowed hover:bg-muted-foreground">
                    Online Store Coming Soon!
                </Button>
            </div>
            <p>
              <strong>NOTE: The Watermark will not be a part of the final product</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}