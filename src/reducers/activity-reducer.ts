import { Activity } from "../types"

// Type que describe que lo que va a pasar en reducer
export type ActivityActions = {

}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (
    state : ActivityState = initialState,
    action : ActivityActions
) => {
    
}