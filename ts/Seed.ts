/**
*   The base class to make classes alive 
*/
class Seed {

    public EarlyUpdate : () => {};
    public Update : () => {};
    public LateUpdate : () => {};
    public Start : () => {};

    protected self : any;

    static seeds : [ Seed ];

    constructor (name : string) {
        this.EarlyUpdate = () => {return 0;}
        this.Update = () => {return 0;}
        this.LateUpdate = () => {return 0;}
        this.Start = () => {return 0;}
        

        this.self = this;

    }

    static addSeed (newSeed : Seed) {
        if (Seed.seeds == null) Seed.seeds = [new Seed('first')];
        Seed.seeds.push (newSeed);
        
        l_Update.addFunction(0, newSeed.EarlyUpdate, name + "_GameObjectgo");
        l_Update.addFunction(1, newSeed.Update, name + "_GameObject");
        l_Update.addFunction(2, newSeed.LateUpdate, name + "_GameObject");

        l_Start.addFunction(1, newSeed.Start, name + "_GameObject");

    }

}