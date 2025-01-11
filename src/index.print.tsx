import ReactPDF from '@react-pdf/renderer';

import ResumeDocument from './ResumeDocument';
import './index.css';

ReactPDF.render(<ResumeDocument />, './thomas-kiljanczyk-resume.pdf');
