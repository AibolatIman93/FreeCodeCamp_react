class Increment_Decrement_Buttons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.Increment = this.Increment.bind(this);
    this.Reset = this.Reset.bind(this);
    this.Decrement = this.Decrement.bind(this);
  };
  
  Increment(){
    this.setState(state =>({
      count: state.count + 1
    }));
  }
  
  Reset(){
    this.setState(function(state){
      return {
        count: 0
      }
    });
  }
  
  Decrement(){
    this.setState(function(state){
      if(state.count>0){
         return{
        count: state.count-1
      }
         }
    })
  }
  
  
  render(){
    return(
        <div>
        <div className = "row">
          <div className = "col-md-4"></div>
          <div className="col-md-4">
          <button className = "btn btn-primary btn-lg m-2" onClick = {this.Increment}>Increment</button>
          <button className="btn btn-default btn-lg m-2" onClick = {this.Reset}>Reset</button>
           <button className = "btn btn-danger btn-lg m-2" onClick = {this.Decrement}>Decrement</button>
           <h4>Counting: <span className="text-warning">{this.state.count}</span></h4>
          </div>
          <div className = "col-md-4"></div>
        </div>
        </div>
    );
  }
  
}

ReactDOM.render(< Increment_Decrement_Buttons/>, document.getElementById("root"));
