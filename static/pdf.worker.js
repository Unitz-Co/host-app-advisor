import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
import PDFJSWorker from 'pdfjs-dist/legacy/build/pdf.worker.min'
pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker;