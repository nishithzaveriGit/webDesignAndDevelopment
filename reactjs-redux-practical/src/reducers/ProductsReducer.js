const initialState = {
    products: []
}


const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            console.log('ADD_PRODUCT', action.payload);
            localStorage.setItem('products', JSON.stringify(action.payload));
            return {
                ...state,
                products: action.payload
            }
            case 'UPDATE_PRODUCT':
                console.log('UPDATE_PRODUCT', action.payload);
                const storedData = JSON.parse(localStorage.getItem('products'));
                let filteredStoredArr = []
                if(storedData){
                    
                    console.log('UPDATE_PRODUCT', storedData);
                    filteredStoredArr = storedData.filter((obj) => {
                        console.log('UPDATE_PRODUCT 11111', obj, action.payload);
                        if(obj.id !== action.payload?.id) {
                            console.log('UPDATE_PRODUCT 22222', obj.id);
                            return obj;
                        }
                        return null;
                    });

                    filteredStoredArr.push({
                        id:action.payload?.id,
                        ...action.payload
                    });
                    console.log('UPDATE_PRODUCT 22222', filteredStoredArr, storedData);
                    localStorage.removeItem('products');
                    localStorage.setItem('products', JSON.stringify(filteredStoredArr));
                }
            return {
                ...state,
                products: filteredStoredArr
            };
        case 'REMOVE_PRODUCT':
            console.log('REMOVE_PRODUCT', action.payload);
            const storageData = JSON.parse(localStorage.getItem('products'));
                let filteredStorageDataArr = []
                if(storageData){
                    
                    console.log('REMOVE_PRODUCT 1111', storageData);
                    filteredStorageDataArr = storageData.filter((obj) => obj.id !== action.payload?.id);
                    console.log('REMOVE_PRODUCT 22222', filteredStorageDataArr, storageData);
                    localStorage.removeItem('products');
                    localStorage.setItem('products', JSON.stringify(filteredStorageDataArr));
                }
                return {
                    ...state,
                    products: filteredStorageDataArr
                };
        default:
            return state
    }
}

export default ProductReducer;