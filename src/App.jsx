import Mainsection from "./components/MainSection.jsx";
import SideBarLeft from "./components/SideBarLeft.jsx";

function App() {
  return (
    <main className="flex min-h-screen bg-[#1a1a1a]">
      {/* Sidebar */}
      <aside className=" bg-[#26262c] ">
        <SideBarLeft />
      </aside>

      {/* Contenido principal */}
      <section className="flex-1 p-5 overflow-auto">
        <Mainsection />
      </section>
    </main>
  );
}

export default App;
