import { View } from '@react-pdf/renderer';

import Title from '@/resume/components/Title';
import EducationEntry from '@/resume/Education/EducationEntry';
import { educationData } from '@/resume/misc/data';

function Education() {
    return (
        <View
            style={{
                gap: 10
            }}
        >
            <Title>Education</Title>
            {educationData.map(entry => (
                <EducationEntry key={`${entry.school}-${entry.degree}`} {...entry} />
            ))}
        </View>
    );
}

export default Education;
