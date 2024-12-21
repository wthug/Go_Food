import React,{ createContext, useContext, useReducer} from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            console.log(action)
            return [...state,{id:action.id ,name:action.name , qty: parseInt(action.qty) , size:action.size , price:action.price , img:action.img}];
        case "DELETE":
            let arr=[...state];
            return arr.filter((item)=>(item.id!==action.id) || (item.size!==action.size)); 
        case "UPDATE":
            let Arr=[...state];
            const index=action.index;
            Arr[index]= {...Arr[index], qty: parseInt(action.qty)+Arr[index].qty,price:action.price+Arr[index].price};
            console.log(Arr[index]);
            return Arr;

        default:
            console.log("problem accured");
    }
    
}

export const CartProvider = ({children})=>{
    const [state,dispatch ] =useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart =()=>useContext(CartStateContext);
export const useDispatchCard = () => useContext(CartDispatchContext);

