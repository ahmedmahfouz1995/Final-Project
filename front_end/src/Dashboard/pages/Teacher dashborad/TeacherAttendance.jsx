import React from 'react'

import Header from './../../components/Header';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Edit, Toolbar, Search } from '@syncfusion/ej2-react-grids';
import { Inject } from '@syncfusion/ej2-react-schedule';
import { attendanceGrid } from '../../data/dummy';
import { axios } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { add, del, get, put } from '../../helpers/Crud';
import { getValue } from '@syncfusion/ej2-base';
import TeacherAttendanceReport from './TeacherAttendanceReport';
export default function TeacherAttendance() {
    // validationRules={customIDRules[index]} 
    const editOptions = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    };
    const toolbarOptions = [
        // "add",
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
const [view,setView]=useState(false)
const [viewallreport,setAllView]=useState(false)
const [details,setDetails]=useState()

    const refreshGrid = () => {
        get("http://localhost:8000/attend/637d373630607008f751039f").then((newData) => {
            console.log(newData);
            const students =newData[0].students
            console.log(students);
            setData({ result:students, count: students?.length });
            setDetails(newData);
            console.log(details);
        });
    };
    const ShowNewReport=(id)=>{
        setView(true)
        setAllView(false)
        refreshGrid()
    }
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
            console.log("dd",state.data._id._id);
             details[0].students.map((element)=>{
                if (element._id._id===state.data._id._id) {
                    element.attendenceStuts=state.data.attendenceStuts
                    return 1
                }else{
                    refreshGrid()
                    return 0
                }
             })
             setDetails(...details)
             console.log(details);
            put(`http://localhost:8000/attend/${details[0]._id}`,details[0])
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
const viewallreports =()=>{
    setAllView(true)
    setView(false)
}

const ref = useRef();
    useEffect(() => {
        refreshGrid();
    }, []);
  return (
    <>

  
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-2 mx-9" role="presentation">
                  <button onClick={()=>{ShowNewReport("id")}} className="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab">Create new report  </button>
              </li>
              <li className="mr-2 mx-9" role="presentation">
                  <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"  onClick={viewallreports}>View reports</button>
              </li>
          </ul>
      </div>
      {
          view &&
             <>
             
             <div className="m-2 md:m-10 p-4 md:p-10 bg-white rounded-3xl">
              { <h3 className="text-green-900">Lesson Date : {details?.reportDate?.split("T")[0]}</h3> }
              { <p className="text-grey-300">by : {details?.teacher?.name}</p> }
                     <Header title="Attendance sheet" />
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
      } 
      {
          viewallreport &&
            <TeacherAttendanceReport></TeacherAttendanceReport>
      } 
             </>

  )
}
