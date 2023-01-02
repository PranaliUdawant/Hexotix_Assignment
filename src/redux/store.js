import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { UserReducer } from "./reducer/UserReducer"
import { RecipeReducer } from "./reducer/RecipeReducer"

const rootReducer = combineReducers({
    RegisterUser: UserReducer,
    AllRecipes: RecipeReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
export default store