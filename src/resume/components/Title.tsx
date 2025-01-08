import type { PropsWithChildren } from 'react';

import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Lato Bold',
        fontSize: 11,
        color: '#45818e',
        textTransform: 'uppercase',
        paddingBottom: 5,
        borderBottom: '1px solid #45818e'
    }
});

function Title(props: PropsWithChildren) {
    return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;
