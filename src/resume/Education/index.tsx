import { View } from '@react-pdf/renderer';

import EducationEntry from '@/resume/Education/EducationEntry';
import Title from '@/resume/components/Title';
import { educationData } from '@/resume/data';

function Education() {
    return (
        <View
            style={{
                gap: 10
            }}
        >
            <Title>Education</Title>
            {educationData.map((entry, index) => (
                <EducationEntry key={index} {...entry} />
            ))}
        </View>
    );
}

export default Education;
