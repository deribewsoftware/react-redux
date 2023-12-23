import {createSlice} from '@reduxjs/toolkit';

const cartSlice=createSlice({
  name: 'cart',
  initialState:{
itemslist:[],
totalPrice:0,
showCart:false,
totalQuantity:0,

  },

  reducers:{
    addCart(state,action){
      const newItem=action.payload;
      const isExinstinItem=state.itemslist.find((item )=>item.id===newItem.id);
      if(isExinstinItem){
        isExinstinItem.quantity++;
      }
      else{
        state.itemslist.push(newItem);
      }


    }
  }
});



export const cartActions=cartSlice.actions;
export default cartSlice;
