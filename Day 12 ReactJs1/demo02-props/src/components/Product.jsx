function Product(props){
    const pname=props.name||"Dummy Product"
    const pcompany=props.company||"unknown"
    const pprice=props.price||0.0
    return <div>
        <h3>Name:{pname}</h3>
        <div>Comapny:{pcompany}</div>
        <div>Price:{pprice}</div>
    </div>

}
export default Product;