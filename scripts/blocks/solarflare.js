//Large amounts of code copied from laser-interceptor.js from younggam/more-powerful-units. Once I know what I'm doing, I'll do stuff myself.
const solarflare = new LaserTurret("solarflare");

var tmpColor = new Color();
var colors = [Color.valueOf("e6c04555"), Color.valueOf("f7d95eaa"), Color.valueOf("ffec6e"), Color.white];
var tscales = [1, 0.7, 0.5, 0.2];
var strokes = [2, 1.5, 1, 0.3];
var lenscales = [1, 1.12, 1.15, 1.17];
var length = 560;

const solarflare.shootType = extend(BasicBulletType, {
  init(b){
    if (b == null) return;
    Damage.collideLine(b, b.getTeam(), Fx.hitMeltdown, b.x, b.y, b.rot(), length, true);
    //Look in damage.java for how this works, it's simular to lightning.
    Effects.shake(1, 1, b.x, b.y);
  },
  hit(b,hitx,hity){
    Effects.effect(Fx.hitMeltdown,colors[2],hitx,hity);

  },
  draw(b){
    baseLen = (length) * b.fout();

    Lines.lineAngle(b.x,b.y,b.rot(),baseLen);
    for(var s = 0; s < colors.length; s++){
      Draw.color(tmpColor.set(colors[s]).mul(1+Mathf.absin(Time.time(),1,0.1)));
      for(var i = 0; i < tscales.length; i++){
        Tmp.v1.trns(b.rot()+180,(lenscales[i]-1)*35);
        Lines.stroke((4+Mathf.absin(Time.time(),0.8,1.5))*b.fout()*strokes[s]*tscales[i]);
        Lines.lineAngle(b.x+Tmp.v1.x,b.y+Tmp.v1.y,b.rot(),baseLen*lenscales[i],CapStyle.none);
      }
    }
    Draw.reset();
  }
});

solarflare.shootType.hitEffect = Fx.hitMeltdown;
solarflare.shootType.despawnEffect = Fx.none;
solarflare.shootType.damage = 1;
solarflare.shootType.hitSize = 4;
solarflare.shootType.lifetime = 16;
solarflare.shootType.drawSize = 420;
solarflare.shootType.pierce = true;