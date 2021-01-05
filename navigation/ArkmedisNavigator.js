import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CourseCategories from '../screens/CourseCategories';
import CourseScreen from '../screens/CourseScreen';

const ArkmedisNavigator = createStackNavigator({
    Categories: CourseCategories,
    CategoryScreen: CourseScreen
});

export default createAppContainer(ArkmedisNavigator);