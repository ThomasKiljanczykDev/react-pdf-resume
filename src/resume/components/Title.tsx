import type { PropsWithChildren } from 'react';

import { StyleSheet, Text } from '@react-pdf/renderer';

import theme from '@/resume/misc/theme';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Lato Bold',
        fontSize: 11,
        color: theme.colors.primary,
        textTransform: 'uppercase',
        paddingBottom: 5,
        borderBottom: `1px solid ${theme.colors.primary}`
    }
});

function Title(props: PropsWithChildren) {
    return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;
