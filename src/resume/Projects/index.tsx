import { Link, View } from '@react-pdf/renderer';

import Pill from '@/resume/components/Pill';
import Title from '@/resume/components/Title';
import { projectsData } from '@/resume/misc/data';

function Projects() {
    return (
        <View
            style={{
                gap: 10
            }}
        >
            <Title>Projects</Title>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 5
                }}
            >
                {projectsData.map(project => (
                    <Link src={project.link}>
                        <Pill>{project.name}</Pill>
                    </Link>
                ))}
            </View>
        </View>
    );
}

export default Projects;
