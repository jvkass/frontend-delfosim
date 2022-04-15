import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
interface Chart {
    id:number;
    title:string;
}

type ChartInput = Pick<Chart,'title'>;

interface ChartsProviderProps {
    children:ReactNode;
}

interface ChartsContextData {
    charts: Chart[],
    createChart: (chart: ChartInput) => Promise<void>;
}

export const ChartsContext = createContext<ChartsContextData>(
    {} as ChartsContextData
);

export function ChartsProvider({children}:ChartsProviderProps){
    const [charts, setCharts] = useState<Chart[]>([]);

    useEffect(() => {
        api.get("charts")
            .then(response => setCharts(response.data.transactions))
  
    }, [])

    async function createChart(chartInput: ChartInput){
        const response = await api.post('/charts',{
            ...chartInput, createdAt: new Date(),
        })

        const {chart} = response.data;

        setCharts([
            ...charts,
            chart,
        ]);
    }

    return (
        <ChartsContext.Provider value={{charts,createChart}}>
            {children}
        </ChartsContext.Provider>
    );
}

export function useChart(){
    const context = useContext(ChartsContext);
 
    return context;
}