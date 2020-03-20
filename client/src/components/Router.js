import React, {Component} from 'react';
import axios from 'axios';


class Router extends Component{
    state =[
        {
            name:'Notebook',
            price: 12,
            userId : '5e66d5a53638480ba1fb9b55'
        },
        {
            name:'book',
            price: 12,
            userId : '5e66d5a53638480ba1fb9b55'

        }


    
]
    componentDidMount(){
        this.allProducts();
        this.deleteProduct();
        this.addProduct();

    }
    allProducts = () =>{
        console.log('hello')
        console.log('getProducts function is called')
        axios.get(`http://192.168.33.10:5000/allProducts`)
        .then(res =>{
            console.log(res.data);
        })
    } 

    deleteProduct = () => {
        console.log('deleteProduct function is called')
        axios.delete(`http://192.168.33.10:5000/deleteProduct/5e66d5a53638480ba1fb9b55`)
        .then(res =>{
            console.log('deleted');
        });
    }
    addProduct = () => {
        console.log('addProduct function is called');
        const post = {
            name: this.state[0].name,
            price : this.state[0].price,
            userId : this.state[0].userId
        }
        axios.delete(`http://192.168.33.10:5000/addProduct`, post)
        .then(res =>{
            console.log('res.data');
        });
    }
    render(){
        return(<h1>Get request to database</h1>)
    }
}

export default Router;