import axios from "axios";
import {AIP_KEY} from "../../../../config/config";

export const getHomePageNews = () =>{
    try {
        return `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
        
    } catch (error) {
        return 'error'
    }
}







