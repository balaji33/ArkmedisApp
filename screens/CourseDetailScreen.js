import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { COURSEVIEW } from '../courseData/CourseCategoriesData';

const CourseDetailScreen = props => {
    const courseId = props.navigation.getParam('courseId');
    const selectedCourse = COURSEVIEW.find(course => course.id === courseId);
    return (
        <View style={styles.screen}>
            <Text>{selectedCourse.title}</Text>
            <Button title="Go back" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    );
};

CourseDetailScreen.navigationOptions = (navigationData) => {
    const courseId = navigationData.navigation.getParam('courseId');
    const selectedCourse = COURSEVIEW.find(course => course.id === courseId);
    return {
        headerTitle: selectedCourse.title
    };

};

const styles = StyleSheet.create({
    screen:{
        flex:1
    }
});

export default CourseDetailScreen;