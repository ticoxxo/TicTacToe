import {ADD_ARTICLE , FOUND_BAD_WORD} from '../constants/ActionTypes'

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer (state = initialState,action){
   if(action.type === ADD_ARTICLE) {
    console.log(state.articles)
       return Object.assign({} , state, {
        
           articles: state.articles.concat(action.payload)
       });
   }
   if(action.type === FOUND_BAD_WORD){
     
      window.alert("BAD WORD PAO PAO: ")
   }
   if(action.type === "DATA_LOADED"){
       return Object.assign({},state,{
        remoteArticles:state.remoteArticles.concat(action.payload)
       })
   }
   
   return state;
};

export default rootReducer;