import Header from "../components/header";
import Footer from "../components/footer";
import { Pets } from "../data/Pets";  

export default function Petss(){
    
    let Name = "";
    const major = "";
    let classYear = "";
    let classSec = "";
    let active = true;



    const tmpTdl = Pets.map((item, index) =>

     <a className=" bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium mt-15" key = {index}>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {item.name}</h5>
    <p className="text-body">ชื่อ: {item.name}</p>
    <p className="text-body">ผู้ผลิต: {item.detail}</p>
    <p className="text-body">ประเภท: {item.type}</p>
</a>

    );

     console.log(`Name: ${Name}`);
    console.log(`major: ${major}`);
    console.log(`classYear: ${classYear}`);
    
    return (
        <>
              <Header></Header>
        <div className="flex justify-center mt-30">
  <div className="max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
      รายการสมุนไพรในระบบ
    </h5>

    <p className="text-body">
      ชื่อ: {Name} <br />
      ผู้ผลิต: {major} <br />
      ประเภท: {classYear} <br />
      
     
    </p>
  </div>
</div>
        <div className="flex justify-center">  
            {tmpTdl} 
        </div>

        <Footer /></>
        
        
    );


}