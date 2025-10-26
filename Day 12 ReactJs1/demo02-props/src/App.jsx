import GenericButton, { DangerButton, PrimaryButton, SecondaryButton } from "./Button"
import ClassHello from "./ClassHello"
import Product from "./components/Product"
import FunctionalHello from "./FunctionalHello"
import Product2 from "./Procduct2"


function App() {


  return (
    <div>
      {/* <h1>Hello React</h1>
      <Product name={"Iphone"} company={"Apple"} price={50000} />
      <Product name={"Samsung A12"} company={"Samsung"} price={15000}/>
      <Product/> */}
      {/* <FunctionalHello/>
      <ClassHello/> */}
      {/* <Product2 name={"Galaxy A12"} company={"Samsung"} price={15000} >
      <div> Secured by:Knox</div>
      <div>camera:50mp</div>
      </Product2> */}
      {/* <GenericButton text="Generic!!!" color= "Green"/>
      <PrimaryButton text="Primary!!!"/>
      <SecondaryButton text="Secondary!!"/>
      <DangerButton text="Danger--Exit"/> */}
      {/* <GenericButton text="Ayush" /> */}
      <Product2 name={"Galaxy A12"} company={"Samsung"} price={15000}>
        <PrimaryButton text="Add To Cart"/>
        <SecondaryButton text="Add to Wishlist"/>
        <DangerButton text="Not Interested"/>
        <GenericButton text="Buy Now" color ="Green"/>
        <div> Camera: 50MP</div>
        <div>Ram: 6GB</div>
        <div>Storage:128GB</div>
      </Product2>


    </div>
  )
}

export default App
