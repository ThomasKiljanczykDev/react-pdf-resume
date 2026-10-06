import { Page, StyleSheet, View, type PageProps } from '@react-pdf/renderer';

import Contact from '@/resume/Contact';
import DetailedExperience from '@/resume/DetailedExperience';
import Footer from '@/resume/Footer';
import Languages from '@/resume/Languages';

import '@/resume/misc/fonts';

import theme from '@/resume/misc/theme';

import Header from './Header';
import Skills from './Skills';

const styles = StyleSheet.create({
    page: {
        padding: '0.5cm',
        gap: 10,
        fontFeatureSettings: { liga: false, clig: false }
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 10
    },
    leftColumn: {
        flex: 1,
        flexDirection: 'column',
        gap: 10
    },
    rightColumn: {
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: theme.colors.secondary,
        width: 200,
        padding: 12,
        gap: 10
    }
});

export default function SummaryPage(props: PageProps) {
    return (
        <Page {...props} style={styles.page}>
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <Header />
                    <DetailedExperience />
                </View>
                <View style={styles.rightColumn}>
                    <Contact />
                    <Skills />
                    <Languages />
                </View>
            </View>
            <Footer />
        </Page>
    );
}
