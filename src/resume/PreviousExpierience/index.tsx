import { StyleSheet, View } from '@react-pdf/renderer';

import Title from '@/resume/components/Title';
import { previousExperienceData } from '@/resume/misc/data';
import PreviousExperienceEntry from '@/resume/PreviousExpierience/PreviousExpierienceEntry';

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
});

export default function PreviousExperience() {
    return (
        <View style={styles.container}>
            <Title>Previous Experience</Title>
            {previousExperienceData.map(experienceDataEntry => (
                <PreviousExperienceEntry
                    key={experienceDataEntry.company + experienceDataEntry.position}
                    company={experienceDataEntry.company}
                    date={experienceDataEntry.date}
                    position={experienceDataEntry.position}
                />
            ))}
        </View>
    );
}
