import Image from "next/image";

interface CommentAreaProps {
  userPhoto: string;
  userName: string;
  comment: string;
}

export const CommentArea = ({
  userName,
  userPhoto,
  comment,
}: CommentAreaProps) => {
  return (
    <article className="bg-white/90 rounded-lg min-h-min py-4 sm:py-10">
      <div className="flex flex-col justify-center items-center gap-y-4 px-4">
        <div className='relative h-[145px] w-[145px]'>
          <Image
            src={userPhoto}
            alt="Foto do cliente"
            fill
            className="shadow-xl shadow-main/60 rounded-full absolute object-contain-cover top-0 left-0"
          />
        </div>
        <h4 className="text-lg sm:text-xl font-semibold">{userName}</h4>
        <p className="text-gray-500 text-sm sm:text-base max-w-[800px]">{comment}</p>
      </div>
    </article>
  );
};
