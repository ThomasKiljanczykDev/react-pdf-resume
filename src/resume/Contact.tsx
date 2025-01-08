import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';

import {
    CallIcon,
    GitHubLogo,
    LinkedInLogo,
    LocationIcon,
    MailIcon
} from '@/resume/components/svg';
import { contactData } from '@/resume/data';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 2
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1
    },
    text: {
        fontFamily: 'Lato',
        fontSize: 9,
        color: 'black',
        textDecoration: 'none'
    },
    link: {
        fontFamily: 'Lato',
        fontSize: 9,
        color: 'black',
        textDecoration: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1
    }
});

export default function Contact() {
    return (
        <View style={styles.container}>
            <View style={styles.locationContainer}>
                <LocationIcon />
                <Text style={styles.text}>Poznan, Poland</Text>
            </View>
            <Link href={`tel:${contactData.phone}`} style={styles.link}>
                <CallIcon /> <Text>{contactData.phoneDisplay}</Text>
            </Link>
            <Link href={`mailto:${contactData.email}`} style={styles.link}>
                <MailIcon /> <Text>{contactData.email}</Text>
            </Link>
            <Link
                href={`https://www.linkedin.com/in/${contactData.linkedInAccount}`}
                style={styles.link}
            >
                <LinkedInLogo /> <Text>linkedin.com/in/{contactData.linkedInAccount}</Text>
            </Link>
            <Link href={`https://github.com/${contactData.gitHubAccount}`} style={styles.link}>
                <GitHubLogo /> <Text>github.com/{contactData.gitHubAccount}</Text>
            </Link>
        </View>
    );
}
