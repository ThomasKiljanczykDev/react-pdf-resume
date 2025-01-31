import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { DateWithIcon } from '@/resume/components/DateWithIcon';
import List, { Item } from '@/resume/components/List';

const styles = StyleSheet.create({
    details: {
        fontSize: 10,
        fontFamily: 'Lato'
    },
    headerContainer: {
        flexDirection: 'row'
    },
    leftColumn: {
        flexDirection: 'column',
        flexGrow: 9
    },
    rightColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifySelf: 'flex-end'
    },
    title: {
        fontSize: 11,
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Lato Bold'
    },
    position: {
        fontSize: 11,
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Lato'
    }
});

export interface ExperienceEntryProps {
    company: string;
    details: string[];
    position: string;
    date: string;
}

export default function ExperienceEntry(props: ExperienceEntryProps) {
    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.title}>{props.company}</Text>
                </View>
                <View style={styles.rightColumn}>
                    <DateWithIcon date={props.date} />
                </View>
            </View>
            <View>
                <Text style={styles.position}>{props.position}</Text>
            </View>
            <List>
                {props.details.map((detail, index) => (
                    <Item
                        key={index}
                        contentStyle={{
                            fontSize: 9
                        }}
                    >
                        {detail}
                    </Item>
                ))}
            </List>
        </View>
    );
}
