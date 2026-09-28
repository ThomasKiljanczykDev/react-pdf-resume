import { Link, StyleSheet, Text } from '@react-pdf/renderer';

import { contactData, footerData } from '@/resume/misc/data';
import theme from '@/resume/misc/theme';

const styles = StyleSheet.create({
    footer: {
        fontSize: 8,
        fontFamily: 'Lato',
        borderRadius: 8,
        backgroundColor: theme.colors.secondary,
        textAlign: 'center',
        padding: 2
    },
    link: {
        fontFamily: 'Lato',
        fontSize: 8,
        color: 'black'
    }
});

export default function Footer() {
    return (
        <Text style={styles.footer}>
            Written using React and TypeScript -{' '}
            <Link
                style={styles.link}
                href={`https://github.com/${contactData.gitHubAccount}/${footerData.repository}`}
            >
                github.com/{contactData.gitHubAccount}/{footerData.repository}
            </Link>
        </Text>
    );
}
