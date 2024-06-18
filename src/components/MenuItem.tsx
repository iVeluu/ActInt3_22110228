import type { MenuItem } from "../types";
import type { OrderActions } from "../reducers/order-reducer";
import { Dispatch } from "react";

type MenuItemProps = {
     item: MenuItem;
     dispatch: Dispatch<OrderActions>
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
     return (
          <button 
               className="flex justify-between border-2 border-teal-600 p-3 w-full hover:bg-teal-200 rounded-lg"
               onClick={() => dispatch({type: 'add-item', payload: {item}})}
          >
               <p>{item.name}</p>
               <p className=" font-black">{item.price}</p>
          </button>
     );
}
