import { v4 as uuidv4 } from "uuid";
export const navigationData = [
  {
    id: uuidv4(),
    category: "List",
    url: "/workoutlist",
  },
  {
    id: uuidv4(),
    category: "Workout",
    url: "/createworkout",
  },
  {
    id: uuidv4(),
    category: "User",
    url: "/createuser",
  },
];
