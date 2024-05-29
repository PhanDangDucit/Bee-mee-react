import '@/index.css';
import Home from "@/ui/user/home/page";
import HomeAdmin from "@/ui/admin/dashboard/page";
import Categories from '@/ui/admin/categories/page';
import ProductsComponent from '@/ui/admin/products/page';

import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/admin' element={<HomeAdmin/>}></Route>
                <Route path='/admin/categories' element={<Categories/>}></Route>
                <Route path='/admin/products' element={<ProductsComponent/>}></Route>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </>
    )
}

export default App;