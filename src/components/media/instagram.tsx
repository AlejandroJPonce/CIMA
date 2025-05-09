import Image from "next/image";

export function Instagram() {
  return (
    <Image
      className="dark:inverted w-[80%] h-[80%] object-contain hover:cursor-pointer"
      src={"/icons/instagram.svg"}
      width={100}
      height={100}
      quality={100}
      alt="Next.js logo"
      priority
    />
  );
}
