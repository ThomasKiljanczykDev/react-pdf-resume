import { Document } from '@react-pdf/renderer';

import Resume from '@/resume';

export default function ResumeDocument() {
    return (
        <Document
            author="Thomas Kiljanczyk"
            subject="The resume of Thomas Kiljanczyk"
            title="Resume"
        >
            <Resume size="A4" dpi={144} />
        </Document>
    );
}
