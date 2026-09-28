import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';

import { DateWithIcon } from '@/resume/components/DateWithIcon';
import Section from '@/resume/components/Section';
import { detailedProjectsData } from '@/resume/misc/data';
import linkStyle from '@/resume/misc/linkStyle';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        ...linkStyle,
        fontSize: 11,
        fontFamily: 'Lato Bold'
    },
    description: {
        fontSize: 9,
        fontFamily: 'Lato'
    }
});

function DetailedProjects() {
    return (
        <Section
            title="Projects"
            items={detailedProjectsData}
            renderItem={project => (
                <View key={project.name} wrap={false}>
                    <View style={styles.header}>
                        <Link src={project.link} style={styles.name}>
                            {project.name}
                        </Link>
                        <DateWithIcon date={project.date} />
                    </View>
                    <Text style={styles.description}>{project.description}</Text>
                </View>
            )}
        />
    );
}

export default DetailedProjects;
