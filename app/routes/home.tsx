import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants/index";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Feedback inteligente para a sua vaga dos sonhos!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('images/bg-main.svg')] md:bg-cover">

    <Navbar />

    <section className="main-section">
      <h1>Monitore suas vagas e analise seu curriculo</h1>
      <h2>revise seus envios e receba feedback com uma poderosa IA</h2>

    {
      resumes.length > 0 && (
        <div className="resumes-section">
         {
           resumes.map((resume: Resume) => (
             <ResumeCard key={resume.id} resume={resume} />
            ))
          }
        </div>
      )
    }
    </section>


  </main>;
}
