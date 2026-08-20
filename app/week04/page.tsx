"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { dataitem , appendItem } from "../data/dataitem";
import { useState } from "react";
import Todoform from "./components/Todoform";
import Modal from "./components/Modal"

export default function MyToDoList(){
    
    const ToDoList = [...dataitem, ...appendItem];
    const [Tasks , setTasks] = useState(ToDoList);
    const [numOfTasks, setNoft] = useState(Tasks.length);
    const [status , setStatus] = useState(null);
    const [open, setOpen] = useState(false); 
    const [selectedTask, setSelectedTask] = useState(null);

    const filterTasks = 
        status == null ? Tasks 
        :Tasks.filter (
        (Item) => Item.status == status
        );

    let Name = "Tawan";
    const major = "เทตโนโลยรสารสนเทศ (Information Technology)";
    let classYear = "2";
    let classSec = "ทส.ค/ทส.ก";
    let active = true;


    const isActive = (active: boolean) => {
        if (active) 
            return<span style= {{ color: "green" } }>กำลังศึกษาอยู่</span>;
        return<span style= {{ color: "red" } }>ไม่ได้เป็นศึกษาอยู่</span>;
     
    }

    const onEdit = (t) => {
        alert(`งานที่คุณต้องแก้ไข ${t}`);
    }
    const onDelete = (id) => {
        alert(`คุณต้องการลบข้อมูล รหัสงาน ${id}?`);
    }
    const State = [...dataitem, ...appendItem];

    const tmpTdl = filterTasks.map((item, index  )=> {
    const {id,title, des ,author,data_added,status} = item;

return (<a className=" bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium" key = {id}>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {title}</h5>
    <p className="text-body">ข้อมูล: {des}</p>
    <p className="text-body">วันที่: {data_added}</p>
    <p className="text-body">ผู้แต่ง: {author}</p>
    
    <Modal open={open} onClose={() => setOpen(false)}>
    {selectedTask && (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">
                หัวข้อ: {selectedTask.title}
            </h2>

            <p>ข้อมูล: {selectedTask.des}</p>
            <p>วันที่: {selectedTask.data_added}</p>
            <p>ผู้แต่ง: {selectedTask.author}</p>
            <p>สถานะ: {selectedTask.status ? "Completed" : "Pending"}</p>
        </div>
    )}
</Modal>

    <div className="flex gap-2 mt-2">
    {/* View */}
    <button onClick={() => { setSelectedTask(item); setOpen(true); }} className="bg-green-500 text-white px-3 py-1 rounded" > View </button>

    {/* Edit */}
    <button onClick={(e)=>onEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>

    {/* Delete */}
    <button onClick={(e)=>onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    </div>
    </a>);
    }
    


    
    );
     const AddTask = (title , taskStatus) => {
        const NewTask = {
        id: Tasks.length+1,
        title: "ทดสอบเพิ่มงาน",
        desc: "ราบละเอียดของงานที่เพิ่ม",
        date_added: "17/08/2569",
        author: "thongsin",
        status: true
            
        }
        setTasks([...Tasks, NewTask]);
        setNoft(Tasks.length+1);
     }
    

    console.log(`Name: ${Name}`);
    console.log(`major: ${major}`);
    
    return (
        <>
            <Header />
            
            
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

    <Todoform addtask={AddTask} />

<div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">



    <div>จำนวณงานที่ต้องทำ {numOfTasks} รายการ</div>
    <div>
        
        <button onClick={AddTask} className="px-5 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl shadow-xs hover:bg-indigo-100 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200">เพิ่มงาน</button>
    </div>
        <div>
            <button onClick= { () => setStatus(null) } className="px-5 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl shadow-xs hover:bg-indigo-100 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200">[A] ALL</button>
            <button onClick= { () => setStatus(true) } className="px-5 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl shadow-xs hover:bg-indigo-100 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200">[C] Completed</button>
            <button onClick= { () => setStatus(false) } className="px-5 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl shadow-xs hover:bg-indigo-100 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200">[P] pending</button>
        </div>
</div>+

        <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {tmpTdl}
        </div>
           
        <Footer></Footer>
        </>
        
    );


}
