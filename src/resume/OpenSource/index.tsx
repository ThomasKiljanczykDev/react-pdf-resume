import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';

import { DateWithIcon } from '@/resume/components/DateWithIcon';
import List, { Item } from '@/resume/components/List';
import Section from '@/resume/components/Section';
import { openSourceData } from '@/resume/misc/data';
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

function OpenSource() {
    return (
        <Section
            title="Open Source"
            items={openSourceData}
            renderItem={entry => (
                <View key={entry.name} wrap={false}>
                    <View style={styles.header}>
                        <Link src={entry.link} style={styles.name}>
                            {entry.name}
                        </Link>
                        <DateWithIcon date={entry.date} />
                    </View>
                    <Text style={styles.description}>{entry.description}</Text>
                    <List>
                        {entry.details.map(detail => (
                            <Item key={detail} contentStyle={{ fontSize: 9 }}>
                                {detail}
                            </Item>
                        ))}
                    </List>
                </View>
            )}
        />
    );
}

export default OpenSource;
