import Mainsection from "./components/MainSection.jsx";

function App() {
  return (
    <>
      <main className="flex flex-row w-full">
        <article className="flex w-[50px]  md:w-[200px]  ">
          s soy un articulo
        </article>
        <section className="  w-full  p-4">
          <Mainsection />
        </section>
      </main>
    </>
  );
}

export default App;
