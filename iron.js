class Iron{
	constructor(x,y,)
	{

	var options =
	{
'restitution':0.8,
'friction' :3,
'density':30
	}
		this.body=Bodies.rectangle(x, y,25,25 ,options);
        this.width=25
        this.height=25
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0, 0, this.width, this.height);

			pop()
	}

}