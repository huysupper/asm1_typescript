import { Link } from "react-router-dom"

const ProductPage = ({products}) => {
    
    return (
        <div>
    <Link to={`/admin/product/add`}><button type="button" class="btn btn-primary">Add new product</button></Link>
     <table class="table">
     <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Product name</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
        <th></th>
        </tr>
  </thead>
    <tbody>
        {
            products.map((item,index)=>{
            return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                <Link to={'/admin/product/:id/update'}><button type="button" class="btn btn-success">Update</button></Link>

                <Link to={'#'}><button type="button" class="btn btn-danger">Delete</button></Link>
                </td>
            </tr>
            )
            })
        }
    </tbody>
    </table>
        </div>
    )
}

export default ProductPage