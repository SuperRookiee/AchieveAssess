import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/user/layout";
import Main from "./pages/main";
import Content from "./pages/user/content";
import Login from "./pages/user/login/login";
import Join from "./pages/user/join/join";

import LayoutViewer from "./layouts/viewer/layout";
import CbtViewer from "./pages/user/cbt/viewer";
import ExamViewer from "./pages/user/exam/viewer";
import PrivateRoute from "./components/user/PrivateRoute";
import Error from "./pages/error/error";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Main />} />
                <Route path='user' >
                    <Route element={<PrivateRoute />}>
                        <Route path=":content" element={<Content />}>
                            <Route path=":id" element={<Content />}/>
                        </Route>
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route path="join" element={<Join />} />
                </Route>
                <Route path='*' element={<Error/>} />
            </Route>
            <Route path='/user' element={<LayoutViewer />}>
                <Route path='cbt/viewer' element={<CbtViewer />} />
                <Route path='exam/viewer' element={<ExamViewer />} />
                <Route path='*' element={<Error/>} />
            </Route>
            <Route path='*' element={<Error/>} />
        </Routes>
    );
}

export default App;