import Image from "next/image";

export function Linkedin() {
  return (
    <Image
      className="dark w-[80%] h-[80%] object-contain"
      src={"/icons/linkedin.svg"}
      width={100}
      height={100}
      quality={100}
      alt="Next.js logo"
      priority
    />
  );
}
