// const cookieValue = document.cookie;
// if (cookieValue) {
//   const accessToken = cookieValue
//   console.log(accessToken);
// }
// else {
//   navigate("/login");
// }

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
};

// const getCurrentUserToken = () => {
//     const cookieValue = document.cookie;
//     if (cookieValue) {
//         const accessToken = cookieValue
//         return accessToken;
//     }
//     else {
//         return null;
//     }

// };


export default {
    getCurrentUser,
    getCurrentUserToken
};