interface SubtitleProps {
  title: string;
}

export const Subtitle = ({ title }: SubtitleProps) => {
  return <h3 className="text-gray-800 font-medium">{title}</h3>;
};
