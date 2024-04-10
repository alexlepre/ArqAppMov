import BancoModel from "../models/Banco";
  
export default async function fetchBanco(nome: string): Promise<BancoModel[] | undefined> {
     try{
        let result: BancoModel[] = [];
        const response = await fetch(`http://10.0.2.2:5189/api/Bank/name/${nome}`);
        const data = await response.json();
 
        if (!data.erro) {
            return data;
        } else {
            return undefined
        }
    } catch(error: any) {
        console.error('Error fetching data:', error);
    }
}

 
 