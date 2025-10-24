const heros=[
     {
        name: "James Bond",
        age: 65,
        address: "London",
        speciality: "Adventure Spy"
    },
    {
        name: "John Galt",
        age: 55,
        address: "USA",
        speciality: "Super Hero"
    }

]
function Heros(){
    return <div>
        {
            heros.map((h)=> <div> 
                <div>Name:{h.name}</div>
                <div>Age:{h.age}</div>
                <div>Address:{h.address}</div>
                <div>Speciality:{h.speciality}</div>
            </div>
            )
        }
    </div>
}
export default Heros;