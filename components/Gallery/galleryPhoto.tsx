import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export const GalleryPhoto = ({src, alt}: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="object-cover absolute rounded-lg"
      fill
    />
  );
};
