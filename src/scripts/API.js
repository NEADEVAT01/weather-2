import axios from "axios";

export default class API
{
    static async GetData(url) {
        if(url) {
            const response = await axios.get(url)                              
            return response.data
        } else return 'error'     
        
    }
    static async filterData(allowed_keys, data) {
        if (allowed_keys || data) {
            const filtered = Object.keys(data)
            .filter(key => allowed_keys.includes(key))
            .reduce((obj, key) => {
              obj[key] = data[key];
              return obj;
            }, {});
            return filtered
        } else return 'error'
        
    }    
}