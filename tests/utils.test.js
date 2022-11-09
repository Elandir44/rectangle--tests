
import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle";

test('get Rectangle Perimeter', () => {
	
	expect (getRectanglePerimeter(2,5)).toEqual(14);
});

test('get Rectangle Area', () => {
	
	expect (getRectangleArea(2,5)).toEqual(10);
});

test('get Rectangle Info', () => {

	console.log = jest.fn();

	getRectangleInfo(2,5);
	
	expect ( console.log).toHaveBeenCalledWith(`The perimeter of a rectangle is 14 and the area is 10`);
});

