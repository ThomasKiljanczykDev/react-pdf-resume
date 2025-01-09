import type { CSSProperties } from 'react';

interface Theme {
    colors: {
        primary: CSSProperties['color'];
        secondary: CSSProperties['color'];
    };
}

const theme: Theme = {
    colors: {
        primary: '#45818e',
        secondary: '#ecf4f0'
    }
};

export default theme;
