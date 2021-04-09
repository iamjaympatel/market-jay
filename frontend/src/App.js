import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/Customer/Home2'
import ProductScreen from './screens/Customer/ProductScreen'
import CartScreen from './screens/Customer/CartScreen'
import LoginScreen from './screens/Auth/LoginScreen'
import RegisterScreen from './screens/Auth/RegisterScreen'
import ProfileScreen from './screens/Auth/ProfileScreen'
import ShippingScreen from './screens/Customer/ShippingScreen'
import PaymentScreen from './screens/Customer/PaymentScreen'
import PlaceOrderScreen from './screens/Customer/PlaceOrderScreen'
import OrderScreen from './screens/Customer/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/Product/ProductListScreen'
import ProductEditScreen from './screens/Product/ProductEditScreen'
import ProductAddScreen from './screens/Product/ProductAddScreen'
import OrderListScreen from './screens/OrderListScreen'

import CategoryListScreen from './screens/Category/CategoryLIstScreen'
import CategoryAddScreen from './screens/Category/CategoryAddScreen'
import CategoryEditScreen from './screens/Category/CategoryEditScreen'
import CategoryScreen from './screens/Customer/Categoryscreen'
import CategoryProduct from './screens/Customer/CategoryProduct'
import Drawer2 from './components/Drawer'
import OrderScreenSeller from './screens/Order/Orderseller'
import OrderScreenAdmin from './screens/Order/Orderadmin'
const App = () => {
  return (
    <Router>
      <Header />
     
      <main className='py-3'>
        <Container>
       <Route path='/category' component={CategoryScreen} />
        <Route path='/category/:slug' component={CategoryProduct} />
          <Route path='/seller/order/:id' component={OrderScreenSeller} />
          <Route path='/admin/order/:id' component={OrderScreenAdmin} />
          
        <Route path='/order/:id' component={OrderScreen} />
         <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route  path='/admin/productlist/:pageNumber'  component={ProductListScreen}exact />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/product/add' component={ProductAddScreen} />
          
      
          
          <Route  path='/admin/categorylist/'  component={CategoryListScreen}exact />
          <Route path='/admin/category/:id/edit' component={CategoryEditScreen} />
          <Route path='/admin/category/add' component={CategoryAddScreen} />
          
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
