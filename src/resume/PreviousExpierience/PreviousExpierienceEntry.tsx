import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { DateWithIcon } from '@/resume/components/DateWithIcon';

const styles = StyleSheet.create({
    entryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    company: {
        fontSize: 10,
        fontFamily: 'Lato'
    },
    title: {
        fontSize: 10,
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Lato Bold'
    }
});

export interface PreviousExperienceEntryProps {
    company: string;
    position: string;
    date: string;
}

export default function PreviousExperienceEntry(props: PreviousExperienceEntryProps) {
    return (
        <View style={styles.entryContainer}>
            <View
                style={{
                    flexDirection: 'column'
                }}
            >
                <Text style={styles.title}>{props.position}</Text>
                <Text style={styles.company}>{props.company}</Text>
            </View>
            <DateWithIcon date={props.date} />
        </View>
    );
}
