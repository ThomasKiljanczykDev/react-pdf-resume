import { StyleSheet, View } from '@react-pdf/renderer';

import ExperienceEntry from '@/resume/Expierience/ExpierienceEntry';
import Title from '@/resume/components/Title';
import { experienceData } from '@/resume/data';

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
});

function Experience() {
    return (
        <View style={styles.container}>
            <Title>Experience</Title>
            {experienceData.map(experienceDataEntry => (
                <ExperienceEntry
                    key={experienceDataEntry.company + experienceDataEntry.position}
                    company={experienceDataEntry.company}
                    date={experienceDataEntry.date}
                    details={experienceDataEntry.details}
                    position={experienceDataEntry.position}
                />
            ))}
        </View>
    );
}

export default Experience;
