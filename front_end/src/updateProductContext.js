import { createContext, useState } from "react";


export const UpdateContext = createContext();

const UpdateProductContextProvider = (props) => {
   const [updateProductInfo, setUpdateProductInfo] = useState({
      product_name: "",
      quantity_in_stock: 0,
      quantity_sold: 0,
      unit_price: 0,
      revenue: 0,
      ProductId: ""
   });

   return (
      <UpdateContext.Provider value={[ updateProductInfo, setUpdateProductInfo ]}>
         {props.children}
      </UpdateContext.Provider>
   );
}
export default UpdateProductContextProvider;