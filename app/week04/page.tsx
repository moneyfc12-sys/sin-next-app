import Header from "../components/header";
import Footer from "../components/footer";
import { toDoList } from "../data/toDolist";    

export default function ToDoList(){
    
    let Name = "sin";
    const major = "เทตโนโลยรสารสนเทศ (Information Technology)";
    let classYear = "2";
    let classSec = "ทส.ค/ทส.ก";
    let active = true;

    const isActive = (act: boolean) => {
        if(act)
        return<span style ={ { color: "greet"} }>กำลังศึกษาอยู่</span>;
     return<span style ={ { color: "red"} }>ไม่ได้เป็นนักศึกษา</span>;
        
        
    }

    const tmpTdl = toDoList.map((item, index) =>

     <a className=" bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium mt-15" key = {index}>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {item.title}</h5>
    <p className="text-body">หัวข้อ: {item.des}</p>
    <p className="text-body">หัวข้อ: {item.data_added}</p>
    <p className="text-body">หัวข้อ: {item.data_added}</p>
</a>

    );

    console.log(`Name: ${Name}`);
    console.log(`major: ${major}`);
    
    return (
        <>
            <Header></Header>
        <div className="flex justify-center mt-30">
  <div className="max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
      TO Do List
    </h5>

    <p className="text-body">
      ชื่อ-สกุล: {Name} <br />
      สาขาวิชา: {major} <br />
      ชั้นปี: {classYear} <br />
      ห้อง: {classSec} / {classYear} <br />
      สถานะภาพการศึกษา: {isActive(active)}
    </p>
  </div>
</div>
        <div className="flex justify-center">  
            {tmpTdl} 
        </div>

        <Footer /></>
        
        
    );


}
