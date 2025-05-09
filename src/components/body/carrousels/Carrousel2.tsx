import { Profile1 } from "@/components/users/Profile1";

export function Carrousel2({data}: {data: any}) {
  return (
    <div className="w-auto h-140 flex flex-row justify-start items-center bg-(--primary-purple) gap-25 px-25 overflow-x-auto">
        {data.map((profile: any, index: number) => (
          <Profile1
            key={index}
            name={profile.name}
            role={profile.role}
            photo={profile.photo}
          />
        ))}
      {/* <Profile1 />
      <Profile1 />
      <Profile1 />
      <Profile1 />
      <Profile1 />
      <Profile1 /> */}
    </div>
  );
}