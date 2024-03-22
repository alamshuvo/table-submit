import { useState } from "react";
import 'animate.css';



const Form = () => {
const [name,setName]=useState("Hablu");
const [email,setEmail]=useState("Hablu@gmail.com");
const [password,setPassword]=useState("");
const [error,setError]=useState('');

// console.log(name,email,password);
const handleSubmit=e=>{
    e.preventDefault();
    // setName();
    // console.log(e.target.name.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
  
    if (password.length<6) {
        setError("password shuld  must be 6 char")
    }
   else{
    setError("")
    console.log(name,email,password);
   }
}
const handleNameChange=e=>{
    setName(e.target.value);
}
const handleEmailChange=e=>{
    setEmail(e.target.value);
}
const handlePasswordChange=e=>{
    setPassword(e.target.value);
}




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                value={name}
                onChange={handleNameChange}
                className="w-full outline-dotted" type="text" name="name" />
                <br />
                <br />
                <input 
                value={email}
                onChange={handleEmailChange}
                className="w-full outline-dashed" type="email" name="email" required />
                <br />
                <br />
                <input type="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full outline-dashed" name="password" required />
                <button className="btn btn-primary mt-5 ">submit</button>;
                {
                    error && <p className=" animate__animated animate__backInUp text-3xl font-bold text-red-500">{error}</p>
                }
            </form>
        </div>
    );
};

export default Form;