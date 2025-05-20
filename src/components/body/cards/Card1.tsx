import Image from "next/image";

export default function Card1 ({ img_ref }: { img_ref?: string }) {
  return (
    <>
      <div className="flex items-center justify-center min-w-50 h-full rounded-xl hover:scale-105 hover:cursor-pointer transition duration-600 ease-in-out shrink">
        <Image
          src={`${img_ref}`}
          alt="Next.js logo"
          width={100}
          height={100}
          quality={100}
          priority
        />
      </div>
    </>
  );
}
