const solarflare = new LaserTurret("solarflare");

const solarflare.shootType = extend(meltdownLaser, {
    {
        var Color tmpColor = new Color();
        var colors = [Color.valueOf("e6c04555"), Color.valueOf("f7d95eaa"), Color.valueOf("ffec6e"), Color.white];
        var tscales = [1, 0.7, 0.5, 0.2];
        var strokes = [2, 1.5, 1, 0.3];
        var lenscales = [1, 1.12, 1.15, 1.17];
        var length = 560;
    }
});

solarflare.shootType.hitEffect = Fx.hitMeltdown;
solarflare.shootType.despawnEffect = Fx.none;
solarflare.shootType.damage = 1;
solarflare.shootType.hitSize = 4;
solarflare.shootType.lifetime = 16;
solarflare.shootType.drawSize = 420;
solarflare.shootType.pierce = true;
