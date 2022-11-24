import React from 'react'

import Header from './../../components/Header';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Edit, Toolbar, Search } from '@syncfusion/ej2-react-grids';
import { Inject } from '@syncfusion/ej2-react-schedule';
import { attendanceGrid } from '../../data/dummy';
import { axios } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { add, del, get, put } from '../../helpers/Crud';
import { getValue } from '@syncfusion/ej2-base';
export default function TeacherAttendance() {
    // validationRules={customIDRules[index]} 
    const editOptions = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    };
    const toolbarOptions = [
        "add",
        "Edit",
        "Delete",
        "Update",
        "Cancel",
        "Search",
    ];
    const customIDRules =[
        {
            // name
            required: true,
         
        },
        {
            // email
            required: true,
    
        },
        {
        //    phone 
            required: true,
    
        },
        {
            // gender
            required: true,
        },
    ]
const [data,setData]=useState()
const [details,setDetails]=useState()
    const refreshGrid = () => {
        get("http://localhost:8000/attend/637f41c0a191baa398cd37d5").then((newData) => {
            const students =newData.students
            setData({ result:students, count: students.length });
            setDetails(newData);
        });
    };
   const rowDataBound=(args)=> {
        if (args.row) {
          if (getValue('attendenceStuts', args.data) ===true){
            args.row.classList.add('present');
          } else if(getValue('attendenceStuts', args.data) ===false ) {
              args.row.classList.add('absent');
          } else {
              args.row.classList.add('');
          }
        }
    }
   
    const dataSourceChanged = (state) => {
       if (state.action === "edit") {
            ref.current.hideSpinner();
             details.students.map((element)=>{
                if (element._id._id===state.data._id._id) {
                    element.attendenceStuts=state.data.attendenceStuts
                    return 1
                }else{
                    refreshGrid()
                }
             })
             setDetails(details)
            put(`http://localhost:8000/attend/${details._id}`,details)
                .then((_) => refreshGrid())
                .then(() => ref.current.hideSpinner());
                refreshGrid()
            }
        else if (state.requestType === "delete") {
                ref.current.hideSpinner();
             details.students.filter((element)=>{
                    return element._id._id !==state.data._id._id
             })
             setDetails(details)
                del(
                    `http://localhost:8000/attend/${details._id}`,details
                    ).then((_) => refreshGrid());
             
            }
        else if (state.action === "add") {
                    state.data.classTitle=data?.count+1
                    add("http://localhost:8000/admin/attend", state.data).then(
                        (_) => refreshGrid()
                        );
                        console.log(state.data)
                 } else {
                    console.log(state.action);
            }
    };
            
    const actionBegienHandler= (args) => {
        if (args.requestType==="add") {
        }
    }
    const actionEndHandler= (e)=>{
}
console.log(data.count);
const ref = useRef();
    useEffect(() => {
        refreshGrid();
    }, []);
  return (
    <>
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
     { <h3 className="text-green-900">Lesson : {data.count+1}</h3> }
            <Header title="attendance sheet" />
            <GridComponent
                 actionComplete={actionEndHandler}
                 actionBegin={actionBegienHandler}
                 dataSource={data}
                 allowPaging={true}
                 allowEditing={true}
                 editSettings={editOptions}
                 toolbar={toolbarOptions}
                 rowDataBound={rowDataBound}
                 dataSourceChanged={dataSourceChanged}
                 width="auto"
                 ref={ref}
            >
                <ColumnsDirective>
                    {attendanceGrid.map((item, index) => (
                        <ColumnDirective validationRules={customIDRules[index]} key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Sort, Edit, Toolbar, Search]} />
            </GridComponent>
        </div>
    </>
  )
}
