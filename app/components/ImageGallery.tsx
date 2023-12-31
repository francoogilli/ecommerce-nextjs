"use client";

import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface iAppProps{
    images:any
}

export default function ImageGallery({images}:iAppProps){

    const [bigImage, setBigImage]= useState(images[0])

    const handleSmallImageClick=(image:any)=>{
        setBigImage(image);
    }
    return(
        <div className="grid gap-3 lg:grid-cols-5 lg:pt-10 sm:pt-1">
            <div className="order-last flex gap-2 lg:order-none lg:flex-col">
                {images.map((image:any,idx:any)=>(
                    <div key={idx} className="overflow-hidden rounded-xl bg-gray-100">
                        <Image 
                            src={urlFor(image).url()} 
                            width={200} 
                            height={200} 
                            alt="photo" 
                            className="h-full w-full object-cover object-center cursor-pointer"
                            onClick={()=>handleSmallImageClick(image)}
                        />
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}
                    alt="Photo"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center cursor-pointer"
                />

                <span className="absolute left-0 top-0 rounded-br-xl font-bold bg-yellow-300 px-3 py-1.5 text-sm uppercase tracking-wider text-white ">
                    Sale
                </span>
            </div>
        </div>
    )
}