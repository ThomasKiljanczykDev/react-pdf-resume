import type { ReactNode } from 'react';

import { View } from '@react-pdf/renderer';

import Title from '@/resume/components/Title';

interface SectionProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export default function Section<T>(props: SectionProps<T>) {
    const [first, ...rest] = props.items;

    return (
        <View style={{ gap: 10 }}>
            {/* Keeps the title on the same page as the first entry. */}
            <View wrap={false} style={{ gap: 10 }}>
                <Title>{props.title}</Title>
                {first !== undefined && props.renderItem(first)}
            </View>
            {rest.map(props.renderItem)}
        </View>
    );
}
