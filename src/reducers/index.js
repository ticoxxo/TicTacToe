import {ADD_ARTICLE , FOUND_BAD_WORD} from '../constants/ActionTypes'

const initialState = {
    articles: []
};

function rootReducer (state = initialState,action){
   if(action.type === ADD_ARTICLE) {
       return Object.assign({} , state, {
           articles: state.articles.concat(action.payload)
       });
   }
   if(action.type === FOUND_BAD_WORD){
      return window.alert("BAD WORD PAO PAO")
   }
   return state;
};

export default rootReducer;