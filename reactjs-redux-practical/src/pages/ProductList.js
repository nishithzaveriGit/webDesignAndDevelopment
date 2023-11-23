import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
// import cellEditFactory from 'react-bootstrap-table2-editor';
// import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { RemoveProductAction, RemoveAllProductAction } from '../actions/ProductActions';

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ProductList = useSelector((state) => state.Product);

  const { products } = ProductList;

  const actionColumn = (cell, row, rowIndex, formatExtraData) => {
    return (
      <>
        <button className="btn btn-primary btn-sm me-2" onClick={() => editItem(row)}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => deleteItem(row)}>
          Delete
        </button>
      </>
    );
  };

  const columns = [
    {
      dataField: 'productName',
      text: 'product Name',
      sort: true,
      // filter:textFilter()
    },
    {
      dataField: 'productCategory',
      text: 'product Category',
      sort: true,
    },
    {
      dataField: 'description',
      text: 'Description',
      sort: true,
    },
    {
      dataField: 'expiryDt',
      text: 'Expiry Date',
      sort: true,
    },
    {
      dataField: 'costPrice',
      text: 'Cost Price',
    },
    {
      dataField: 'sellPrice',
      text: 'Sell Price',
      sort: true,
    },
    {
      dataField: 'discount',
      text: 'Discount',
      sort: true,
    },
    {
      dataField: 'discountSellPrice',
      text: 'discounted Sell Price',
      sort: true,
    },
    {
      dataField: 'finalPrice',
      text: 'Final Price',
      sort: true,
    },
    {
      dataField: '',
      text: 'Action',
      formatter: actionColumn,
      sort: true,
      editable: false,
    },
  ];

  const [productsArr, setProductsArr] = useState([]);
  const [showBtnRemoveAllData, setShowBtnRemoveAllData] = useState(false);
  const { SearchBar } = Search;
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      console.log('onSelect', row, isSelect, rowIndex, e);
    },
    onSelectAll: (rows, isSelected) => {
      console.log('onSelectAll', rows, isSelected);
      setShowBtnRemoveAllData(rows);
    },
  };

  const removeAllRows = () => {
    dispatch(RemoveAllProductAction([]));
    setProductsArr([]);
  };

  const editItem = (item) => {
    try {
      console.log('editItem', item);
      let tmpItemArr = [];
      tmpItemArr.push(item);
      navigate('/add-product', { state: { selectedRow: tmpItemArr, isEdit: true } });
    } catch (err) {
      console.log('ERROR :: editItem()', err);
    }
  };

  const deleteItem = async (item) => {
    try {
      dispatch(RemoveProductAction(item));
    } catch (err) {
      console.log('ERROR :: deleteItem()', err);
    }
  };

  useEffect(() => {
    // setProductsArr(products)
    const storedData = JSON.parse(localStorage.getItem('products'));
    if (storedData) setProductsArr(storedData);
  }, [products]);

  return (
    <div className="container-xxl" data-testid="product-1">
      <>
        <div className="tblGrid container-sm">
          {productsArr && productsArr.length === 0 ? (
            <div className="alert alert-info" role="alert">
              No data Found
            </div>
          ) : (
            <>
              <ToolkitProvider keyField="id" data={productsArr} columns={columns} search>
                {(props) => (
                  <div>
                    <SearchBar {...props.searchProps} srText="" />
                    {showBtnRemoveAllData && (
                      <button type="button" className="btn btn-danger" onClick={removeAllRows}>
                        Remove All
                      </button>
                    )}
                    <hr />
                    <BootstrapTable
                      {...props.baseProps}
                      hover
                      condensed
                      selectRow={selectRow}
                      defaultSortDirection="asc"
                      // cellEdit={cellEditFactory({
                      //   mode: 'click',
                      //   afterSaveCell: (oldValue, newValue, row, column) => {
                      //     // const matchObj = productsArr.filter((x) => {
                      //     //   return JSON.stringify(row) === JSON.stringify(x);
                      //     // })
                      //     // setProductsArr([...productsArr, modeifyArr])
                      //     console.log('afterSaveCell=====>', oldValue, newValue, row, productsArr);
                      //   },
                      // })}
                    />
                  </div>
                )}
              </ToolkitProvider>
              {/* <BootstrapTable 
                        keyField='id' 
                        data={ productsArr } 
                        columns={ columns }
                        hover
                        condensed
                        /> */}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default ProductList;
