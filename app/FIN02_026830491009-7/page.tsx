"use client";

import Header from "./componets01/header";
import Footer from "./componets01/footer";
import { myPets } from "./data01/mypets";
import { useState } from "react";
import Todoform from "./componets01/Todoform";
import Modal from "./componets01/Modal";


export default function HerbHome(){
    const DataItem = [... myPets ];
    const [tasks, setTasks] = useState(DataItem);
    const [numOFTasks, setNoft] = useState(tasks.length);
    const [status , setStatus] = useState(null);
    const [open, setOpen] = useState(false); 
    const [selectedTask, setSelectedTask] = useState(null);
    const [editingTask, setEditingTask] = useState(null);

    const resetEditingTask = () => setEditingTask(null); 

    const filterTasks = 
        status == null ? tasks 
        :tasks.filter (
        (item) => item.status == status
        );

    let Name = "sin";
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
        //alert(`งานที่คุณต้องแก้ไข ${t}`);
        
        setEditingTask(t);
        }

    const updateTask = (id,name,status,det) => {
        setTasks(
            tasks => tasks.map(
                t =>t.id === id ?
             {   ...t,
                name: name,
                status: status,
                detail:det
             }  :t

            ) );
            setEditingTask(null);
    }
        
    
    const onDelete = (id) => {

        const updateTask = tasks.filter(
            item => item.id != id
        );
        setTasks(updateTask);
    }
    

    const tmpTdl = filterTasks.map((item, index  )=> {
    const {id,name, detail ,type,supplier} = item;

    return (
    <a className=" bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium" key = {id}>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {name}</h5>
    <p className="text-body">ข้อมูล: {detail}</p>
    <p className="text-body">ประเภท: {type}</p>
    <p className="text-body">ผู้ผลิต: {supplier}</p>
    

    <div className="flex gap-2 mt-2">
    {/* View 
    <button onClick={() => { setSelectedTask(item); setOpen(true); }} className="bg-green-500 text-white px-3 py-1 rounded" > View </button>

    {/* Edit 
    <button onClick={(e)=>onEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>*/}

    {/* Delete */}
    <button onClick={(e)=>onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    </div>
    </a>);
    }
    


    
    );
     const addTask = (name, status,det,sup) => {

        const newTask = {
            id: tasks.length + 1,
            name: name,
            detail: det,
            type: status,
            supplier: sup
        };

        setTasks([...tasks, newTask]);
        setNoft(tasks.length + 1);
    };
    

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

    <Todoform 
        addTask={addTask} 
        editingTask={editingTask}
        updateTask={updateTask}
        resetEditingTask={resetEditingTask}
        
    />



        <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {tmpTdl}
        </div>
           
        <Footer></Footer>
        </>
        
    );


}
