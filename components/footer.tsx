import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex-wrap flex items-center justify-between py-20 gap-10 mx-10 border-y">
        <div>
          <h4 className="font-bold py-1 mb-2 border-b">Ajuda</h4>
          <ul className="text-gray-500">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold  py-1 mb-2 border-b">Explorador</h4>
          <ul className="text-gray-500">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold  py-1 mb-2 border-b">Condutor</h4>
          <ul className="text-gray-500">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-14 mx-2 flex flex-col items-center justify-center">
        <Logo />
        <p className="font-bold text-gray-700"> © 2024 , Inc. Todos os direitos reservados </p>
      </div>
    </footer>
  );
};
