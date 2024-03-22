import { useState } from "react";



const Form = () => {
const [name,setName]=useState("")


const handleSubmit=e=>{
    e.preventDefault();
    // setName();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
}




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="w-full outline-dotted" type="text" name="name" />
                <br />
                <br />
                <input className="w-full outline-dashed" type="email" name="email" required />
                <br />
                <br />
                <input type="password" className="w-full outline-dashed" name="password" />
                <button className="btn btn-primary mt-5 ">submit</button>
            </form>
        </div>
    );
};

export default Form;