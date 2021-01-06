import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CourseCategories from '../screens/CourseCategories';
import CourseScreen from '../screens/CourseScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import Colors from '../constants/Colors';

const ArkmedisNavigator = createStackNavigator({
    Categories:  CourseCategories,
    CategoryScreen: CourseScreen,
    CourseDetail: CourseDetailScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:Platform.OS === 'android' ? Colors.primaryColor: ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
}
);

export default createAppContainer(ArkmedisNavigator);