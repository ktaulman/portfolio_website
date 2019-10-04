import React from 'react';
import {Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume=()=>{
    return(
    <main className="resume animated fadeIn">
        <a className="--resume-link --font-black" href="https://docs.google.com/document/d/1bE7uOB-hGm_9L2BxH0CKEm49CL9aZtQw554JIw8lq-c/edit?usp=sharing" >View,Download</a>
        <Document
            className="--document"
            file="/resume.pdf"
        >
            <Page pageNumber={1} className="--page"/>
        </Document>
    </main>
    )
}
export default Resume;