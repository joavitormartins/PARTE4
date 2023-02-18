



//inserir o location

function login(){


    const email = document.querySelector("#email").value
    const senha = document.querySelector("#password").value


    firebase.auth().signInWithEmailAndPassword(email,senha)

       .then(Response =>{
           console.log("sucess",Response)
           window.location.href="https://joavitormartins.github.io/dctorCare/"
    })
       .catch(error =>{
           console.log("error",error)
           alert('loging ou senha Invalidos')
    })

    
}










