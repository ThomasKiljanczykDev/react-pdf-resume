import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { DateWithIcon } from '@/resume/components/DateWithIcon';
import List, { Item } from '@/resume/components/List';

const styles = StyleSheet.create({
    school: {
        fontFamily: 'Lato Bold',
        fontSize: 10
    },
    degree: {
        fontFamily: 'Lato',
        fontSize: 10
    }
});

export interface EducationEntryProps {
    school: string;
    degree: string;
    graduationDate: string;
    details: string[];
}

export default function EducationEntry(props: EducationEntryProps) {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={styles.school}>{props.school}, </Text>
                    <Text style={styles.degree}>{props.degree}</Text>
                </View>
                <DateWithIcon date={props.graduationDate} />
            </View>
            <List>
                {props.details.map((detail, i) => (
                    <Item
                        key={i}
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
