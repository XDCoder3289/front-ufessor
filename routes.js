//auth routes
import NewIndex from "./views/auth/newIndex";
import Privacy from "./views/auth/privacy";

//student routes
import DashboardStudent from "./views/student/dashboard";
import GigView from "./views/student/GigView";
import MyClasses from "./views/student/MyClasses";
import OrderClass from "./views/student/OrderClass";
import NewStudentLogin from "./views/student/NewStudentLogin";
import NewStudentSignup from "./views/student/NewStudentSignup";
import NewStudentConfirm from "./views/student/NewStudentConfirm";
import Messages from "./components/Messages";
import SearchTeacher from "./views/student/SearchTeacher";
import StudentProfile from "./views/student/StudentProfile";
import PaymentSuccess from "./views/student/PaymentSuccess";
import StudentStudy from "./views/student/StudentStudy";


//teacher routes
import NewProfile from "./views/teacher/NewProfile";
import NewTeacherSignUp from "./views/teacher/NewSignup";
import NewConfirm from "./views/teacher/NewConfirm";
import NewTeacherLogin from "./views/teacher/NewLogin";
import TeacherClasses from "./views/teacher/TeacherClasses";
import StudyView from "./views/teacher/StudyView";
import TeacherMessages from "./views/teacher/TeacherMessages";


//admin routes
import AdminLogin from "./views/admin/AdminLogin";
import AdminDashboard from "./views/admin/AdminDashboard";
import VerifiedTeachers from "./views/admin/VerifiedTeachers";
import StudentsList from "./views/admin/StudentsList";
import ClassRequests from "./views/admin/ClassRequests";

var routes = [
  {
    path: "/",
    name: "Home",
    display: "auth",
    component: NewIndex,
    layout: "/auth"
  },
  {
    path: "/privacy-policy",
    name: "Home",
    display: "auth",
    component: Privacy,
    layout: "/auth"
  },
  {
    path: "/login",
    param: false,
    auth: false,
    component: NewStudentLogin,
    layout: "/student"
  },
  {
    path: "/signup",
    param: false,
    auth: false,
    component: NewStudentSignup,
    layout: "/student"
  },
  {
    path: "/confirm",
    param: true,
    auth: false,
    paramVal: "email",
    component: NewStudentConfirm,
    layout: "/student"
  },
  {
    path: "/",
    param: false,
    auth: true,
    component: DashboardStudent,
    layout: "/student"
  },
  {
    path: "/search",
    param: true,
    auth: true,
    paramVal: "query",
    component: SearchTeacher,
    layout: "/student"
  },
  {
    path: "/profile",
    param: true,
    auth: true,
    paramVal: "email",
    component: GigView,
    layout: "/student"
  },
  {
    path: "/myclasses",
    param: false,
    auth: true,
    component: MyClasses,
    layout: "/student"
  },
  {
    path: "/study",
    param: true,
    auth: true,
    paramVal: "id",
    component: StudentStudy,
    layout: "/student",
  },
  {
    path: "/myorder",
    param: true,
    paramVal: "id",
    auth: true,
    component: OrderClass,
    layout: "/student"
  },
  {
    path: "/paymentsuccess",
    param: true,
    paramVal: "id",
    auth: true,
    component: PaymentSuccess,
    layout: "/student"
  },
  {
    path: "/mychat",
    param: true,
    auth: true,
    paramVal: "info",
    component: Messages,
    layout: "/student"
  },
  {
    path: "/myprofile",
    param: false,
    auth: true,
    component: StudentProfile,
    layout: "/student"
  },
  {
    path: "/",
    name: "Profile",
    param: false,
    auth: true,
    display: "teacher",
    component: NewProfile,
    layout: "/teacher"
  },
  {
    path: "/myclasses",
    name: "Teacher",
    param: false,
    auth: true,
    display: "teacher",
    component: TeacherClasses,
    layout: "/teacher"
  },
  {
    path: "/signup",
    name: "Signup",
    param: false,
    auth: false,
    display: "teacher",
    component: NewTeacherSignUp,
    layout: "/teacher",
  },
  {
    path: "/mychat",
    param: true,
    auth: true,
    paramVal: "info",
    component: TeacherMessages,
    layout: "/teacher"
  },
  {
    path: "/study",
    param: true,
    auth: true,
    paramVal: "id",
    component: StudyView,
    layout: "/teacher",
  },
  {
    path: "/confirm",
    name: "Confirm",
    display: "teacher",
    param: true,
    auth: false,
    paramVal: "email",
    component: NewConfirm,
    layout: "/teacher",
  },
  {
    path: "/login",
    name: "Login",
    display: "teacher",
    auth: false,
    param: false,
    component: NewTeacherLogin,
    layout: "/teacher",
  },
  {
    path: "/login",
    name: "Admin Login",
    auth: false,
    param: false,
    component: AdminLogin,
    layout: "/admin",
  },
  {
    path: "/",
    param: false,
    auth: true,
    component: AdminDashboard,
    layout: "/admin"
  },
  {
    path: "/allteachers",
    param: false,
    auth: true,
    component: VerifiedTeachers,
    layout: "/admin"
  },
  {
    path: "/classrequests",
    param: false,
    auth: true,
    component: ClassRequests,
    layout: "/admin"
  },
  {
    path: "/regstudents",
    param: false,
    auth: true,
    component: StudentsList,
    layout: "/admin"
  },
];

export default routes;
