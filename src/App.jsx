import "./App.css";
import Tutors from "./components/Tutors/Tutors";
import University from "./components/University/University";
import Sidebar from "./components/Sidebar/Sidebar";
import Cities from "./components/Cities/Cities";
import Faculties from "./components/Faculties/Faculties";

export default function App() {
  return (
    <main className="App">
      <Sidebar />
      <section className="container">
        <University />
        <Tutors />
        <Cities />
        <Faculties />
      </section>
    </main>
  );
}
