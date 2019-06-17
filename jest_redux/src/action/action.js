export const userAction = ()=>{
    console.log("I am second")
    /*const data=[
        {id: 1, first_name: "George", last_name: "Bluth", 
        avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"}]*/
/*return fetch("https://reqres.in/api/users")
.then(res=>res.json())
.then(data=>({
    type: "FETCHDATA",
    payload : data
}))*/
return ({
    type: "FETCHDATA"
})
/*const res = await fetch("https://reqres.in/api/users");
const data= await res.json();
return {
    type: "FETCHDATA",
    payload : data
}*/
}

export const getCurrentUserData=(current)=>{
return ({
    type : "FETCHCURRENT",
    payload : current
})
}



