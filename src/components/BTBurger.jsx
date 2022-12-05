import React, { Component } from 'react'
import { connect } from 'react-redux'
import './burger.css'

class BTBurger extends Component {

  renderBread = () => {
    let {burger} = this.props;
    let content = []
    for (let propBurger in burger) {
      let breadMid = [];
         for (let i = 0; i < burger[propBurger]; i++) {
          breadMid.push(<div key={i} className={propBurger}></div>);
         }
        content.push(breadMid);
      console.log(propBurger, burger[propBurger]);
    }
    return content;

    // return Object.entries(burger).map(([propsBurger, value], index) => {
    //   let breadMid = [];
    //   for (let i = 0 ; i < value ; i++){
    //     breadMid.push(<div key={i} className={propsBurger}></div>);
    //   }
    //   return breadMid;
    //  })
  }

  renderMenu = () => {
    // Lấy props từ redux về 
    let {menu, burger} = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
       return (
         <tr key={index}>
           <td>{propsMenu}</td>
           <td>
             <button className="btn btn-success" onClick={() => {this.props.addTopping(propsMenu, 1);}}>+</button>
             {burger[propsMenu]}
             <button className="btn btn-danger" onClick={() => {this.props.addTopping(propsMenu, -1);}}>-</button>
           </td>
           <td>{price}</td>
           <td>{burger[propsMenu] * price}</td>
         </tr>
       );
      })
  }

  render() {
    return (
      <div className="container">
        <div className="display-4 text-success">BTBurger</div>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Your burger</h3>
            <div className="breadTop"></div>
            {this.renderBread()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Choose topping</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Topping</th>
                  <th></th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan={2}></td>
                  <td>Bill</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTopping: (propBurger, quantity) => {
      // Tạo ra action  
      const action = {
        type: 'ADD',
        propBurger,
        quantity
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BTBurger);