import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {
  
    // Contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 1 ? // La actividad actual tiene el id #1 en su categoria?
        total + activity.calories : // Si la tiene la agrego al total
        total, 0), // Si NO la tiene, dejo el total como está
        [activities]
    )

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => 
        activity.category === 2 ? // La actividad actual tiene el id #2 en su categoria?
        total + activity.calories : // Si la tiene la agrego al total
        total, 0), // Si NO la tiene, dejo el total como está
        [activities]
    )

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text="Consumidas"
                />
                <CalorieDisplay
                    calories={caloriesBurned}
                    text="Quemadas"
                />
            </div>
            
        </>
    )
}
