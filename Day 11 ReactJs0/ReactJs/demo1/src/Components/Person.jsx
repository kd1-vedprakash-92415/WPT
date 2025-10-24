const person={
    name:"Vedpraksh Umare",
    age:22,
    address:"Sunbeam,Karad"
}
function Person(){
    return <>
        <h3>Person Info</h3>
        <div>Name:{person.name}</div>
        <div>Age:{person.age}</div>
        <div>Address:{person.address}</div>
    </>

    
}
export default Person;