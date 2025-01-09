import { Font, Link, Page, type PageProps, StyleSheet, Text, View } from '@react-pdf/renderer';

import Contact from '@/resume/Contact';
import Experience from '@/resume/Expierience';
import Languages from '@/resume/Languages';
import PreviousExperience from '@/resume/PreviousExpierience';
import Projects from '@/resume/Projects';
import { contactData, footerData } from '@/resume/misc/data';
import theme from '@/resume/misc/theme';

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
    },
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

Font.register({
    family: 'Open Sans',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`
});

Font.register({
    family: 'Lato',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`
});

Font.register({
    family: 'Lato Italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`
});

Font.register({
    family: 'Lato Bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`
});

export default function Resume(props: PageProps) {
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
            <Text style={styles.footer}>
                Written using React and TypeScript -{' '}
                <Link
                    style={styles.link}
                    href={`https://github.com/${contactData.gitHubAccount}/${footerData.repository}`}
                >
                    github.com/{contactData.gitHubAccount}/{footerData.repository}
                </Link>
            </Text>
        </Page>
    );
}
