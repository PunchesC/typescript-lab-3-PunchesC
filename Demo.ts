//Shape (abstract)
export abstract class Shape{
  constructor(public color:string="black"){}
  abstract getArea(): number;
 
  

}

//Create Triangle(base,height)
export class Triangle extends Shape{
  constructor(public base:number,public height:number, color: string = "black"){
    super(color); 
  }
 getArea():number{
  return this.base*this.height/2;
 } 

 
}

//Create Circle(radius)
export class Circle extends Shape{
  constructor(public radius:number, color: string = "black"){
    super(color);
  }
  getArea():number{
    // return Math.PI * this.radius*this.radius;
    return Math.PI * this.radius **2
   }   
}
//Create Square (side)
export class Square extends Shape{
  constructor(public side:number, color: string = "black"){
    super(color);
  }
  getArea():number{
    return this.side * this.side;
  }

}

let shapes: Shape[]=[];
shapes.push(new Triangle(4,5,"pink") );
shapes.push(new Circle(3));
shapes.push(new Square(3));
shapes.push(new Triangle(20,3,"pink") );
shapes.push(new Circle(4, "orange"));
shapes.push(new Square(2, "green"));

// console.log(shapes);
let sum=0
for(let area of shapes){
  // console.log(area.getArea());
  sum += area.getArea();
}
// console.log("Sum: "+ sum);

//Average
// console.log("average: "+sum/shapes.length);

//Largest area/find smallest
let largest:Shape = shapes[0];


for (let largestArea of shapes){
  if (largestArea.getArea() > largest.getArea()){
    largest = largestArea;
  }

}
// console.log(largest);

//Sort by area
shapes.sort((shapeA, shapeB)=>{
  if(shapeA.getArea()<shapeB.getArea()){
    return 1;
  }else if (shapeA.getArea()===shapeB.getArea()){
    return 0;
  }else {
    return -1;
  }
});
// console.log(shapes);


//find all the pink

//with filter
let pinks =shapes.filter(pink => pink.color ==="pink");
// console.log(pinks);

//without filter
// for (let pink of shapes){
//   if(pink.color==="pink"){
//     console.log(pink);
//   }
// }


//find all the squares
let squares =shapes.filter(sq => sq instanceof Square);
// console.log(squares);

//find all that are larger than x 
//

