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
    parentsUntil
} from "@syncfusion/ej2-react-grids";
import { getValue } from '@syncfusion/ej2-base';
import { Header } from "./../../components";
import { useDispatch, useSelector } from "react-redux";
import { get, add, put, del } from "./../../helpers/Crud";
import {getAllclass} from "./../../store/reducer/classSlice";
import { classGrid } from './../../data/dummy';

export default function AdminViewCourses (props) {
    const editOptions = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    };
       
    // const customFn = (args) => {
    //     //var editRow = parentsUntil (args.element, 'e-row'); //here you can get the values the other input field value
    //     // var Grid_Id = parentsUntil (args.element, 'e-grid').id;
    //     // console.log(editRow.querySelector("#"+Grid_Id+"OrderID").value);
    //     const inputTextValue = getValue('value', args);
    //     return inputTextValue !== "" && !(/[0-9]+/).test(inputTextValue);
    // }

        const customIDRules =[
            // { required:[true,"title is required "],min:[5,"title length error"]}
            {
                regex: ["^[A-Za-z ]+$","course title can not contain numbers"],
                required: true
            }
        ]
    const dispatch = useDispatch();
    const toolbarOptions = [
        "Add",
        "Edit",
        "Delete",
        "Update",
        "Cancel",
        "Search",
    ];

    const [data, setData] = useState();

    const refreshGrid = () => {
        get("http://localhost:8000/admin/getAllClasses").then((newData) => {
            for (let index = 0; index < newData.length; index++) {
                const element = newData[index];
                if (element.startDate) {
                    element.startDate=element.startDate.split("T")[0]   
                    element.endDate=element.endDate.split("T")[0]   
                }
            }
            dispatch(getAllclass(newData));
            setData({ result: newData, count: newData.length });
        });
    };

    const dataSourceChanged = (state) => {
        if (state.action === "add") {
            add("http://localhost:8000/admin/addclass", state.data).then(
                (_) => refreshGrid()
            );
        } else if (state.action === "edit") {
            ref.current.hideSpinner();
            put(
                `http://localhost:8000/admin/editclass/${state.data._id}`,
                state.data
            )
            .then((_) => refreshGrid())
            .then(() => ref.current.hideSpinner());
        } else if (state.requestType === "delete") {
            del(
                `http://localhost:8000/admin/deleteclass/${state.data[0]._id}`
            ).then((_) => refreshGrid());
        } else {
            console.log(state.action);
        }
    };

    const ref = useRef(null);
    useEffect(() => {
        refreshGrid();
    }, []);

    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Courses" />
            {/* <GridComponent ref={grid => this.gridInstance = grid} dataSource={this.props.data1.currentData}  dataStateChange={this.dataStateChange.bind(this)} dataSourceChanged={this.dataSourceChanged.bind(this)} allowSorting={true} editSettings={this.editOptions} toolbar={this.toolbarOptions} allowFiltering={true} allowPaging={true}></GridComponent> */}
            <GridComponent
                ref={ref}
                actionComplete={(e) => console.log(e)}
                dataSource={data}
                allowPaging={true}
                allowSorting={true}
                editSettings={editOptions}
                toolbar={toolbarOptions}
                dataSourceChanged={dataSourceChanged}
                width="auto"
                // queryCellInfo={dropdown}
            >
                <ColumnsDirective>
                    {classGrid.map((item, index) => (
                        <ColumnDirective  validationRules={customIDRules[index]} key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Sort, Edit, Toolbar, Search]} />
            </GridComponent>
        </div>
    );
};



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
