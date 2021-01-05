import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CourseCategories= props => {
    return (
        <View style={styles.screen}>
            <Text>Courses</Text>
            <Button title="go to courses" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryScreen'});
            }} /> 
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CourseCategories;