import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../courseData/CourseCategoriesData';
import CategoriesCourseGrids from '../components/CategoriesCourseGrids';

const CourseCategories = props => {
    const renderGridItem = itemData => {
        return <CategoriesCourseGrids 
            title={itemData.item.title} 
            color={itemData.item.color}
            image={itemData.item.image}
            onSelect={() => {
                props.navigation.navigate({routeName: 'CategoryScreen', 
                params: {
                categoryId: itemData.item.id
            } });
        }}/>;
    }
    return (
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={ CATEGORIES } 
        renderItem={renderGridItem} 
        numColumns={3}/>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CourseCategories;