
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'
import Product from '../../components/Product'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Paginate from '../../components/Paginate'
import ProductCarousel from '../../components/ProductCarousel'
import Meta from '../../components/Meta'
import { listProducts } from '../../actions/productActions'

import { fetchCategories } from '../../actions/categoryAction';
import Drawer2 from '../../components/Drawer';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240;


export default function HomeScreen({match}) {
    const classes = useStyles();
   
  const keyword = match.params.keyword
const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  
const category = useSelector(state => state.category)
const {categories}=category

if(categories.length<=0){

  
}


const [open, setOpen] = useState(false)

useEffect(() => {
  //categories.forEach((c)=>{return dispatch({type:"SELECTCATEGORY",payload:c._id})})
  dispatch({type:"INITSELECTCATEGORY",payload:categories})
}, [categories])

useEffect(() => {
  dispatch(listProducts(keyword, pageNumber))

  
}, [dispatch, keyword, pageNumber])

const filter = useSelector(state => state.filter)
const {sort,price}=filter
 const priceproduct=error?[]:products.filter((p)=>{return p.price<=price})
const selectedcat=filter.categories

const filteredproduct=error ? []:priceproduct.filter((p)=>selectedcat.includes(p.category._id)).sort((a,b)=>{return new Date(b.createdAt)-new Date(a.createdAt)})
// const fproducts= error? []:  
if(sort==='Prcie low to high'){
  filteredproduct.sort((a,b)=>{return a.price-b.price})
  
}
else if(sort==='Prcie high to low'){
  filteredproduct.sort((a,b)=>{return b.price-a.price})
}
else if(sort ==='name A to Z'){
  filteredproduct.sort(function(a,b){
      return a.name.localeCompare(b.name);
  })
}
else if(sort ==='Heighest Rating'){
  filteredproduct.sort((a,b)=>{
      return b.rating-a.rating;
  })
};

  return (
    <div className={classes.root}>
       <div className={classes.button}>

       </div>
       <CssBaseline />
             <Drawer2 />
                <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
       
      >
      <div className={classes.drawerHeader} />
        <>
      <Meta />
   
      <h3 style={{"letter-spacing": "1px"}} >Best Marketplace For Farmers In Ahemadabad</h3>
      <h6 style={{"font-weight": "normal","letter-spacing": "1px"}} >sell spices, Fruits, vegitables, Fertilizers, Agro, Chemicals And other agricultural Products</h6>
     
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (  
        <div >
          <Row>
            {filteredproduct.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
      </div>  
      )}
    </>
    </main>
    </div>
  );
}



  

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginLeft:80,
    },
    button:{
    marginLeft:'1.5rem',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginTop:'5rem',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      marginLeft:200,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
  
      }),
      marginLeft: -drawerWidth,
    },  
  }));
  