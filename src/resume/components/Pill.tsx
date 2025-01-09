import type { PropsWithChildren } from 'react';

import { Text, View } from '@react-pdf/renderer';

import theme from '@/resume/misc/theme';

export default function Pill(props: PropsWithChildren) {
    return (
        <View
            style={{
                backgroundColor: theme.colors.primary,
                borderRadius: 10,
                fontSize: 10,
                padding: 5,
                flexShrink: 0
            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontFamily: 'Lato',
                    fontSize: 9
                }}
            >
                {props.children}
            </Text>
        </View>
    );
}
