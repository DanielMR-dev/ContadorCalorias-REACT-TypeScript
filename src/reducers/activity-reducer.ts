import { Activity } from "../types"

// Type que describe que lo que va a pasar en reducer
export type ActivityActions = 
    { type : 'save-activity', payload: { newActivity : Activity} }

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
    if(action.type === 'save-activity') {
        // Este código maneja la lógica para actualizar el State
        console.log('desde el type de save-activity')
    }

    return state
}