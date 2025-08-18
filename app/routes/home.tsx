import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants/index";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Feedback inteligente para a sua vaga dos sonhos!" },
  ];
}

export default function Home() {

const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])




  return <main className="bg-[url('images/bg-main.svg')] md:bg-cover">

    <Navbar />

    

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Monitore suas vagas e analise seu curriculo</h1>
      <h2>revise seus envios e receba feedback com uma poderosa IA</h2>
      </div>

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
