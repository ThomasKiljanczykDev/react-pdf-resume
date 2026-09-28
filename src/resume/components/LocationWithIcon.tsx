import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { LocationIcon } from '@/resume/components/svg';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    location: {
        fontFamily: 'Lato',
        fontSize: 9
    }
});

interface LocationProps {
    location: string;
}

export function LocationWithIcon(props: LocationProps) {
    return (
        <View style={styles.container}>
            <LocationIcon />
            <Text style={styles.location}>{props.location}</Text>
        </View>
    );
}
