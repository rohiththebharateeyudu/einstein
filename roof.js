class ROOF
{
	constructor(x,y)
	{

		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=200;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		

		
		World.add(world, this.bottomBody)
		
	

	}
	display()
	{
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
		    rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(0)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}