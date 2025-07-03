import { createContext, useState } from "react";


export const UpdateSupplierContext = createContext();

const UpdateSupplierContextProvider = (props) => {
   const [updateSupplierInfo, setUpdateSupplierInfo] = useState({
      id: "",
      name: "",
      company: "",
      email: "",
      phone: "",
   });

   return (
      <UpdateSupplierContext.Provider value={[ updateSupplierInfo, setUpdateSupplierInfo ]}>
         {props.children}
      </UpdateSupplierContext.Provider>
   );
}
export default UpdateSupplierContextProvider;