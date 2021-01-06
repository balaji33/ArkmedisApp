import View from '../models/CourseView';

export  const CATEGORIES = [
    {
        id: '5th',
        title: '5',
        color:'#81aa25'
    },

    {
        id: '6th',
        title: '6',
        color:'#f7c023',
    },

    {
        id: '7th',
        title: '7',
        color:'#06266c',
    },

    {
        id: '8th',
        title: '8',
        color:'#006836',
    },

    {
        id: '9th',
        title: '9',
        color:'#3999d9',
    },

    {
        id: '10th',
        title: '10',
        color:'#cb3232',
    }

    // import CourseCategory from '../models/CourseCategory';
    // new CourseCategory ('5th', 'mathss', '#f5428d'),
    // new CourseCategory ('6th', 'social', '#f5428d'),
    // new CourseCategory ('7th', 'english', '#f5428d'),
    // new CourseCategory ('8th', 'science', '#f5428d'),
    // new CourseCategory ('9th', 'maths', '#f5428d'),
    // new CourseCategory ('10th', 'sanskrit', '#f5428d'),
];


export const COURSEVIEW = [
    new View (
      'm1',
      ['5th', '6th'],
    '5th class maths',
    'https://www.arkmedis.com/assets/images/Class%205%20maths.jpg',
    20,
    )
];