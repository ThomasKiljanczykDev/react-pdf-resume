import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { headerData } from '@/resume/data';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    detailColumn: {
        flexDirection: 'column',
        flexGrow: 9,
        textTransform: 'uppercase'
    },
    linkColumn: {
        flexDirection: 'column',
        flexGrow: 2,
        alignSelf: 'flex-end',
        justifySelf: 'flex-end'
    },
    name: {
        fontSize: 14,
        color: '#45818e',
        fontFamily: 'Lato Bold'
    },
    subtitle: {
        fontSize: 10,
        justifySelf: 'flex-end',
        fontFamily: 'Lato'
    },
    link: {
        fontFamily: 'Lato',
        fontSize: 10,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end'
    }
});

function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.detailColumn}>
                <Text style={styles.name}>{headerData.name}</Text>
                <Text style={styles.subtitle}>{headerData.subtitle}</Text>
            </View>
        </View>
    );
}

export default Header;
