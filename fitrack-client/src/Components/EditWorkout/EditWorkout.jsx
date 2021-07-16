// class component kept for reference purposes

// import React from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import "./editWorkout.scss";

// export default class EditWorkout extends React.Component {
//   state = {
//     username: "",
//     description: "",
//     duration: 0,
//     date: new Date(),
//     users: [],
//   };

//   componentDidMount() {
//     axios
//       .get(`/workouts/${this.props.match.params.id}`)
//       .then((res) => {
//         this.setState({
//           username: res.data.username,
//           description: res.data.description,
//           duration: res.data.duration,
//           date: new Date(res.data.date),
//         });
//       })
//       .catch((err) => console.log(err));
//     axios
//       .get("/users")
//       .then((response) => {
//         // checking if there are users in the database
//         if (response.data.length > 0) {
//           this.setState({
//             // returning each user in the array by username
//             users: response.data.map((user) => user.username),
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

//     axios
//       .post(`/workouts/update/${this.props.match.params.id}`, workout)
//       .then((res) => {
//         this.props.history.push({
//           pathname: "/workoutlist",
//           state: { username: this.state.username },
//         });
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   render() {
//     // Framer motion animations
//     const cardVariants = {
//       in: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//       },
//       out: {
//         opacity: 0,
//         y: "-500vh",
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
//       <div className="edit-container">
//         <motion.div
//           className="edit-container__card"
//           initial="out"
//           animate="in"
//           exit="out"
//           variants={cardVariants}
//           transition={cardTransition}
//         >
//           <div className="edit-container__title-container">
//             <h2 className="edit-container__title">EDIT WORKOUT</h2>
//           </div>
//           <div className="edit-container__form-container">
//             <form
//               onSubmit={this.onSubmit}
//               className="edit-container__form"
//               action=""
//             >
//               <div className="edit-container__username-container">
//                 <label className="edit-container__username-label" htmlFor="">
//                   USERNAME
//                 </label>
//                 <select
//                   className="edit-container__username"
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
//               <div className="edit-container__description-container">
//                 <label className="edit-container__description-label" htmlFor="">
//                   DESCRIPTION
//                 </label>
//                 <textarea
//                   className="edit-container__description"
//                   value={this.state.description}
//                   onChange={this.onchangeDescription}
//                 />
//               </div>
//               <div className="edit-container__duration-container">
//                 <label className="edit-container__duration-label" htmlFor="">
//                   DURATION (in Minutes)
//                 </label>
//                 <input
//                   className="edit-container__duration"
//                   type="number"
//                   min="0"
//                   max="59"
//                   value={this.state.duration}
//                   onChange={this.onchangeDuration}
//                 />
//               </div>
//               <div className="edit-container__date-container">
//                 <label className="edit-container__date-label" htmlFor="">
//                   DATE
//                 </label>
//                 <input
//                   className="edit-container__date"
//                   type="date"
//                   selected={this.state.date}
//                   onChange={this.onchangeDate}
//                 />
//               </div>
//               <div className="edit-container__button-container">
//                 <button className="edit-container__button">UPDATE !</button>
//               </div>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./editWorkout.scss";

const EditWorkout = (props) => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`/workouts/${props.match.params.id}`)
      .then((res) => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      })
      .catch((err) => console.log(err));
    axios
      .get("/users")
      .then((response) => {
        // checking if there are users in the database
        if (response.data.length > 0) {
          //   // returning each user in the array by username
          setUsers(response.data.map((user) => user.username));
        }
      })
      .catch((error) => console.log(error));
  }, [props.match.params.id]);

  function onchangeUsername(e) {
    setUsername(e.target.value);
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

    axios
      .post(`/workouts/update/${props.match.params.id}`, workout)
      .then((res) => {
        history.push({
          pathname: "/workoutlist",
          state: { username: username },
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Framer motion animations
  const cardVariants = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: "-500vh",
      scale: 0,
    },
  };
  // Framer motion animations
  const cardTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  return (
    <div className="edit-container">
      <motion.div
        className="edit-container__card"
        initial="out"
        animate="in"
        exit="out"
        variants={cardVariants}
        transition={cardTransition}
      >
        <div className="edit-container__title-container">
          <h2 className="edit-container__title">EDIT WORKOUT</h2>
        </div>
        <div className="edit-container__form-container">
          <form onSubmit={onSubmit} className="edit-container__form" action="">
            <div className="edit-container__username-container">
              <label className="edit-container__username-label" htmlFor="">
                USERNAME
              </label>
              <select
                className="edit-container__username"
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
            <div className="edit-container__description-container">
              <label className="edit-container__description-label" htmlFor="">
                DESCRIPTION
              </label>
              <textarea
                className="edit-container__description"
                value={description}
                onChange={onchangeDescription}
              />
            </div>
            <div className="edit-container__duration-container">
              <label className="edit-container__duration-label" htmlFor="">
                DURATION (in Minutes)
              </label>
              <input
                className="edit-container__duration"
                type="number"
                min="0"
                max="59"
                value={duration}
                onChange={onchangeDuration}
              />
            </div>
            <div className="edit-container__date-container">
              <label className="edit-container__date-label" htmlFor="">
                DATE
              </label>
              <input
                className="edit-container__date"
                type="date"
                selected={date}
                onChange={onchangeDate}
              />
            </div>
            <div className="edit-container__button-container">
              <button className="edit-container__button">UPDATE !</button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EditWorkout;
