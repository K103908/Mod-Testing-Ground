const solarflare = new LaserTurret("solarflare");

const solarflare.shootType = extendContent(meltdownLaser, "solar-beam", {
    {
        this.Color tmpColor = new Color();
        this.colors = [Color.valueOf("e6c04555"), Color.valueOf("f7d95eaa"), Color.valueOf("ffec6e"), Color.white];
        this.tscales = [1, 0.7, 0.5, 0.2];
        this.strokes = [2, 1.5, 1, 0.3];
        this.lenscales = [1, 1.12, 1.15, 1.17];
        this.length = 560;
    },
    
    {
        this.hitEffect = Fx.hitMeltdown;
        this.damage = 2;
        this.despawnEffect = Fx.none;
        this.hitSize = 4;
        this.drawSize = 420;
        this.lifetime = 16;
        this.pierce = true;
    }
});
