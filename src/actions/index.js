import {ADD_ARTICLE} from "../constants/ActionTypes"

export function addArticle(payload){
    console.log("Payload");
    console.log(payload);
    return { type: "ADD_ARTICLE" , payload}
}