import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { CalendarIcon } from '@/resume/components/svg';

const styles = StyleSheet.create({
    date: {
        fontFamily: 'Lato Italic',
        fontSize: 9
    }
});

interface DateProps {
    date: string;
    fontSize?: number | string;
}

export function DateWithIcon(props: DateProps) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <CalendarIcon />
            <Text
                style={{
                    ...styles.date,
                    fontSize: props.fontSize ?? styles.date.fontSize
                }}
            >
                {props.date}
            </Text>
        </View>
    );
}
