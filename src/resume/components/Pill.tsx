import type { PropsWithChildren } from 'react';

import { Text, View } from '@react-pdf/renderer';

export default function Pill(props: PropsWithChildren) {
    return (
        <View
            style={{
                backgroundColor: '#45818e',
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
                    fontSize: 10
                }}
            >
                {props.children}
            </Text>
        </View>
    );
}
