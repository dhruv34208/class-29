class Link {
    constructor(bodyA, bodyB) {


        var lastLink = bodyA.body.bodies.length - 2;
        this.link = Constraint.create({
            bodyA: bodyA.body.bodies[lastLink],
            bodyB: bodyB,
            pointA: { x: 0, y: 0 },
            pointB: { x: 0, y: 0 },
            length: 1,
            stiffness: 0.01
        })

        World.add(world, this.link);



    }

}