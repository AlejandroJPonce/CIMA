import Image from "next/image";

export function Instagram() {
  return (
    <Image
      className="w-10 h-10 object-contain hover:cursor-pointer hover:invert-25"
      src={"/icons/instagram.svg"}
      width={100}
      height={100}
      quality={100}
      alt="Next.js logo"
      priority
    />
  );
}
