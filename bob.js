class BOB
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.4

			
			}
			
		this.x=x;
		this.y=y;
		this.r=35
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
      
	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(0);
			fill(255,0,255)
			ellipse(0,10,this.r, this.r);
			pop()
			
	}

}