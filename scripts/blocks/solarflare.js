const solarflare = new LaserTurret("solarflare");


solarflare.shootType = extend(BulletType, {
    Color tmpColor = new Color();
    colors = {Color.valueOf("e6c04555"), Color.valueOf("f7d95eaa"), Color.valueOf("ffec6e"), Color.white};
    tscales = {1, 0.7, 0.5, 0.2};
    strokes = {2, 1.5, 1, 0.3};
    lenscales = {1, 1.12, 1.15, 1.17};
    float length = 560;
    
    {
        hitEffect = Fx.hitMeltdown;
        despawnEffect = Fx.none;
        hitSize = 4;
        drawSize = 420;
        lifetime = 16;
        pierce = true;
    }
    
    public void update(Bullet b){
        if(b.timer.get(1, 5f)){
            Damage.collideLine(b, b.getTeam(), hitEffect, b.x, b.y, b.rot(), length, true);
        }
        Effects.shake(1f, 1f, b.x, b.y);
    }
    
    public void hit(Bullet b, float hitx, float hity){
        Effects.effect(hitEffect, colors[2], hitx, hity);
        if(Mathf.chance(0.4)){
            Fire.create(world.tileWorld(hitx + Mathf.range(5f), hity + Mathf.range(5f)));
        }
    }
    
    public void draw(Bullet b){
        float baseLen = (length) * b.fout();

        Lines.lineAngle(b.x, b.y, b.rot(), baseLen);
        for(int s = 0; s < colors.length; s++){
            Draw.color(tmpColor.set(colors[s]).mul(1f + Mathf.absin(Time.time(), 1f, 0.1f)));
            for(int i = 0; i < tscales.length; i++){
                Tmp.v1.trns(b.rot() + 180f, (lenscales[i] - 1f) * 35f);
                Lines.stroke((9f + Mathf.absin(Time.time(), 0.8f, 1.5f)) * b.fout() * strokes[s] * tscales[i]);
                Lines.lineAngle(b.x + Tmp.v1.x, b.y + Tmp.v1.y, b.rot(), baseLen * lenscales[i], CapStyle.none);
            }
        }
    Draw.reset();
    }
});

solarflare.shootType.damage = 2;