import { useState } from "react";
import { Router } from "react-router-dom";

const AddProductPage = ({add}) => {
   
    const [inputValues,setInputValues]=useState()
    const onHandleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value
        setInputValues({...inputValues,[name]:value})
    }
    const onHandSubmit=(e)=>{
        e.preventDefault()
        add(inputValues)
    }

    return (
        <form action="" onSubmit={onHandSubmit}>
        <div className="mb-3">
          <label  className="form-label">Name</label>
          <input type="text" className="form-control" name="name" onChange={onHandleChange} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Price</label>
          <input type="text" className="form-control" name="price" onChange={onHandleChange} />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}

export default AddProductPage;