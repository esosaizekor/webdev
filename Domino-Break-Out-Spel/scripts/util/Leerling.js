
export class Leerling {

    #naam;

    constructor(naam)
    {
        this.#naam = naam;
    }

    set naam(value)
    {
        this.#naam = value;
    }

    get naam()
    {
        return this.#naam;
    }

    toJSON() {

        return {      
          naam: this.#naam
        };
    
      }

}