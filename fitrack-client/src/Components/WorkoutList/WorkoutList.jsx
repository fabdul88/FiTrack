// class component kept for reference purposes

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Delete from "../../assets/icons/delete.svg";
// import Edit from "../../assets/icons/edit.svg";
// import "./workoutList.scss";

// class WorkoutList extends React.Component {
//   state = {
//     workouts: [],
//   };

//   componentDidMount() {
//     axios
//       .get("/workouts")
//       .then((res) => {
//         this.setState({
//           workouts: res.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }

//   deleteWorkout = (id) => {
//     axios
//       .delete(`/workouts/${id}`)
//       .then((response) => console.log(response.data));
//     this.setState({
//       workouts: this.state.workouts.filter((element) => element._id !== id),
//     });
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
//       <div className="main-list">
//         <motion.div
//           className="main-list__card"
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={cardVariants}
//           transition={cardTransition}
//         >
//           <div className="main-list__title-container">
//             <h2 className="main-list__title">USERS GOAL LIST </h2>
//           </div>
//           <div className="main-list__category-container main-list__hide-tabdesk">
//             <div className="main-list__username-container">
//               <h4 className="main-list__username">USERNAME</h4>
//             </div>
//             <div className="main-list__description-container">
//               <h4 className="main-list__description">DESCRIPTION</h4>
//             </div>
//             <div className="main-list__duration-container">
//               <h4 className="main-list__duration">
//                 DURATION <br></br>(in Min)
//               </h4>
//             </div>
//             <div className="main-list__date-container">
//               <h4 className="main-list__date">DATE</h4>
//             </div>
//             <div className="main-list__action-container">
//               <h4 className="main-list__action">ACTION</h4>
//             </div>
//           </div>
//           <div>
//             <hr className="main-list__category-hr main-list__hide-tabdesk" />
//           </div>

