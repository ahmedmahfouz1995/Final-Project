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
import { teachersGrid } from "../data/dummy";
import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { get, add, put, del } from "../helpers/Crud";
import {
   
    showAllTeachers,
} from "../store/reducer/TeacherSlice";


const Teachers = (props) => {
    const { TeacherData } = useSelector((state) => state.Teachercontx);
    const editOptions = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    };
    const dispatch = useDispatch();
    const toolbarOptions = [
        "Add",
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
            regex: ["^[A-Za-z ]+$","name can not contain numbers or special characters"],
            minLength: [5,"name length must be longer than four letters "]
        },
        {
            // email
            required: true,
           email: [true,"this Email aleardy exist"],
        },
        {
        //    phone 
            required: true,
            // regex: ["/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/","inValid phone number"],
           
           number :[true ,"price can not contain letters"]
        },
        {
            // gender
            required: true,
        },
        {
            // dob
            required: true,
        },
       
    ]

    const [data, setData] = useState([]);
    const refreshGrid = () => {
        get("http://localhost:8000/admin/getAllTeachers").then((newData) => {
            for (let index = 0; index < newData.length; index++) {
                const element = newData[index];
                if (element.DOB) {
                    element.DOB=element.DOB.split("T")[0]   
                }
            }
            dispatch(showAllTeachers(newData));
            console.log("TeacherData",{TeacherData});
            setData({ result:newData, count: newData.length });
            console.log("newData",{newData});
        });
    };

   
    const dataSourceChanged = (state) => {
        if (state.action === "add") {
            state.data.subject._id=state.data.subject.title
            state.data.subject.title=""
            add("http://localhost:8000/admin/addTeacher", state.data).then(
                (_) => refreshGrid()
            );
        } else if (state.action === "edit") {
            ref.current.hideSpinner(); 
            state.data.subject._id=state.data.subject.title
            state.data.subject.title=""
            console.log("khooooood",state.data);
            put(
                `http://localhost:8000/admin/editTeacher/${state.data._id}`,
                state.data
            )
            .then((_) => refreshGrid())
            .then(() => ref.current.hideSpinner());
        } else if (state.requestType === "delete") {
            del(
                `http://localhost:8000/admin/deleteTeacher/${state.data[0]._id}`
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
            <Header category="Page" title="Teachers" />
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
            >
                <ColumnsDirective>
                {
                    console.log(TeacherData,data)
                }
                    {teachersGrid.map((item, index) => (
                        <ColumnDirective validationRules={customIDRules[index]} key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Sort, Edit, Toolbar, Search]} />
            </GridComponent>
        </div>
    );
};

export default Teachers;
