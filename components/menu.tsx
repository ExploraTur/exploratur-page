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

export const Menu = () => {
  return (
    <ul className="text-black flex gap-x-3 ">
      {links.map((obj) => (
        <li key={obj.linkName}>
          <a className="p-2" href={obj.src}>
            {obj.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
};
