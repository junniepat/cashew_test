const authErrorHandler = (error : string):string => {
    console.log(error)
   if(error === "user not found"){
       return "We attempted to log you in but failed, please check your details."
   }

   return error;
}

export default authErrorHandler;