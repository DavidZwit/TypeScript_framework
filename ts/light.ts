class Light extends GameObject {

    private intencity : number;

    constructor (name: string, intencity : number = 400) {
        super(ObjectTypes.Light, name);

        this.intencity = intencity;

        this.pencile.changeShape( (ctx, trans) => {

            
            var grd=ctx.createRadialGradient(trans.position.x, trans.position.y, 0, trans.position.x, trans.position.y, this.Intencity);
            grd.addColorStop(0, this.pencile.color.toString);
            grd.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle=grd;
            ctx.fillRect(0, 0,  GD.width, GD.height);

            ctx.fillStyle = GD.color.toString;
            
            return 0;
        });


    }

    get Intencity () : number {
        return this.intencity;
    }

    set Intencity (newIntencity : number) {

        this.transform.size.x = this.transform.size.y = newIntencity;
        this.intencity = newIntencity;

    }
}
