// class component kept for reference purposes

// import React from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import "./createWorkout.scss";

// export default class CreateWorkout extends React.Component {
//   state = {
//     username: this.props.currentUser || "",
//     description: "",
//     duration: 0,
//     date: new Date(),
//     users: [],
//   };

//   componentDidMount() {
//     axios
//       .get("/users")
//       .then((response) => {
//         // checking if there are users in the database

//         if (response.data.length > 0) {
//           const user = this.props.location.state.username;
//           this.setState({
//             // returning each user in the array by username
//             users: response.data.map((user) => user.username),
//             // setting the first element in the array to be the first user displayed
//             username: user,
//           });
//         }
//       })
//       .catch((error) => console.log(error));
//   }

//   onchangeUsername = (e) => {
//     this.setState({
//       username: e.target.value,
//     });
//   };
//   onchangeDescription = (e) => {
//     this.setState({
//       description: e.target.value,
//     });
//   };
//   onchangeDuration = (e) => {
//     this.setState({
//       duration: e.target.value,
//     });
//   };
//   onchangeDate = (e) => {
//     this.setState({
//       date: e.target.value,
//     });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     const workout = {
//       username: this.state.username,
//       description: this.state.description,
//       duration: this.state.duration,
//       date: this.state.date,
//     };

//     const name = {
//       username: this.state.username,
//     };

//     axios
//       .post("/workouts/add", workout)
//       .then((res) => {
//         this.props.history.push({
//           pathname: "/workoutlist",
//           state: { username: name },
//         });
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   render() {
//     // Framer motion animations
//     const cardVariants = {
//       initial: {
//         opacity: 0,
//         x: "-500vw",
//         scale: 0,
//       },
//       in: {
//         opacity: 1,
//         x: 0,
//         scale: 1,
//       },
//       out: {
//         opacity: 0,
//         x: "500vw",
//         scale: 0,
//       },
//     };
//     // Framer motion animations
//     const cardTransition = {
//       type: "tween",
//       ease: "anticipate",
//       duration: 0.8,
//     };

//     return (
//       <div className="create-container">
//         <motion.div
//           className="create-container__card"
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={cardVariants}
//           transition={cardTransition}
//         >
//           <div className="create-container__title-container">
//             <h2 className="create-container__title">CREATE WORKOUT</h2>
//           </div>
//           <div className="create-container__form-container">
//             <form
//               onSubmit={this.onSubmit}
//               className="create-container__form"
//               action=""
//             >
//               <div className="create-container__username-container">
//                 <label className="create-container__username-label" htmlFor="">
//                   USERNAME
//                 </label>
//                 <select
//                   className="create-container__username"
//                   value={this.state.username}
//                   onChange={this.onchangeUsername}
//                 >
//                   {this.state.users.map((user) => {
//                     return (
//                       <option key={user} value={user}>
//                         {user}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </div>
//               <div className="create-container__description-container">
//                 <label
//                   className="create-container__description-label"
//                   htmlFor=""
//                 >
//                   DESCRIPTION
//                 </label>
//                 <textarea
//                   className="create-container__description"
//                   value={this.state.description}
//                   onChange={this.onchangeDescription}
//                 />
//               </div>
//               <div className="create-container__duration-container">
//                 <label className="create-container__duration-label" htmlFor="">
//                   DURATION (in Minutes)
//                 </label>
//                 <input
//                   className="create-container__duration"
//                   type="number"
//                   min="0"
//                   max="59"
//                   value={this.state.duration}
//                   onChange={this.onchangeDuration}
//                 />
//               </div>
//               <div className="create-container__date-container">
//                 <label className="create-container__date-label" htmlFor="">
//                   DATE
//                 </label>
//                 <input
//                   className="create-container__date"
//                   type="date"
//                   selected={this.state.date}
//                   onChange={this.onchangeDate}
//                 />
//               </div>
//               <div className="create-container__button-container">
//                 <button className="create-container__button">LET'S GO !</button>
//               </div>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import './createWorkout.scss';

const CreateWorkout = () => {
  const history = useHistory();
  const location = useLocation();

  const [username, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/users')
      .then((response) => {
        // checking if there are users in the database
        if (response.data.length > 0) {
          const user = location.state.username;

          // returning each user in the array by username
          setUsers(response.data.map((user) => user.username));

          // setting the first element in the array to be the first user displayed
          setUserName({ username: user });
        }
      })
      .catch((error) => console.log(error));
  }, [location.state.username]);

  function onchangeUsername(e) {
    setUserName(e.target.value);
  }
  function onchangeDescription(e) {
    setDescription(e.target.value);
  }
  function onchangeDuration(e) {
    setDuration(e.target.value);
  }
  function onchangeDate(e) {
    setDate(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const workout = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    const name = {
      username: username,
    };

    axios
      .post('/workouts/add', workout)
      .then((res) => {
        history.push({
          pathname: '/workoutlist',
          state: { username: name },
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Framer motion animations
  const cardVariants = {
    initial: {
      opacity: 0,
      x: '-500vw',
      scale: 0,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: '500vw',
      scale: 0,
    },
  };
  // Framer motion animations
  const cardTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
  };

  return (
    <div className="create-container">
      <motion.div
        className="create-container__card"
        initial="initial"
        animate="in"
        exit="out"
        variants={cardVariants}
        transition={cardTransition}
      >
        <div className="create-container__title-container">
          <h2 className="create-container__title">CREATE WORKOUT</h2>
        </div>
        <div className="create-container__form-container">
          <form
            onSubmit={onSubmit}
            className="create-container__form"
            action=""
          >
            <div className="create-container__username-container">
              <label className="create-container__username-label" htmlFor="">
                USERNAME
              </label>
              <select
                className="create-container__username"
                value={username}
                onChange={onchangeUsername}
              >
                {users.map((user) => {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="create-container__description-container">
              <label className="create-container__description-label" htmlFor="">
                DESCRIPTION
              </label>
              <textarea
                className="create-container__description"
                value={description}
                onChange={onchangeDescription}
              />
            </div>
            <div className="create-container__duration-container">
              <label className="create-container__duration-label" htmlFor="">
                DURATION (in Minutes)
              </label>
              <input
                className="create-container__duration"
                type="number"
                min="0"
                max="59"
                value={duration}
                onChange={onchangeDuration}
              />
            </div>
            <div className="create-container__date-container">
              <label className="create-container__date-label" htmlFor="">
                DATE
              </label>
              <input
                className="create-container__date"
                type="date"
                selected={date}
                onChange={onchangeDate}
              />
            </div>
            <div className="create-container__button-container">
              <button className="create-container__button">LET'S GO !</button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateWorkout;
