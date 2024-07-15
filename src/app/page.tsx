import NavBar from "./components/NavBar";
import SpellCheckerContainer from "./components/SpellCheckerContainer";


export default function Home() {
  return (
    <div className="dark text-foreground bg-background">
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between px-4 py-8">
        <div className="flex justify-items-center w-full">
          <SpellCheckerContainer />
        </div>
      </main>
    </div>
  );
}
