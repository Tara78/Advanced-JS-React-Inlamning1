import React, { Component } from 'react';

// class Button extends Component{
//     render(){
//         return(
//             <button onClick={this.handleClick.bind(this)} style={this.style} >Click Here</button>
//         )
//     }
// }

class Dice extends Component {
    style={
        fontStyle:'bold', 
        color: 'red', 
       radious: '20%',
       margin: '1rem', 
       marginTop:'2rem',
       backgroundColor:'green',
       width:'7rem', 
       height: '3rem', 
      }

    handleClick() {
      
        const randomNumberUser1 = Math.round(Math.random() * 5);
        const randomNumberComputer1 = Math.round(Math.random() * 5);

        const randomNumberUser2 = Math.round(Math.random() * 5);
        const randomNumberComputer2 = Math.round(Math.random() * 5);
        const randomNumberUser3 = Math.round(Math.random() * 5);
        const randomNumberComputer3 = Math.round(Math.random() * 5);


        const diceFirstRollUser1 = this.props.diceValueProp[randomNumberUser1];
        const diceFirstRollComputer1 = this.props.diceValueProp[randomNumberComputer1];

        const diceFirstRollUser2 = this.props.diceValueProp[randomNumberUser2];
        const diceFirstRollComputer2 = this.props.diceValueProp[randomNumberComputer2];

        const diceFirstRollUser3 = this.props.diceValueProp[randomNumberUser3];
        const diceFirstRollComputer3 = this.props.diceValueProp[randomNumberComputer3];


        const TotalUser = parseInt( diceFirstRollUser1 + diceFirstRollUser2 + diceFirstRollUser3)
        const TotalComputer = parseInt( diceFirstRollComputer1 + diceFirstRollComputer2 + diceFirstRollComputer3)


        this.props.getDiceProp(diceFirstRollUser1, diceFirstRollComputer1,diceFirstRollUser2, diceFirstRollComputer2,diceFirstRollUser3, diceFirstRollComputer3,TotalUser,TotalComputer)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)} style={this.style} >Click Here  </button>
            {/* <Button /> */}

            </div>
        );
    }
}

export default Dice;
