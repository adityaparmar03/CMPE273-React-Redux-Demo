import React, {Component} from 'react';


class GCS extends Component {
   
    constructor(props) {
        super(props);
        this.state = { orders : [{id:1,name:'burger',price:12,qty:0},
            {id:2,name:'pasta',price:32,qty:0},
            {id:3,name:'pizza',price:52,qty:0}],
            total:0
        };
      }
    total(){
        var q=0;
        this.state.orders.forEach(function(element) {
            q=q+element.price*element.qty;
        }, this);
        this.setState({total: q });
    }
   
    menu(list,index){
        return ( 
             <div class="rounded"><br/>
             <div className="row">
             <div className="col-sm-4" >{list.name}</div>
             <div className="col-sm-4" >${list.price}</div>
             <div className="col-sm-4" >
             <button type="button" onClick={()=>this.add(list.id)} className="btn btn-primary" key={ list.id }>Add</button>
             </div></div></div>
      )
    }
    add(i){
        console.log("added id is:"+i);
        var arr = this.state.orders;
        for (var index = 0; index < arr.length; index++) {
           if(arr[index].id === i )
           {
            arr[index].qty++;  
           }
            
        }
        this.setState({orders:arr})
    }
    remove(i){
        console.log("added id is:"+i);
        var arr = this.state.orders;
        for (var index = 0; index < arr.length; index++) {
           if(arr[index].id === i )
           {
            arr[index].qty--;  
           }
            
        }
        this.setState({orders:arr})
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
                <button type="button" className="btn btn-success" onClick={()=>this.remove(list.id)} key={ list.id }>Remove</button>
                </div></div>
         )
         }
     }
    render() {
        return (
            <div className="container-fluid">
            
            <div className="row">
              <div className="col-sm-6" >
              <div className="panel panel-primary">
                    <div className="panel-heading">Menu</div>
                    <div className="panel-body">
                    
                    {this.state.orders.map(this.menu,this)}
                    
                    </div>
                
                </div>
              </div>
              <div className="col-sm-6" >
              <div className="panel panel-success">
                    <div className="panel-heading">Order</div>
                    <div className="panel-body">
                        {this.state.orders.map(this.orders,this)}
                        
                    
                    </div>
                    <div className="panel-footer">
                     {this.total()}   Total: ${this.state.total}
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


export default GCS;