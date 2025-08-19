import React, { useState, type FormEvent } from 'react'
import FileUploader from '~/components/FileUploader';
import Navbar from '~/components/Navbar'

const upload = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file:File|null)=>{
        setFile(file);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const form:HTMLFormElement | null = e.currentTarget.closest('form');
        if(!form) return;

        const formData = new FormData(form);
        const companyName = formData.get('company-name');
        const jobTitle = formData.get('job-title');
        const jobDescription = formData.get('job-description');
    }

  return (
    <main className="bg-[url('images/bg-main.svg')] md:bg-cover">
      <Navbar />

      <section className='main-section'>
        <div className="page-heading py-16">
            <h1>Feedback inteligente para sua vaga dos sonhos!</h1>
            {
                isProcessing? (
                    <>
                        <h2>{statusText}</h2>
                        <img src="/images/resume-scan.gif" className='w-full' alt="resume scan" />
                    </>
                ): (
                   <>
                    <h2>Carregue seu curriculo para avaliação de ATS e dicas de melhoria.</h2>
                   </> 
                )
            }

            {
                !isProcessing && (
                    <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className="form-div">
                            <label htmlFor="company-name">Nome da Empresa</label>
                            <input type="text" placeholder='Nome da Empresa' name="company-name" required id='company-name' />
                        </div>

                        <div className="form-div">
                            <label htmlFor="job-title">Titulo da Vaga</label>
                            <input type="text" placeholder='Titulo da Vaga' name="job-title" required id='job-title' />
                        </div>

                        <div className="form-div">
                            <label htmlFor="job-description">Descrição da Vaga</label>
                            <textarea placeholder='Descrição da Vaga' name="job-description" required id='job-description' />
                        </div>

                        <div className="form-div">
                            <label htmlFor="uploader">Carregar curriculo</label>
                            <FileUploader onFileSelect={handleFileSelect} />
                        </div>

                        <button type='submit' className='primary-button'>
                            Analizar curriculo
                        </button>
                    </form>
                )
            }

        </div>
      </section>
    </main>
  )
}

export default upload
