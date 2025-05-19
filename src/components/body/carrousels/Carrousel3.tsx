import Card1 from "../cards/Card1";
export default function Carrousel3({ data }: { data: any }) {
  return (
    <div className="w-auto md:h-120 flex flex-row justify-start items-center gap-15 px-7 mb-20 md:px-16 overflow-x-auto overflow-auto overflow-y-hidden">
      {data.map((card_d: any) => (
        <Card1 key={card_d.id} img_ref={card_d.photo} />
      ))}
    </div>
  );
}
