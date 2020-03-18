import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            FixNumber:0
        };
    }

    render(){
        const {number,FixNumber} = this.state;
        const ClickBtn = ()=>{
            this.setState({number:number+1},()=>{
                console.log(this.state);
            }) 
        }
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {FixNumber}</h2>
                <button onClick = {ClickBtn} > 
                    +1
                </button>
            </div>
        )
    }

}

export default Counter;