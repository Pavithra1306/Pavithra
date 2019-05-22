import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow,configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
	adapter : new Adapter()
});

jest.mock('./services/FetchData')

const setUp=()=>{
	const component=shallow(<App/>);	
	return component;
}

describe('App Component Test',()=>{
	let component;
	beforeEach(()=>{
		component = setUp();
	})
	
	it('should return 1',()=>{
		const wrapper=component.find('.App');
		expect(wrapper.length).toBe(1);
	});
	
	it('should find header',()=>{
		const wrapper=component.find('Header');
		console.log("heloooo");
		expect(wrapper.length).toBe(1);
		
	})
})

describe('My component', () => {
   it('clicks it', () => {
    const app = shallow(<App />)
    const instance = app.instance()
    const spy = jest.spyOn(instance, 'countFun')

    instance.forceUpdate();    

    const p = app.find('.count')
    p.simulate('click')
    expect(spy).toHaveBeenCalled()
 })
 
	it('asynchronous mock test',()=>{
		const fakeData = {userId: 1, id: 1, title: "My title", completed: false};
		const app=shallow(<App/>);
		const p = app.find('.count')
		//p.simulate('click')
		//app.update();
		const data=app.instance().countFun();
		console.log("++",data)
		//	expect(data).toEqual(fakeData);
		
		
	})
})



