const initialState = {
    list: [
        {
            id: 1,
            name: 'Faculty of Math',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 3,
            name: 'Faculty of Physics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ],
    searchTerm: ''
}


export const facultiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'faculties/addFaculty':
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case 'faculties/deleteFaculty':
            return {
                ...state,
                list: state.list.filter( el => el.id !== action.payload)
            } 
            
        case 'faculties/setSearchTerm':
            return {
                ...state,
                searchTerm: action.payload
            }  
            
         default:
            return state   
    }
}