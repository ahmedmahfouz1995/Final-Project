import React, { useEffect, useRef, useState } from "react";
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Search,
    Inject,
    Toolbar,
    Edit,
    Sort,
} from "@syncfusion/ej2-react-grids";
import {  teachersGrid } from "../data/dummy";
import { Header } from "../components";
import {  useSelector } from "react-redux";
import { get, add, put, del } from "../helpers/Crud";
// import {
//     createTeacher,
//     deleteTeacher,
//     editTeacher,
//     getAllTeachers,
// } from "../store/reducer/TeacherSlice";

const Teachers = (props) => {
    const { TeacherData } = useSelector((state) => state.Teachercontx);
    const editOptions = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    };

    const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel","Search"];

    const [data, setData] = useState();

    const refreshGrid = () => {
        get("http://localhost:8000/admin/getAllTeachers").then(newData => {
            // if (newData !== data) {
            setData({ result: newData, count: newData.length });
            console.log(1)
            // }
        });}
    //     dispatch(getAllTeachers()).then((newData) => {
    //         if (newData !== data) {
    //             setData({
    //                 result: newData,
    //                 count: newData.length,
    //             });
    //         }
    //     });
    // };
    const dataSourceChanged = (state) => {
  
        if (state.action === "add") {
            console.log(state)
            add("http://localhost:8000/admin/addTeacher", state.data).then((_) =>
            refreshGrid()
        );
    }else if (state.action === "edit") {
            ref.current.hideSpinner();
            put(`http://localhost:8000/admin/editTeacher/${state.data._id}`, state.data)
                .then(() => ref.current.hideSpinner())
                .then(() => ref.current.endEdit());
                refreshGrid()
        } else if (state.requestType === "delete") {
            del(`http://localhost:8000/admin/deleteTeacher/${state.data[0]._id}`).then(
                (_) => refreshGrid()
                );
            } else {
                console.log(state.action);
        }
    };
    



    useEffect(() => {
        refreshGrid();
    },[]);

    // useEffect(() => {
    console.log("this is hereeee");
    const ref = useRef(null);
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Teachers" />
            {/* <GridComponent ref={grid => this.gridInstance = grid} dataSource={this.props.data1.currentData}  dataStateChange={this.dataStateChange.bind(this)} dataSourceChanged={this.dataSourceChanged.bind(this)} allowSorting={true} editSettings={this.editOptions} toolbar={this.toolbarOptions} allowFiltering={true} allowPaging={true}></GridComponent> */}
            <GridComponent
                ref={ref}
                dataSource={data}
                allowPaging={true}
                allowSorting={true} 
                pageSettings={{ pageSize: 6 }}
                editSettings={editOptions}
                toolbar={toolbarOptions}
                dataSourceChanged={dataSourceChanged}
                width="auto"
            >
                <ColumnsDirective>
                    {teachersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Sort, Edit, Toolbar, Search]} />
            </GridComponent>
        </div>
    );
};

export default Teachers;




      // if (state.action === "add") {
        //     add("http://localhost:3030/books", state.data).then((_) => refreshGrid());
        // }
             // else if (state.action === "edit") {
        //     // console.log(state.data)
        //     // ref.current.hideSpinner();
        //     put(`http://localhost:3030/books/${state.data.id}`, state.data).then((_) => refreshGrid())
        //         .then(() => ref.current.hideSpinner());
        //     // .then(() => ref.current.endEdit());
        // }

        // else if (state.requestType === "delete") {
        //     del(`http://localhost:3030/books/${state.data[0].id}`).then((_) => refreshGrid());
        // }

        // else {
        //     // console.log(state.action)
        // }