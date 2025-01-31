import { View } from '@react-pdf/renderer';

import Pill from '@/resume/components/Pill';
import Title from '@/resume/components/Title';
import { languagesData } from '@/resume/misc/data';

function Languages() {
    return (
        <View
            style={{
                gap: 10
            }}
        >
            <Title>Languages</Title>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 5
                }}
            >
                {languagesData.map((language, index) => (
                    <Pill key={index}>
                        {language.name} - {language.level}
                    </Pill>
                ))}
            </View>
        </View>
    );
}

export default Languages;
