import React from 'react';
import {Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume=()=>{
    return(
    <main className="resume animated fadeIn">
        <a href='./resume.pdf' download style={{margin:'0'}}><h1>Download PDF Copy</h1></a>
        <a href='https://docs.google.com/document/d/1bE7uOB-hGm_9L2BxH0CKEm49CL9aZtQw554JIw8lq-c/edit?usp=sharing'><h1>Google Drive Link</h1></a>
        
        <Document
            className="--document"
            file="/resume.pdf"
        >
            <Page pageNumber={1} className="--page"/>
        </Document>
        {/* <iframe title='iframe' className='iframe' src="https://docs.google.com/document/d/e/2PACX-1vQh_YPR5Hc2QF_Z_3OKvHtgJRdFI-EURPCpn8xmWiFTPIpdB7gs4duIglXrFoZUJfZoN96syoJQotU6/pub?embedded=true"></iframe> */}
    </main>
    )
}
export default Resume;