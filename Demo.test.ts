import {Triangle} from './Demo'
import {Circle} from './Demo'
import {Square} from './Demo'

describe("Triangle Class",()=>{
  test("base and height are seet from constructor params",()=>{
    let triangle: Triangle = new Triangle(10,5);
    expect(triangle.base).toBe(10);
    expect(triangle.height).toBe(5);
  });

  test("testing  triangle getArea()",()=>{
    let triangle: Triangle = new Triangle(20,30);
  expect(triangle.getArea()).toBe(300);
  });

  test("testing getArea() circle",()=>{
    let circle: Circle = new Circle(5);
  expect(circle.radius).toBe(5);
  });

  test("testing getArea() circle",()=>{
    let circle: Circle = new Circle(10);
  expect(circle.getArea()).toBeCloseTo(314.16);
  });

  
  test("testing getArea() square",()=>{
    let square: Square = new Square(10);
  expect(square.side).toBe(10);
  });

  test("testing getArea() square",()=>{
    let square: Square = new Square(10);
  expect(square.getArea()).toBe(100);
  });

  test("testing getArea() square",()=>{
    let square: Square = new Square(5);
  expect(square.getArea()).toBe(25);
  });

});