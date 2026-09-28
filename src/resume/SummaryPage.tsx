import { Page, StyleSheet, View, type PageProps } from '@react-pdf/renderer';

import Contact from '@/resume/Contact';
import Experience from '@/resume/Expierience';
import Footer from '@/resume/Footer';
import Languages from '@/resume/Languages';

import '@/resume/misc/fonts';

import theme from '@/resume/misc/theme';
import PreviousExperience from '@/resume/PreviousExpierience';
import Projects from '@/resume/Projects';

import Education from './Education';
import Header from './Header';
import Skills from './Skills';

const styles = StyleSheet.create({
    page: {
        padding: '0.5cm',
        gap: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 10
    },
    leftColumn: {
        flex: 1,
        flexDirection: 'column',
        gap: 15
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
                    <Experience />
                    <PreviousExperience />
                    <Education />
                </View>
                <View style={styles.rightColumn}>
                    <Contact />
                    <Skills />
                    <Languages />
                    <Projects />
                </View>
            </View>
            <Footer />
        </Page>
    );
}
