import type { PropsWithChildren } from 'react';

import { StyleSheet, Text, type TextProps, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row'
    },
    bulletPoint: {
        width: 10,
        fontSize: 10
    },
    itemContent: {
        flex: 1,
        fontSize: 10,
        fontFamily: 'Lato'
    }
});

export default function List(props: PropsWithChildren) {
    return (
        <View
            style={{
                gap: 2
            }}
        >
            {props.children}
        </View>
    );
}

export interface ItemProps extends PropsWithChildren {
    contentStyle?: TextProps['style'];
}

export function Item(props: ItemProps) {
    return (
        <View style={styles.item}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text
                style={{
                    ...styles.itemContent,
                    ...props.contentStyle
                }}
            >
                {props.children}
            </Text>
        </View>
    );
}
