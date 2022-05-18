import SanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: "ige0x28i",
    dataset: "production",
    apiVersion:'2022-05-17',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);