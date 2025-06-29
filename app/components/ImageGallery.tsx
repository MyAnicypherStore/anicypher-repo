/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";


//the interface here gives the images a type of any on it 
interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
    //set the first image as the big/display image on the product page
  const [bigImage, setBigImage] = useState(images[0]);

  //if a different image is clicked set that new image as the main picture on the page
  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    //the first mapping is used to generate a list of pictures on the left side 
    //the second one is use to generate the main image on the page
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
}