export class Storage {


    
    set(name:string, value:string) {
        return localStorage.setItem(name,value)
    }

    get(name:string) {
        return localStorage.getItem(name)
    }
}
