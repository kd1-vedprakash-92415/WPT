function Product2(props){
    const pname=props.name|| "Students"
    const pcompany=props.company|| "Sunbeam"
    const pprice=props.price||106000

return <div>
    <h3>Name:{pname}</h3>
    <div>Company:{pcompany}</div>
    <div>Price:{pprice}</div>
    <div style={{fontStyle:'italic'}}>{props.children}</div>
</div>
}
export default Product2;