//           {this.state.workouts.map((user) => {
//             return (
//               <div key={user.username}>
//                 <motion.div
//                   className="main-list__result-container-mobile main-list__hide-mobile"
//                   whileHover={{
//                     textShadow: "0 0 8px rgb(255,255,255)",
//                     scale: 1.02,
//                     duration: 1,
//                   }}
//                 >
//                   <div className="main-list__top-section-mobile">
//                     <div className="main-list__username-container-mobile">
//                       <h4 className="main-list__username-label-mobile">
//                         USERNAME
//                       </h4>
//                       <p className="main-list__username-mobile main-list__hide-mobile">
//                         {user.username}
//                       </p>
//                     </div>
//                     <div className="main-list__date-container-mobile">
//                       <h4 className="main-list__date-label-mobile">DATE</h4>
//                       <p className="main-list__date-mobile main-list__hide-mobile">
//                         {user.date.substring(0, 10)}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="main-list__bottom-section-mobile">
//                     <div className="main-list__description-container-mobile">
//                       <h4 className="main-list__description-label-mobile">
//                         DESCRIPTION
//                       </h4>
//                       <p className="main-list__description-mobile main-list__hide-mobile">
//                         {user.description}
//                       </p>
//                     </div>
//                     <div className="main-list__action-container-mobile">
//                       <h4 className="main-list__action-label-mobile">ACTION</h4>
//                       <div>
//                         <Link to="#">
//                           <button
//                             className="main-list__action-button-delete-mobile main-list__hide-mobile"
//                             onClick={() => {
//                               this.deleteWorkout(user._id);
//                             }}
//                           >
//                             <motion.img
//                               whileHover={{
//                                 scale: 1.4,
//                                 textShadow: "0 0 8px rgb(0,0,0)",
//                               }}
//                               transition={{ type: "spring", stiffness: 1000 }}
//                               className="main-list__action-delete-mobile"
//                               src={Delete}
//                               alt="Delete"
//                             />
//                           </button>
//                         </Link>
//                         <Link to={"/edit/" + user._id}>
//                           <button className="main-list__action-button-edit-mobile main-list__hide-mobile">
//                             <motion.img
//                               whileHover={{
//                                 scale: 1.4,
//                                 textShadow: "0 0 8px rgb(0,0,0)",
//                               }}
//                               transition={{ type: "spring", stiffness: 1000 }}
//                               className="main-list__action-edit-mobile"
//                               src={Edit}
//                               alt="Edit"
//                             />
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <hr className="main-list__bottom-hr-mobile main-list__hide-mobile" />
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="main-list__result-container main-list__hide-tabdesk"
//                   whileHover={{
//                     textShadow: "0 0 8px rgb(255,255,255)",
//                     scale: 1.02,
//                     duration: 1,
//                   }}
//                 >
//                   <div className="main-list__username-result-container">
//                     <p className="main-list__username-result main-list__hide-tabdesk">
//                       {user.username}
//                     </p>
//                   </div>
//                   <div className="main-list__description-result-container">
//                     <p className="main-list__description-result main-list__hide-tabdesk">
//                       {user.description}
//                     </p>
//                   </div>
//                   <div className="main-list__duration-result-container">
//                     <p className="main-list__duration-result main-list__hide-tabdesk">
//                       {user.duration}
//                     </p>
//                   </div>
//                   <div className="main-list__date-result-container">
//                     <p className="main-list__date-result main-list__hide-tabdesk">
//                       {user.date.substring(0, 10)}
//                     </p>
//                   </div>
//                   <div className="main-list__action-result-container">
//                     <Link
//                       to="#"
//                       onClick={() => {
//                         this.deleteWorkout(user._id);
//                       }}
//                     >
//                       <button className="main-list__action-button-delete main-list__hide-tabdesk">
//                         <motion.img
//                           whileHover={{
//                             scale: 1.4,
//                             textShadow: "0 0 8px rgb(0,0,0)",
//                           }}
//                           transition={{ type: "spring", stiffness: 1000 }}
//                           className="main-list__action-delete"
//                           src={Delete}
//                           alt="Delete"
//                         />
//                       </button>
//                     </Link>
//                     <Link to={"/edit/" + user._id}>
//                       <button className="main-list__action-button-edit main-list__hide-tabdesk">
//                         <motion.img
//                           whileHover={{
//                             scale: 1.4,
//                             textShadow: "0 0 8px rgb(0,0,0)",
//                           }}
//                           transition={{ type: "spring", stiffness: 1000 }}
//                           className="main-list__action-edit"
//                           src={Edit}
//                           alt="Edit"
//                         />
//                       </button>
//                     </Link>
//                   </div>
//                 </motion.div>
//                 <hr className="main-list__result-hr main-list__hide-tabdesk" />
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     );
//   }
// }

