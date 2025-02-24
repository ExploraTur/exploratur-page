import Image from "next/image";

interface CommentAreaProps {
  userPhoto: string;
  userName: string;
  comment: string;
  role: string;
}

export const CommentArea = ({
  userName,
  userPhoto,
  comment,
  role
}: CommentAreaProps) => {
  return (
    <article className="bg-white relative rounded-lg px-6 min-h-min py-10 sm:py-20">
      <div className="flex flex-col items-center gap-y-4 px-4">
        <div className="z-0 absolute top-0 left-0 h-full opacity-5 w-full bg-line-pattern bg-contain" />

        <div className="relative h-[170px] w-[170px]">
          <Image
            src={userPhoto}
            alt="Foto do cliente"
            fill
            className="shadow-lg shadow-main/60 rounded-full absolute object-contain-cover top-0 left-0"
          />
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <h4 className="text-lg sm:text-xl text-gray-700 font-semibold">
            {userName}
          </h4>
          <span className="text-gray-500 -mt-2  underline"> 
            {role}
          </span>
          <p className="text-gray-600 text-lg max-w-[700px]">{comment}</p>
        </div>
      </div>
    </article>
  );
};
