import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, ThemeSettings } from "./Dashboard/components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
  Teachers,
} from "./Dashboard/pages";
import { useStateContext } from "./Dashboard/contetxts/ContextProvider";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';

import Parent from './Dashboard/pages/parent dashboard/Parent';
import ShowChildren from './Dashboard/pages/parent dashboard/ParentComponents/ShowChildren';
import EditParent from './Dashboard/pages/parent dashboard/ParentComponents/EditParent';
import CreateParent from './Dashboard/pages/parent dashboard/ParentComponents/CreateParent';
import ShowParent from './Dashboard/pages/parent dashboard/ParentComponents/ShowParent';
import ShowStudent from './Dashboard/pages/parent dashboard/ParentComponents/ShowStudent';
import AdminCreate from './Dashboard/pages/admin dashboard/AdminCreate';

// ========================== Home Page ===================
import TheNavbar from "./HomePage/components/TheNavbar";
import Footer from "./HomePage/components/Footer";
import Home from "./HomePage/pages/Home/Home";
import AllCourses from "./HomePage/pages/Courses/AllCourses";
import CourseDetails from "./HomePage/pages/Courses/CourseDetails"
import Auth from "./HomePage/pages/Register/Auth";
import TeacherForm from "./HomePage/DashboardForms/TeacherForm";

function App() {
  // const { activeMenu } = useStateContext();
  const { activeMenu } = useSelector(state => state.context);
  const booksProps = useSelector(state => state.booksList);
const {TeacherData}=useSelector(state=>state.Teachercontx)
  return (
    <div>
        {/* <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"
              }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div> */}

            {/* <div>
              <Routes> */}
                {/* Dashboard */}
                {/* <Route path="/" element={<Ecommerce />} />
                <Route path="/CreateTeacher" element={<AdminCreate />} /> */}

                {/* Pages */}
                {/* <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees {...booksProps} />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/Parent" element={<Parent />}>
                  <Route path="/Parent/show" element={<ShowParent />} />
                  <Route path="/Parent/edit" element={<EditParent />} />
                  <Route path="/Parent/Create" element={<CreateParent />} />
                  <Route path="/Parent/child" element={<ShowChildren />} />
                  <Route path="/Parent/child/show" element={<ShowStudent />} />
                  <Route path="/Parent/child/edit" element={<ShowStudent />} />
                </Route> */}

                {/* Apps */}
                {/* <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* Charts */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>*/}
          {/* </div>
        </div>  */}

        {/* =============== Home page ============== */}
        <TheNavbar />
        <Routes>
        <Route path="/teacherDashboard" element={<Teachers {...TeacherData} />} />

          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/BecomeAnInstructor" element={<Auth />} />
          <Route path="/CreateTeacher" element={<AdminCreate />} />
          <Route path="/TeacherForm" element={<TeacherForm />} />
          <Route path="/TeacherForm/:id" element={<TeacherForm />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;









