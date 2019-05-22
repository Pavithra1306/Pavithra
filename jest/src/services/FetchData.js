

const FetchData = async ()=>{
const res= await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data= await res.json();
return data
}

export default FetchData