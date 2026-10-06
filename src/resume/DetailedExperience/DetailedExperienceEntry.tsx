import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { DateWithIcon } from '@/resume/components/DateWithIcon';
import { EmploymentWithIcon, type Employment } from '@/resume/components/EmploymentWithIcon';
import List, { Item } from '@/resume/components/List';
import { LocationWithIcon } from '@/resume/components/LocationWithIcon';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    company: {
        flex: 1,
        fontSize: 11,
        color: 'black',
        fontFamily: 'Lato Bold'
    },
    position: {
        fontSize: 11,
        fontFamily: 'Lato'
    },
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    }
});

export interface DetailedExperienceEntryProps {
    company: string;
    position: string;
    location: string;
    employment: Employment;
    date: string;
    details: string[];
}

export default function DetailedExperienceEntry(props: DetailedExperienceEntryProps) {
    return (
        <View wrap={false}>
            <View style={styles.header}>
                <Text style={styles.company}>{props.company}</Text>
                <View style={styles.meta}>
                    <LocationWithIcon location={props.location} />
                    <EmploymentWithIcon employment={props.employment} />
                    <DateWithIcon date={props.date} />
                </View>
            </View>
            <Text style={styles.position}>{props.position}</Text>
            <List>
                {props.details.map(detail => (
                    <Item key={detail} contentStyle={{ fontSize: 9 }}>
                        {detail}
                    </Item>
                ))}
            </List>
        </View>
    );
}
