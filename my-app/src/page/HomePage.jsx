import { Link } from "react-router-dom";
const HomePage = ({products}) => {
    return (
       <div>
        {
             products.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <h1>{item.price}</h1>
                            <Link to={`detail/${item.id}`}><button>detail</button></Link>
                        </div>
                    )
             })
        }
       </div>
    )
}

export default HomePage;