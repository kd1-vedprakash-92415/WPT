
const person = {
    name: "Vedpraksh Umare",
    age: 22,
    address: "Sunbeam Karad"
}

const styles={
    info: {
        border: "2px solid red",
        padding: "4px",
        margin: "4px"
    },
    name: {
        fontWeight: "bold"
    },
    address: {
        fontStyle: 'italic'
    }
}



function PersonStyled(){
    return <div className="person">
        <h3 style={{color:'red',backgroundColor:'yellow', padding:'4px'}}>Person Info</h3>
        <div style={styles.info}>
            <div style={styles.name}>Name: {person.name}</div>
            <div>Age:{person.age}</div>
            <div style={styles.address}>Address:{person.address}</div>
        </div>
        <hr />
    </div>

}
export default PersonStyled;