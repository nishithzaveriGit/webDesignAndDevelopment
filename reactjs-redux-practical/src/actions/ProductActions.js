export const AddProductAction =(data)=>{
    console.warn("action",data)
    return {
        type:'ADD_PRODUCT',
        payload:data
    }
}

export const UpdateProductAction =(data)=>{
    console.warn("action update",data)
    return {
        type:'UPDATE_PRODUCT',
        payload:data
    }
}

export const RemoveProductAction =(data)=>{
    console.warn("action remove",data)
    return {
        type:'REMOVE_PRODUCT',
        payload:data
    }
}

export const RemoveAllProductAction =(data)=>{
    console.warn("action removeAll",data)
    localStorage.removeItem('products');
    return {
        type:'REMOVE_ALL_PRODUCT',
        payload:data
    }
}
// export const AddProductAction = (product) => (dispatch, getState) => {
//     const {Product: {products}} = getState();
//     // const products = getState();

    
//     const hasProduct = products.find((p) => p?.productName === product?.productName);
//     console.log('AddProductAction', hasProduct, product, products);
//     if(!hasProduct && product && Object.keys(product).length > 0){
//         const tmpArr = [];
//         tmpArr.push(product);
//         console.log('TEMPARR', tmpArr);

//         dispatch({
//             type: 'ADD_PRODUCT',
//             payload: [...products]
//         })
//     }
// }