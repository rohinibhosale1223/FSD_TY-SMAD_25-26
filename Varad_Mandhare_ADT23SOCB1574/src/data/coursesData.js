// src/data/coursesData.js

export const coursesData = [
  {
    id: 1,
    title: 'Master Artificial Intelligence',
    category: 'Technology',
    description: 'Learn AI fundamentals, machine learning, and deep learning from industry experts.',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.8,
    students: 15420,
    resources: 24,
    image: 'https://picsum.photos/seed/ai/400/250',
    instructor: 'Dr. Sarah Chen',
    topics: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'NLP'],
    price: 99
  },
  {
    id: 2,
    title: 'Professional Photography',
    category: 'Creative',
    description: 'Master composition, lighting, and post-processing techniques for stunning photos.',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.9,
    students: 8930,
    resources: 18,
    image: 'https://picsum.photos/seed/photo/400/250',
    instructor: 'Mark Thompson',
    topics: ['Composition', 'Lighting', 'Editing', 'Portrait Photography'],
    price: 79
  },
  {
    id: 3,
    title: 'Business Strategy & Growth',
    category: 'Business',
    description: 'Strategic planning, market analysis, and scaling businesses effectively.',
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.7,
    students: 12450,
    resources: 20,
    image: 'https://picsum.photos/seed/business/400/250',
    instructor: 'Jennifer Martinez',
    topics: ['Strategy', 'Growth Hacking', 'Market Analysis', 'Leadership'],
    price: 129
  },
  {
    id: 4,
    title: 'Full Stack Web Development',
    category: 'Technology',
    description: 'Build modern web applications with React, Node.js, and databases.',
    duration: '16 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 21340,
    resources: 32,
    image: 'https://picsum.photos/seed/webdev/400/250',
    instructor: 'Alex Johnson',
    topics: ['React', 'Node.js', 'MongoDB', 'API Development'],
    price: 149
  },
  {
    id: 5,
    title: 'Digital Marketing Mastery',
    category: 'Business',
    description: 'SEO, social media, content marketing, and analytics for digital success.',
    duration: '6 weeks',
    level: 'Beginner',
    rating: 4.6,
    students: 9870,
    resources: 15,
    image: 'https://picsum.photos/seed/marketing/400/250',
    instructor: 'Emma Davis',
    topics: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    price: 69
  },
  {
    id: 6,
    title: 'UX/UI Design Fundamentals',
    category: 'Creative',
    description: 'Create beautiful, user-friendly interfaces with modern design principles.',
    duration: '9 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 11230,
    resources: 22,
    image: 'https://picsum.photos/seed/uxui/400/250',
    instructor: 'David Lee',
    topics: ['User Research', 'Wireframing', 'Prototyping', 'Figma'],
    price: 89
  },
  {
    id: 7,
    title: 'Data Science with Python',
    category: 'Technology',
    description: 'Master data analysis, visualization, and machine learning with Python.',
    duration: '14 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 18500,
    resources: 28,
    image: 'https://picsum.photos/seed/datascience/400/250',
    instructor: 'Dr. Michael Wong',
    topics: ['Python', 'Pandas', 'Machine Learning', 'Data Visualization'],
    price: 119
  },
  {
    id: 8,
    title: 'Mobile App Development',
    category: 'Technology',
    description: 'Build native mobile apps for iOS and Android using React Native.',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.6,
    students: 13400,
    resources: 26,
    image: 'https://picsum.photos/seed/mobile/400/250',
    instructor: 'Lisa Anderson',
    topics: ['React Native', 'iOS', 'Android', 'Mobile UI'],
    price: 109
  }
];

export const myJourneyData = [
  {
    id: 1,
    courseId: 1,
    title: 'Master Artificial Intelligence',
    progress: 65,
    completedLessons: 16,
    totalLessons: 24,
    lastAccessed: '2 hours ago',
    nextLesson: 'Deep Learning Fundamentals',
    image: 'https://picsum.photos/seed/ai/400/250',
    timeSpent: '24 hours',
    category: 'Technology'
  },
  {
    id: 2,
    courseId: 4,
    title: 'Full Stack Web Development',
    progress: 40,
    completedLessons: 13,
    totalLessons: 32,
    lastAccessed: '1 day ago',
    nextLesson: 'Building REST APIs',
    image: 'https://picsum.photos/seed/webdev/400/250',
    timeSpent: '18 hours',
    category: 'Technology'
  },
  {
    id: 3,
    courseId: 2,
    title: 'Professional Photography',
    progress: 25,
    completedLessons: 5,
    totalLessons: 18,
    lastAccessed: '3 days ago',
    nextLesson: 'Understanding Aperture',
    image: 'https://picsum.photos/seed/photo/400/250',
    timeSpent: '8 hours',
    category: 'Creative'
  }
];

export const userStats = {
  totalCourses: 3,
  completedCourses: 0,
  totalHours: 50,
  streak: 7,
  certificates: 0,
  rank: 'Advanced Learner'
};