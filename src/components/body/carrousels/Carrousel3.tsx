import Card1 from "../cards/Card1";
export default function Carrousel3({ data }: { data: any }) {
  return (
    <div
      className="w-auto h-120 flex flex-row bg-white justify-start items-center gap-15 px-16 overflow-x-auto overflow-auto"
    >
      {data.map((card_info: any, index: number) => (
        <Card1
          key={index}
          img_ref={card_info.img_ref}
        />
      ))}
    </div>
  );
}
