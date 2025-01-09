import * as ReactDOM from 'react-dom/client';

import {PDFViewer} from '@react-pdf/renderer';

import ResumeDocument from './ResumeDocument';
import './index.css';

function App() {
    return (
        <PDFViewer className="size-full" style={{
            borderWidth: 0
        }}>
            <ResumeDocument/>
        </PDFViewer>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);
