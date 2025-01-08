import { StyleSheet, Text, View } from '@react-pdf/renderer';

import Pill from '@/resume/components/Pill';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Lato Bold',
        fontSize: 11
    }
});

export interface SkillEntryProps {
    name: string;
    skills: string[];
}

export default function SkillEntry(props: SkillEntryProps) {
    return (
        <View
            style={{
                gap: 5
            }}
        >
            <Text style={styles.title}>{props.name}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 5
                }}
            >
                {props.skills.map(skill => (
                    <Pill key={skill}>{skill}</Pill>
                ))}
            </View>
        </View>
    );
}
