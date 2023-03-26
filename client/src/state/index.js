import { createSlice } from "@reduxjs/toolkit";

// === 大事のアヒルノート (急にReduxって出んのはむずいので) ===
// Redux has the idea that you shouldn't change the state (initialState) directly,
//   should prefer to replace the object instead of direct state modification
// The parameters in `reducers` are called === payloads ===
// Finally, set the `reducer` inside (main, the most index.js :-)) `index.js` file
// aka main.jsx (old filename)
//todo i dont get it

const initialState = {
    //state that will be stored in your global state; accessible throughout entire app removing the need
    //to pass states between components
    mode: "light",
    user: null,
    token: null,
    sets: [],

};

export const authSlice = createSlice({
    name: 'auth', //name of auth to represent auth workflow
    initialState,
    reducers:{ //can be thought of as func.s that modify the global state
        setMode: (state) => { //change lightmode -> darkmode
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setLogin: (state, action) => {
            state.user = action.payload.user; //wherein in the payload `user` is the param. (`..payload.user` のこと)
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = nulll;
            state.token = nulll;
        },
        setSets: (state, action) => {
            if (state.user){ //if user already exists
                state.user.sets = action.payload.sets
            } else {
                console.error("No such set")
            }
        },
        // todo dno if to keep this or the one above
        // setSets: (state,action) =>{
        //     state.sets = action.payload.sets;
        // },
        setSet: (state, action) => {
            const updatedSets = state.posts.map((set)=>{
                if (set._id === action.payload.set_id) return action.payload.set;
                return set;
            });
            state.sets = updatedSets;
        }
    }
})

export const { setMode, setLogin, setLogout, setFriends, setSets, setSet} = authSlice.actions;
export default authSlice.reducer;
