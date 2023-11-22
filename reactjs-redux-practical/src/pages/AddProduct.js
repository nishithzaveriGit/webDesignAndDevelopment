import React, { useEffect, useRef, useState} from 'react';
import { useLocation } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductAction, UpdateProductAction } from '../actions/ProductActions';


const AddProduct = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector((state) => state.products)

  const [isFormValidated, setFormValidated] = useState(true);
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [discountSellPrice, setDiscountSellPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [costPrice, setCostPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [discountTake, setDiscountTake] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [product, setProduct] = useState([]);

  const productIdRef = useRef(0)

  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    description: "",
    expiryDt: expiryDate,
    costPrice: costPrice,
    sellPrice: sellPrice,
    discount: discountTake,
    discountSellPrice: discountSellPrice,
    finalPrice: finalPrice,
  });

  let productsArr = [];

  const onChangeHandler = (event) => {
    try{
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    } catch(err){
      console.log('ERROR :: onChangeHandler()', err);
    }
  }

  const onSubmitHandler = (event) => {
    try{
      event.preventDefault()
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setFormValidated(false)
        return
      }
      validateForm();
      const modifiedFormData = {
        ...formData,
        discountSellPrice,
        expiryDt:formatDateFn(expiryDate),
        finalPrice
      }
      
      if(location && location?.state && location?.state?.isEdit){
        dispatch(UpdateProductAction(modifiedFormData));
      } else{
        productIdRef.current += 1;
  
        if(product && product.length === 0){
          productsArr.push({
            id:productIdRef.current,
            ...modifiedFormData
          })
        } else {
          const addIdInModifiedData = {id:productIdRef.current, ...modifiedFormData}
          productsArr = [addIdInModifiedData, ...product]
        }
        dispatch(AddProductAction(productsArr));
        const storedData = JSON.parse(localStorage.getItem('products'));
        if(storedData) setProduct(productsArr)
      }
    }catch(err){
      console.log('ERROR :: onSubmitHandler()', err);
    }
  }

  const validateForm = () => {
    try{
      const { productName, productCategory, description, costPrice, sellPrice, discount  } = formData;

      if (!productName || !productCategory || !description || !costPrice || !sellPrice || !discount) {
        setErrorMsg(true)
      } else{
        setErrorMsg(false)
        console.log('checkName')
      }
    }catch(err){
      console.log('ERROR :: validateForm()', err);
    }
  }

  const formatDateFn = (date) => {
    const selectedDate = new Date(date)
    return selectedDate.getDate() + "/"+ parseInt(selectedDate.getMonth()+1) +"/"+ selectedDate.getFullYear();

} 

  useEffect(() =>{
    const regexNumbersOnly = /^[0-9\b]+$/;  
    
    if(formData && formData.costPrice && !regexNumbersOnly.test(formData.costPrice)){
      setCostPrice('')
    } else if(formData && formData.sellPrice && !regexNumbersOnly.test(formData.sellPrice)){
      setSellPrice('');
    } else if(formData && formData.discount && !regexNumbersOnly.test(formData.discount)){
      setDiscountTake('');
    } else {
      setSellPrice(formData.sellPrice);
      setCostPrice(formData.costPrice);
      setDiscountTake(formData.discount);
      const afterDiscount = formData.sellPrice - (formData.sellPrice * formData.discount / 100);
      const finalAmount = (formData.sellPrice - (formData.sellPrice * (formData.discount/100))).toFixed(2);
      setDiscountSellPrice(afterDiscount)
      setFinalPrice(finalAmount)
    }
  }, [formData, dispatch, products])

  useEffect(() =>{
    if(location !== null && location?.state){
      const { selectedRow } = location?.state;
      if(selectedRow) setFormData(selectedRow[0])
    }
    
  }, [location])

  return (
    <div className="container-sm">
    <form className={`row mt-3 ${!isFormValidated?'was-validated':''}`} onSubmit={onSubmitHandler} noValidate >
        <div className="row mb-3 form-group">
          <label htmlFor="productName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
          <input type="text" className={`form-control ${errorMsg?'is-invalid':''} `} name="productName" onChange={onChangeHandler} value={formData.productName} required />
          <div className="invalid-feedback">
            Product name is required {errorMsg}
          </div>
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="productCategory" className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-10">
          <select className={`form-select ${errorMsg?'is-invalid':''}`} name="productCategory" onChange={onChangeHandler} value={formData.productCategory} required>
            <option value="">--Select Category--</option>
            <option value="TV">TV</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Owen">Owen</option>
          </select>
          <div className="invalid-feedback">
           Product category is required
          </div>
          </div>
          
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
          <textarea rows={3} cols={3} className={`form-control ${errorMsg?'is-invalid':''} `} name="description" onChange={onChangeHandler} value={formData.description} required />
          <div className="invalid-feedback">
          Description is required
          </div>
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="expiryDt" className="col-sm-2 col-form-label">Expiry Date</label>
          <div className="col-sm-10">
          <DatePicker
            showIcon
            selected={expiryDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setExpiryDate(new Date(date))}
          />
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="costPrice" className="col-sm-2 col-form-label">Cost Price</label>
          <div className="col-sm-10">
          <input type="text" className={`form-control ${errorMsg?'is-invalid':''} `} name="costPrice" pattern="^[0-9\b]+$" onChange={onChangeHandler }  value={costPrice} required />
          <div className="invalid-feedback">
            Cost Price is required. Only number value allowed
          </div>
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="sellPrice" className="col-sm-2 col-form-label">Sell Price</label>
          <div className="col-sm-10">
          <input type="text" className={`form-control ${errorMsg?'is-invalid':''} `} name="sellPrice" onChange={onChangeHandler} value={sellPrice} required />
          <div className="invalid-feedback">
          Sell Price is required. Only number value allowed
          </div>
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="discount" className="col-sm-2 col-form-label">Discount%</label>
          <div className="col-sm-10">
          <input type="text" className={`form-control ${errorMsg?'is-invalid':''} `} name="discount" onChange={onChangeHandler} value={discountTake} required />
          <div className="invalid-feedback">
            Discount is required. Only number value allowed
          </div>
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="discountSellPrice" className="col-sm-2 col-form-label">Discounted Sell Price</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="discountSellPrice" value={discountSellPrice} readOnly />
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="finalPrice" className="col-sm-2 col-form-label">final Price</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="finalPrice" value={finalPrice} readOnly />
          </div>
        </div>
        <div className="row mb-3 form-group">
          <label htmlFor="finalPrice" className="col-sm-2 col-form-label">&nbsp;</label>
          <div className="col-sm-10">
          <button className="btn btn-primary" type="submit" >
            {
              (location === null)
              ? 'Submit1233'
              : (location !== null && location?.state && location?.state?.isEdit)
              ? 'Update'
              : 'Submit'
            }</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProduct