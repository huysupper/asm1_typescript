import { useParams } from "react-router-dom";
const DetailPage = ({products}) => {
    const {id}=useParams()
    const currentProduct=products.find(item=>{
        return item.id ===Number(id)
    })
    console.log(currentProduct)
    return(
        <div>
            <h1>{currentProduct?.name}</h1>
            <h1>{currentProduct?.price}</h1>
        </div>
    )
}

export default DetailPage;