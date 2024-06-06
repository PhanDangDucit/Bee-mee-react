import '@/index.css';
import Home from "@/ui/user/home/page";
import HomeAdmin from "@/ui/admin/dashboard/page";
import Categories from '@/ui/admin/categories/page';
import ProductsComponent from '@/ui/admin/products/page';

import { Route, Routes } from 'react-router-dom';
import LoginPage from '@/ui/user/signin/page';
import Register from '@/ui/user/signup/page';
import { DetailProductPage } from './ui/user/detail/page';

const App = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signin' element={<LoginPage/>}></Route>
            <Route path='/signup' element={<Register/>}></Route>
            <Route path='/detail/:id' element={<DetailProductPage/>}></Route>

            {/* Admin routes */}
            <Route path='/admin' element={<HomeAdmin/>}></Route>
            <Route path='/admin/categories' element={<Categories/>}></Route>
            <Route path='/admin/products' element={<ProductsComponent/>}></Route>
        </Routes>
    )
}

export default App;