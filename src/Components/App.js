import {Provider} from "react-redux";
import GlobalStyle from "../styles/globalStyles";
import store from '../redux/store';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import DefaultPage from "../pages/DefaultPage";
import RequireAuth from "../routes/RequireAuth";
import Organizations from "./organizations/Organizations";
import RidesPage from "../pages/RidesPage";
import OrganizationsPage from "../pages/OrganizationsPage";


const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='rides' element={<RequireAuth><RidesPage/></RequireAuth>}/>
                        <Route path='organizations' element={<RequireAuth><OrganizationsPage/></RequireAuth>}/>
                        <Route path='signup' element={<AuthPage/>}/>
                        <Route path='signin' element={<AuthPage/>}/>
                        <Route path='*' element={<DefaultPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
export default App