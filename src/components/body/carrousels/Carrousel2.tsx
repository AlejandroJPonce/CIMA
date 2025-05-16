import { Profile1 } from "@/components/users/Profile1";

export function Carrousel2({ data }: { data: any }) {
  return (
    <div
      className=" mt-30 w-auto h-140 flex flex-row bg-(--primary-orange) justify-start items-center gap-25 px-23 overflow-x-auto"
    >
      {data.map((profile: any, index: number) => (
        <Profile1
          key={index}
          name={profile.name}
          role={profile.role}
          photo={profile.photo}
        />
      ))}
    </div>
  );
}
