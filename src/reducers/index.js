import {ADD_ARTICLE} from '../constants/ActionTypes'

const initialState = {
    articles: []
};

function rootReducer (state = initialState,action){
    console.log("Keh");
    console.log(action);
   if(action.type === ADD_ARTICLE) {
       return Object.assign({} , state, {
           articles: state.articles.concat(action.payload)
       });
   }
   return state;
};

export default rootReducer;