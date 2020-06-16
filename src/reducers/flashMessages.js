import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants'
import shortid from 'shortid'
import findIndex from 'lodash/findIndex'

 const flashMessages = (state=[],action) => {
   switch(action.type){
     case ADD_FLASH_MESSAGE:
       return [
        //  通过解构原数组后添加元素的方式返回新数组
         ...state,
         {
           id:shortid.generate(),
           type:action.message.type,
           text:action.message.text
         }
       ]
       case DELETE_FLASH_MESSAGE:
         const index = findIndex(state,{id:action.id})
         if(index>=0){
          //  删除下标为index的数组元素
           return [
             ...state.slice(0,index),
             ...state.slice(index+1)
           ]
         }
         return state
       default:
         return state
   }
 }

 export default flashMessages