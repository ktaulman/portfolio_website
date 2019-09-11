import React from 'react';
import {Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume=()=>{
    return(
    <main className="resume animated fadeIn">
        <a className="--resume-link --font-black" href="/resume.pdf" download="resume">Download</a>
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