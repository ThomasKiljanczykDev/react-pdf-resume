import { View } from '@react-pdf/renderer';

import SkillEntry from '@/resume/Skills/SkillEntry';
import Title from '@/resume/components/Title';
import { skillsData } from '@/resume/misc/data';

function Skills() {
    return (
        <View
            style={{
                gap: 10
            }}
        >
            <Title>Skills</Title>
            {skillsData.map(skillEntry => (
                <SkillEntry key={skillEntry.name} {...skillEntry} />
            ))}
        </View>
    );
}

export default Skills;
