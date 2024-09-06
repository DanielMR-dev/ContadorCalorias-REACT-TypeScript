import { Activity } from "../types"

// Type que describe que lo que va a pasar en reducer
export type ActivityActions = 
    { type : 'save-activity', payload: { newActivity : Activity} } |
    { type : 'set-activeId', payload: { id : Activity['id']} } |
    { type : 'delete-activity', payload: { id : Activity['id']} } 

export  type ActivityState = {
    activities : Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState : ActivityState = {
    activities: localStorageActivities(),
    activeId: '' 
}

export const activityReducer = (
    state : ActivityState = initialState,
    action : ActivityActions
) => {
    if(action.type === 'save-activity') {
        // Este código maneja la lógica para actualizar el State
        let updatedActivitives : Activity[] = []
        if(state.activeId) {
            // Se itera en el estado y si es la misma actividad que está en activo retorna el action payload
            updatedActivitives = state.activities.map( 
                activity => activity.id === state.activeId ? // Si el elemento existe, se actualiza
                action.payload.newActivity : // Si es nuevo, se agrega
                activity
            )
        } else { 
            updatedActivitives = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state, // Se genera una copia del state actual
            activities : updatedActivitives,
            activeId: '' // Cada que se agregue una nueva actividad, se reinicia el activeId
        }
    }

    if(action.type === 'set-activeId') {
        return {
            ...state,// Se genera una copia del state actual
            activeId: action.payload.id // Setear el id activo usando el payload
        }
    }

    if(action.type === 'delete-activity') {
        return {
            ...state, // Se genera una copia del state actual
            activities: state.activities.filter(activity => activity.id !== action.payload.id) // Usando el método filter retorna los "id" de las actividades distintas a la actividad a eliminar
        }
    }

    return state
}