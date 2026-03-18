class User{

    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password, active){
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = active
    }

    get id(){
        return this.#id = this.#id
    }
}

