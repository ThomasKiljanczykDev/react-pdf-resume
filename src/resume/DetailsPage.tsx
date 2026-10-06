import { Page, StyleSheet, View, type PageProps } from '@react-pdf/renderer';

import DetailedProjects from '@/resume/DetailedProjects';
import Education from '@/resume/Education';
import Footer from '@/resume/Footer';

import '@/resume/misc/fonts';

import OpenSource from '@/resume/OpenSource';

const styles = StyleSheet.create({
    page: {
        padding: '0.5cm',
        paddingBottom: 40,
        fontFeatureSettings: { liga: false, clig: false }
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
                <DetailedProjects />
                <OpenSource />
                <Education />
            </View>
            <View style={styles.footer} fixed>
                <Footer />
            </View>
        </Page>
    );
}
