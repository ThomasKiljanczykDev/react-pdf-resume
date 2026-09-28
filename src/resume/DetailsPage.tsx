import { Page, StyleSheet, Text, View, type PageProps } from '@react-pdf/renderer';

import DetailedExperience from '@/resume/DetailedExperience';
import DetailedProjects from '@/resume/DetailedProjects';
import Footer from '@/resume/Footer';

import '@/resume/misc/fonts';

import theme from '@/resume/misc/theme';
import OpenSource from '@/resume/OpenSource';

const styles = StyleSheet.create({
    page: {
        padding: '0.5cm',
        paddingBottom: 40
    },
    header: {
        fontSize: 14,
        color: theme.colors.primary,
        fontFamily: 'Lato Bold',
        textTransform: 'uppercase'
    },
    container: {
        flexDirection: 'column',
        gap: 15
    },
    footer: {
        position: 'absolute',
        left: '0.5cm',
        right: '0.5cm',
        bottom: '0.5cm'
    }
});

export default function DetailsPage(props: PageProps) {
    return (
        <Page {...props} style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.header}>Details</Text>
                <DetailedExperience />
                <OpenSource />
                <DetailedProjects />
            </View>
            <View style={styles.footer} fixed>
                <Footer />
            </View>
        </Page>
    );
}
