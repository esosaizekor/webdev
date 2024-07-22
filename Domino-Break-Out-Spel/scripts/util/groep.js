
export class Groep {

    #academiejaar;
    #lector;
    #groep;

    constructor(academiejaar,lector,groep)
    {
        this.#academiejaar = academiejaar;
        this.#lector = lector;
        this.#groep = groep;
    }

    set academiejaar(value)
    {
        this.#academiejaar = value;
    }

    get academiejaar()
    {
        return this.#academiejaar;
    }

    set lector(value)
    {
        this.#lector = value;
    }

    get lector()
    {
        return this.#lector;
    }

    set groep(value)
    {
        this.#groep = value;
    }

    get groep()
    {
        return this.#groep;
    }

    toJSON() {

        return {      
          academiejaar: this.#academiejaar,
          lector: this.#lector,
          groep : this.#groep
        };
    
      }

}