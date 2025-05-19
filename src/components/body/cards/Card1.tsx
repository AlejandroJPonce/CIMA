export default function ({ img_ref }: { img_ref?: String }) {
  return (
    <>
      <div
        className="min-w-89 h-100 bg-white border-1 border-gray-100 rounded-xl hover:scale-105 md:min-w-[400px] md:min-h-[285px] hover:cursor-pointer transition duration-600 ease-in-out"
        style={{
          backgroundImage: `url('${img_ref}')`,
          backgroundSize: "200px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}
