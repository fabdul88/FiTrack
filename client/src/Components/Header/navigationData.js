import { v4 as uuidv4 } from 'uuid';
import dashboard from '../../assets/icons/dashboard.svg';
import workout from '../../assets/icons/workout.svg';
import profile from '../../assets/icons/profile.svg';
import meal from '../../assets/icons/meal.svg';
import nutrition from '../../assets/icons/nutrition.svg';
import statistics from '../../assets/icons/statistics.svg';
import auth from '../../assets/icons/auth.svg';

export const navigationData = [
  {
    id: uuidv4(),
    category: 'Dashboard',
    url: '/dashboard',
    icon: dashboard,
    protected: true,
  },
  {
    id: uuidv4(),
    category: 'List',
    url: '/workoutlist',
    icon: dashboard,
    protected: true,
  },
  {
    id: uuidv4(),
    category: 'Nutrition Plan',
    url: '/nutrition',
    icon: nutrition,
    protected: true,
  },
  {
    id: uuidv4(),
    category: 'Meals',
    url: '/meals',
    icon: meal,
    protected: true,
  },
  {
    id: uuidv4(),
    category: 'Workout Plan',
    url: '/createworkout',
    icon: workout,
    protected: true,
  },
  {
    id: uuidv4(),
    category: 'Statistics',
    url: '/statistics',
    icon: statistics,
    protected: true,
  },
  {
    id: uuidv4(),
    category: 'Profile',
    url: '/createuser',
    icon: profile,
    protected: true,
  },
  {
    id: uuidv4(),
    category: 'Login',
    url: '/login',
    icon: auth,
    protected: false,
  },
  {
    id: uuidv4(),
    category: 'Signup',
    url: '/signup',
    icon: auth,
    protected: false,
  },
];
