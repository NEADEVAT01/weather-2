export default class CSS
{
    

    static async timeOfDay() {
        const time = new Date()
        console.log(time.getHours() >= 0 )
        if (time.getHours() >= 0 && time.getHours() <= 3) {                    
            return 'night' 
        } 
        if (time.getHours() >= 4 && time.getHours() <= 11) {            
            return 'morning' 
        } 
        if (time.getHours() >= 12 && time.getHours() <= 16){
            return 'day' 
        } 
        if (time.getHours() >= 17 && time.getHours() <= 23){
            return 'evening' 
        } 
      }

    static async getAppBg(rootClass) {
        
        const appBg = ['morning-bg', 'day-bg', 'evening-bg', 'night-bg']
        const mainBg = ['main_bg_morning', 'main_bg_day', 'main_bg_evening', 'main_bg_night']
        if (await this.timeOfDay() === 'morning') {            
            if(rootClass === 'App') return rootClass+" "+appBg[0]
            if(rootClass === 'main') return rootClass+" "+mainBg[0]
        }
        if (await this.timeOfDay() === 'day') {            
            if(rootClass === 'App') return rootClass+" "+appBg[1]
            if(rootClass === 'main') return rootClass+" "+mainBg[1]
        }
        if (await this.timeOfDay() === 'evening') {            
            if(rootClass === 'App') return rootClass+" "+appBg[2]
            if(rootClass === 'main') return rootClass+" "+mainBg[2]
        }
        if (await this.timeOfDay() === 'night') {            
            if(rootClass === 'App') return rootClass+" "+appBg[3]
            if(rootClass === 'main') return rootClass+" "+mainBg[3]
        }
    }
}