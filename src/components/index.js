import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as myactions from '../action_creators/index';




class Index extends Component {
   
    menu(list,index){
        return ( 
             <div class="rounded"><br/>
             <div className="row">
             <div className="col-sm-4" >{list.name}</div>
             <div className="col-sm-4" >${list.price}</div>
             <div className="col-sm-4" >
             <button type="button" onClick={()=>this.props.Add(list)} className="btn btn-primary">Add</button>
             </div></div></div>
      )
    }   
    orders(list,index){
         
         if(list.qty === 0 ) 
        { return ( 
          
             <div className="row">
             </div>
          )
        }else {
          return ( 
                
                 <div className="row" class="rounded">
                 <div className="col-sm-4" >{list.name}</div>
                 <div className="col-sm-4" >${list.price}
                 <br/>Qty:{list.qty} </div>
                 <div className="col-sm-4" >
                 <button type="button" className="btn btn-success" onClick={()=>this.props.Remove(list)} key={ list.id }>Remove</button>
                 </div></div>
          )
          }
      }
      total(){
        var total=0;
            this.props.items.map((item,i)=>{
                total+=(item.qty*item.price);
                return total
            })
      return total;
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
                    {this.props.items.map(this.orders,this)}
                        
                    
                    </div>
                    <div className="panel-footer">
                     Total:  ${
                         
                        this.total()

                     }
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
       
        items : state.food
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators(myactions,dispatch)
  
    
}


export default connect(mapStateToProps,matchDispatchToProps)(Index);