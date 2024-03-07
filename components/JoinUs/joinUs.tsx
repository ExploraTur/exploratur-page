import { Button } from "../ui/button";

export const JoinUs = () => {
  return (
    <section className="w-full mt-10 mb-20">
      <div className="rounded-lg bg-main text-white max-w-5xl flex flex-col justify-center items-center mx-auto text-center">
        <div className='my-12'>
          <h3 className='font-bold text-xl'>Explorar novos lugares nunca foi tão simples.</h3>
          <p>Junte-se a nós e aventure-se.</p>
        </div>
        <Button size='lg' className='bg-white font-bold text-main-dark mb-12 hover:text-white hover:bg-main-dark'>Buscar aventura</Button>
      </div>
    </section>
  );
};
