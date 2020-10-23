const getUser = (id) => {
    id = document.querySelector("#exampleFormControlSelect1").value
    id = Number(id)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!id) {
          reject(Error("Invalid ID"))
        }
    
        let response;
        if (id > 10) {
          response = {
            sucess: false,
            id: id,
            message: "User Not Found!"  
          }
        } else {
          response = {
            sucess: true,
            id: id,
            message: "User Found"
          }
        }
    
        resolve(response);
      }, 2000)
    })
}
  
  const handleOnClick = () => {
    console.log("Klikked");
    Promise.all([getUser()])
    .then((response) => {
        const dataUser = response[0];
        console.log(dataUser.sucess)
        console.log(dataUser.id)
        console.log(dataUser.message)
        }) catch((err) => {
            console.log(err);
    });
};