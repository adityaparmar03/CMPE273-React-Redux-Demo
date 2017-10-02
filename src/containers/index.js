import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addItem} from '../action_creators/index';



class Index extends Component {
   
    menu(list,index){
        return ( 
             <div class="rounded"><br/>
             <div className="row">
             <div className="col-sm-4" >{list.name}</div>
             <div className="col-sm-4" >${list.price}</div>
             <div className="col-sm-4" >
             <button type="button" onClick={()=>this.props.addToOrder(list)} className="btn btn-primary">Add</button>
             </div></div></div>
      )
    }   

    render() {
        return (
            <div className="container-fluid">
             <div className="row">
              <div className="col-sm-6" >
                <div className="panel panel-primary">
                    <div className="panel-heading">Menu</div>
                    <div className="panel-body">
                    
                    {this.props.items.map(this.menu,this)}
                    
                    </div>
                
                </div>
              </div>
              <div className="col-sm-6" >
              <div className="panel panel-success">
                    <div className="panel-heading">Order</div>
                    <div className="panel-body">
                    {this.props.items.map(this.menu,this)}
                        
                    
                    </div>
                    <div className="panel-footer">
                    
                    </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}
function mapStateToProps(state){
   
    return{
       
        items : state.initialstate
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({addToOrder : addItem},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Index);