class Stone{
	constructor(x,y)
	{

	var options =
	{
'restitution':0.8,
'friction' :0.9,
'density':12
	}
		this.body=Bodies.rectangle(x, y,30,30 ,options);
        this.width=30
        this.height=30
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
            rect(0, 0, this.width, this.height);

			pop()
	}

}