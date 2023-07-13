import  Tablemain  from "./components/table/Tablemain";
import  Home  from "./page/home/Home";
import StudetnMnager from "./components/StudentManger/StudentManger";
import Scan from "./page/scan/Scan";
import Mainsession from "./page/session/Mainsession";
import TestQr from "./page/testqr/TestQr";
import PageStudent from "./page/student/PageStudent";
import AddStudent from "./page/addStudent/AddStudent";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },

  {
    path: '/fetch-data',
    element: <Tablemain />
  },
  {
    path: 'student-manger',
    element :<StudetnMnager/>
  },
  {
    path: 'add-session',
    element :<Mainsession/>
  },
  {
    path: 'student-registration',
    element :<Scan/>
  },
  {
    path: 'test-qr',
    element :<TestQr/>
  },
  {
    path: 'page-student',
    element :<PageStudent/>
  },
  {
    path: 'add-student',
    element :<AddStudent/>
  }

];

export default AppRoutes;
