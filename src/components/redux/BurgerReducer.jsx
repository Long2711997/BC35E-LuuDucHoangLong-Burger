const burgerState = {
    burger: {salad: 1, cheese: 1, beef: 1},
    menu: {
        salad: 10,
        cheese: 20, 
        beef: 50
    },
    total: 80
}

export const BurgerReducer = (state = burgerState, action) => {
    switch(action.type){
        case 'ADD': {
            // console.log(action);
            let {propBurger, quantity} = action;
            if (quantity === -1 && state.burger[propBurger] < 1) {
                return {...state}
            }
            let burgerUpdate = {...state.burger}
            burgerUpdate[propBurger] += quantity;
            state.burger = burgerUpdate;
            state.total += quantity * state.menu[propBurger]

            return {...state}
        }
    }
    return {...state}
}