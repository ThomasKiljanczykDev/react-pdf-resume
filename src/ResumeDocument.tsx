import { Document } from '@react-pdf/renderer';

import DetailsPage from '@/resume/DetailsPage';
import SummaryPage from '@/resume/SummaryPage';

export default function ResumeDocument() {
    return (
        <Document
            author="Thomas Kiljanczyk"
            subject="The resume of Thomas Kiljanczyk"
            title="Thomas Kiljanczyk Resume"
        >
            <SummaryPage size="A4" dpi={144} />
            <DetailsPage size="A4" dpi={144} />
        </Document>
    );
}
