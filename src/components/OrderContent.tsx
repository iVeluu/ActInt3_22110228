import { formarCurrency } from "../helpers"
import { OrderItem } from "../types"
import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type OrderContentProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>
};


export default function OrderContent({ order, dispatch }: OrderContentProps) {



     return (
       <div>
         <h2 className="font-black text-4xl">Consumo</h2>

         <div className="space-y-3 mt-10">
           {order.map((item) => (
               <div 
                    key={item.id}
                    className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
               >
                    <div>
                         <p className="text-lg">
                         {item.name} - {formarCurrency(item.price)}
                         </p>
                         <p className="font-black">
                              Cantidad: {item.quantity} - {formarCurrency(item.price * item.quantity)}
                         </p>
                    </div>
                 <button 
                    className="bg-red-600 h-8 w-8 rounded-full text-white font-bold" 
                    onClick={() => dispatch({type: 'remove-item', payload:{id: item.id}})}
                 >
                    X
                 </button>
               </div>
             ))}
         </div>
       </div>
     );
}
