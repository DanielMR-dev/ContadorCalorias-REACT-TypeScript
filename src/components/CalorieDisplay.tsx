type CalorieDisplayPros = {
    calories: number, 
    text: string
}

export default function CalorieDisplay({calories, text} : CalorieDisplayPros) {
    return (
        <p className="text-white font-bold rounded-full grid gird-cols-1 gap-3 text-center">
            <span className="font-black text-6xl text-orange-50">{calories}</span>
            {text}
        </p>
    )
}
