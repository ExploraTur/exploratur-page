import { MenuIcon } from "lucide-react";

const links = [
  {
    src: "/aventureiros",
    linkName: "Aventureiro",
  },
  {
    src: "/condutores",
    linkName: "Condutores",
  },
  {
    src: "/contato",
    linkName: "Contato",
  },
  {
    src: "/sobre",
    linkName: "Sobre nós",
  },
];

const mobile = true;

export const Menu = () => {
  return (
    <ul className="text-xs md:text-base flex transition font-bold">
      {links?.map((obj) => (
        <li
          key={obj.linkName}
          className="hover:text-main hover:scale-105 transition"
        >
          <a className="px-1 md:px-2" href={obj.src}>
            {obj.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
};