// export default WorkoutList;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Delete from '../../assets/icons/delete.svg';
import Edit from '../../assets/icons/edit.svg';
import './workoutList.scss';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get('/workouts')
      .then((res) => {
        setWorkouts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteWorkout(id) {
    axios
      .delete(`/workouts/${id}`)
      .then((response) => console.log(response.data));
    setWorkouts(workouts.filter((element) => element._id !== id));
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
    <div className="main-list">
      <motion.div
        className="main-list__card"
        initial="initial"
        animate="in"
        exit="out"
        variants={cardVariants}
        transition={cardTransition}
      >
        <div className="main-list__title-container">
          <h2 className="main-list__title">USERS GOAL LIST </h2>
        </div>
        <div className="main-list__category-container main-list__hide-tabdesk">
          <div className="main-list__username-container">
            <h4 className="main-list__username">USERNAME</h4>
          </div>
          <div className="main-list__description-container">
            <h4 className="main-list__description">DESCRIPTION</h4>
          </div>
          <div className="main-list__duration-container">
            <h4 className="main-list__duration">
              DURATION <br></br>(in Min)
            </h4>
          </div>
          <div className="main-list__date-container">
            <h4 className="main-list__date">DATE</h4>
          </div>
          <div className="main-list__action-container">
            <h4 className="main-list__action">ACTION</h4>
          </div>
        </div>
        <div>
          <hr className="main-list__category-hr main-list__hide-tabdesk" />
        </div>

        {workouts.map((user) => {
          return (
            <div key={user.username}>
              <motion.div
                className="main-list__result-container-mobile main-list__hide-mobile"
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className="main-list__top-section-mobile">
                  <div className="main-list__username-container-mobile">
                    <h4 className="main-list__username-label-mobile">
                      USERNAME
                    </h4>
                    <p className="main-list__username-mobile main-list__hide-mobile">
                      {user.username}
                    </p>
                  </div>
                  <div className="main-list__date-container-mobile">
                    <h4 className="main-list__date-label-mobile">DATE</h4>
                    <p className="main-list__date-mobile main-list__hide-mobile">
                      {user.date.substring(0, 10)}
                    </p>
                  </div>
                </div>

                <div className="main-list__bottom-section-mobile">
                  <div className="main-list__description-container-mobile">
                    <h4 className="main-list__description-label-mobile">
                      DESCRIPTION
                    </h4>
                    <p className="main-list__description-mobile main-list__hide-mobile">
                      {user.description}
                    </p>
                  </div>
                  <div className="main-list__action-container-mobile">
                    <h4 className="main-list__action-label-mobile">ACTION</h4>
                    <div>
                      <Link to="#">
                        <button
                          className="main-list__action-button-delete-mobile main-list__hide-mobile"
                          onClick={(e) => {
                            e.preventDefault();
                            deleteWorkout(user._id);
                          }}
                        >
                          <motion.img
                            whileHover={{
                              scale: 1.4,
                            }}
                            transition={{ type: 'spring', stiffness: 1000 }}
                            className="main-list__action-delete-mobile"
                            src={Delete}
                            alt="Delete"
                          />
                        </button>
                      </Link>
                      <Link to={'/edit/' + user._id}>
                        <button className="main-list__action-button-edit-mobile main-list__hide-mobile">
                          <motion.img
                            whileHover={{
                              scale: 1.4,
                            }}
                            transition={{ type: 'spring', stiffness: 1000 }}
                            className="main-list__action-edit-mobile"
                            src={Edit}
                            alt="Edit"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <hr className="main-list__bottom-hr-mobile main-list__hide-mobile" />
                </div>
              </motion.div>

              <motion.div
                className="main-list__result-container main-list__hide-tabdesk"
                whileHover={{
                  scale: 1.02,
                  duration: 1,
                }}
              >
                <div className="main-list__username-result-container">
                  <p className="main-list__username-result main-list__hide-tabdesk">
                    {user.username}
                  </p>
                </div>
                <div className="main-list__description-result-container">
                  <p className="main-list__description-result main-list__hide-tabdesk">
                    {user.description}
                  </p>
                </div>
                <div className="main-list__duration-result-container">
                  <p className="main-list__duration-result main-list__hide-tabdesk">
                    {user.duration}
                  </p>
                </div>
                <div className="main-list__date-result-container">
                  <p className="main-list__date-result main-list__hide-tabdesk">
                    {user.date.substring(0, 10)}
                  </p>
                </div>
                <div className="main-list__action-result-container">
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteWorkout(user._id);
                    }}
                  >
                    <button className="main-list__action-button-delete main-list__hide-tabdesk">
                      <motion.img
                        whileHover={{
                          scale: 1.4,
                        }}
                        transition={{ type: 'spring', stiffness: 1000 }}
                        className="main-list__action-delete"
                        src={Delete}
                        alt="Delete"
                      />
                    </button>
                  </Link>
                  <Link to={'/edit/' + user._id}>
                    <button className="main-list__action-button-edit main-list__hide-tabdesk">
                      <motion.img
                        whileHover={{
                          scale: 1.4,
                        }}
                        transition={{ type: 'spring', stiffness: 1000 }}
                        className="main-list__action-edit"
                        src={Edit}
                        alt="Edit"
                      />
                    </button>
                  </Link>
                </div>
              </motion.div>
              <hr className="main-list__result-hr main-list__hide-tabdesk" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WorkoutList;
