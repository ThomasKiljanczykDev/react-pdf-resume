import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { ScheduleIcon } from '@/resume/components/svg';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
    employment: {
        fontFamily: 'Lato',
        fontSize: 9
    }
});

export type Employment = 'full-time' | 'part-time';

interface EmploymentProps {
    employment: Employment;
}

export function EmploymentWithIcon(props: EmploymentProps) {
    return (
        <View style={styles.container}>
            <ScheduleIcon />
            <Text style={styles.employment}>{props.employment}</Text>
        </View>
    );
}
