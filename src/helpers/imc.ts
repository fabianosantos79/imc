export type Level = {
    title: string,
    color: string,
    icon: string,
    imc: number[],
    yourIMC?: number
}

export const levels: Level[] = [
    {title: 'magreza', color:'#96a3ab', icon:'magreza', imc:[0, 18.5]},
    {title: 'normal', color:'#0ead69', icon:'normal', imc:[18.6, 24.9]},
    {title: 'sobrepeso', color:'#e2b039', icon:'sobrepeso', imc:[25, 30]},
    {title: 'obesidade', color:'#c3423f', icon:'obesidade', imc:[30.1, 99]}
]

export const calculateIMC = (height:number, weight:number) => {
    const imc = weight / (height * height)

    for(let i in levels) {
        if(imc > levels[i].imc[0] && imc < levels[i].imc[1]){
            levels[i].yourIMC = imc
            return levels[i];
        }
}
    return null
}