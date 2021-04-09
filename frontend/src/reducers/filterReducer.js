/*
 *
 * Category reducer
 *
 */

  
  const initialState = {
    categories: [],
   products:[],
    price:50,
   sort:'',
   modalopen:true
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INITSELECTCATEGORY":    
      
      return{ ...state ,categories:action.payload.map((c)=>{return c._id})}

      case "SELECTCATEGORY":
       
     let categories=JSON.parse(JSON.stringify(state.categories));
   const include=categories.find((e)=>e===action.payload)
          if(include){
              categories=categories.filter((e)=>e!==action.payload)
            }else{
                categories.push(action.payload) 
           }
     
        return {
          ...state,
         categories:categories
        };
        
      case "SORTED":
        return {
          ...state,
          sort: action.payload,
        };

      case "PRICERANGE":
        return {
          ...state,
        price:action.payload
        };
      case "Toggle":
    return{
      ...state,
      modalopen:!state.modalopen
    }
      
      default:
        return state;
    }
  };
  
  export default filterReducer;
  