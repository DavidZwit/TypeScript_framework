/*
* Here all the enums get stored
*/

enum ObjectTypes {
    Empty,
    Light,
    Shape,
    UI,
    Camera,
    Grid
}

enum ShapeTypes {
    none,
    square,
    circle,
}

enum drawLayers {
    background,
    main,
    ui
}

/*
*The functions objects will extend from to be drawName
*/
class DrawFunctions {
    static circle () : (ctx, trans, pen) => {} {

        return (ctx, trans : Transform, pen : Pencile) => {

            ctx.fillStyle = pen.color.toString;
            ctx.beginPath();
            ctx.arc(trans.drawPosition.x, trans.drawPosition.y,
                    trans.drawSize.x, 0, 2 * Math.PI);

            if (pen.doFill == true)
                ctx.fill();

            if (pen.doStroke == true)
                ctx.stroke();

            return 0;
        }
    }

    static square () : (ctx, trans, pen) => {} {

        return (ctx, trans : Transform, pen : Pencile) => {

            ctx.fillStyle = pen.color.toString;
            ctx.beginPath();
            ctx.rect( trans.drawPosition.x, trans.drawPosition.y,
                        trans.drawSize.x, trans.drawSize.y
            );

            if (pen.doFill == true)
                ctx.fill();

            if (pen.doStroke == true)
                ctx.stroke();

            return 0;
        };

    }


    static htmlObject () : (ctx,trans, pen) => {} {
        return (ctx, trans : Transform, pen : Pencile) => {

          let htmlElement  = (trans.gameobject as UI).element;
          htmlElement.style.left = trans.drawPosition.x + "px";
          htmlElement.style.top = trans.drawPosition.y + "px";

          if (pen.doFill == true)
            htmlElement.style.visibility = "shown";
            else htmlElement.style.visibility = "hidden";

            return 0;
        }

      }
  }
