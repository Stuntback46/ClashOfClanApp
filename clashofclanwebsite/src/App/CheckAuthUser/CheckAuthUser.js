export const CheckAuthUser = function(){
console.log("checkisauth")
  fetch('/api/user',{ credentials: 'include'}).then((result) => {
      // Get the result
      // If we want text, call result.text()

      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      console.log("I'm checking",jsonResult.body);
      console.log(jsonResult.status)
      console.log(jsonResult.username)
 
      var isLoggedIn=Boolean;
      if (jsonResult.username)
        {localStorage.setItem('username',jsonResult.username)
      localStorage.setItem('villageId',jsonResult.villageId)

          isLoggedIn=true }
  else{isLoggedIn=false}     


      if ((isLoggedIn===true))
      {
    
         
         localStorage.setItem('isLoggedIn',isLoggedIn)
         return 'true'
      }
      else{localStorage.setItem('isLoggedIn',isLoggedIn);
    return 'false'}
    }).catch((err)=>{ 
      console.log(err)
      console.log("error 400")
 localStorage.setItem('isLoggedIn',false)
 return 'false'

         });

}