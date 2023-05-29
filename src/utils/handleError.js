const handle401Error = (error) => {
    console.log("401 error");
    // navigate to login page
    // window.location.href = "/guesthome";
    // show the exact error message to user
    // alert(error.response && error.response.data && error.response.data.message ?
    //     error.response.data.message
    //     : "unauthorized access. Please login again."
    // )
    // navigate to login page
    window.location.href = "/guesthome";



};

const handle500Error = (error) => {
    console.log("500 error");
    // show the exact error message to user

    // alert(error.response && error.response.data && error.response.data.message ?
    //     error.response.data.message
    //     : "An error occurred while processing your request. Please try again later."
    // )



}

const handleOtherError = (error) => {
    console.log("other error");

    // show the exact error message to user
    // alert(error.response && error.response.data
    //     && error.response.data.message ?
    //     error.response.data.message
    //     : "An error occurred while processing your request. Please try again later.");
    // show error message to user


}

const handleSuccess = () => {
    console.log("success");
}

const handleError = (error) => {

    console.log(error);
    // check if error is 401
    if (error.response && error.response.status === 401) {
        handle401Error(error);
    } else if (error.response && error.response.status === 500) {
        handle500Error(error);
    } else {
        handleOtherError(error);
    }
}




// export them so that they can be used in other files in the project and imported automatically
export { handle401Error, handle500Error, handleOtherError, handleSuccess, handleError };


