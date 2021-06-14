import React, { useState } from 'react';

const Contact=()=>
{
    const [data,setData] = useState(
        {
            fullname : "",
            email : ""
        }
    )
   const inputEvent=(event)=>
   {
     const {name,value} = event.target;
     setData((preVal)=>{
       return{ ...preVal,[name]: value
       };
     } 
       
        );
   }
   const Submit=(e)=>
   {
      e.preventDefault();
      alert(`The name is ${data.fullname} and email is ${data.email}`);
   }
   return(
        <>
        <h1 className="Contact">Contact Us</h1>
        <form onSubmit={Submit}>
        <div class="mb-3 my-5">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" name="fullname" value={data.fullname} onChange={inputEvent} class="form-control w-25 mx-auto " id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" name="email" value={data.email} onChange={inputEvent} class="form-control w-25 mx-auto" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="col-12">
    <button class="btn btn-primary submit" type="submit">Submit form</button>
  </div>
  </form>

 </>
    );
}


export default Contact;