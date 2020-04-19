
      import React from 'react';
      export default class Calc extends React.Component {
        constructor(props){
          super(props)
          this.state = { FineAmount: '', MinWage: '10.96', Hours: '' }
        }
      
      
        exe1(){
          console.log("FineAmount: ", this.state.FineAmount, " - MinWage: ", this.state.MinWage)
          this.setState({ Hours: parseInt(this.state.FineAmount) / parseInt(this.state.MinWage) })
          console.log(this.state)
        }
        exe2() {
      
          this.setState({ FineAmount: '', MinWage: '10.96', Hours: '' });
        }
      
        render() {
          return(
            <div className="mainContainer">
              Enter the Amount of fine:  <input type="text" className="inputStyle" value={this.state.FineAmount} onChange={ (eve) => { this.setState({ FineAmount: eve.target.value }) } }/>
              <br/><br/>
              Minimum wage:  <input type="text" className="inputStyle" value={this.state.MinWage} onChange={ (eve) => { this.setState({ MinWage: eve.target.value })} } />
              <br/><br/>
      
              <button onClick={()=>{this.exe1()}} >Hours to be worked</button>
              <br/><br/>
              <input type="text" className="outStyle" value={this.state.Hours} />
      
              <br/><br/>
              <button onClick={()=>{this.exe2()}} >Clear</button>
            </div>
          )
        }
      }
      
      
            
