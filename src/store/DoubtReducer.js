const Reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DOUBTS':
            return {
                ...state,
                doubts: action.data.doubts
            };
    }
}

export default Reducer;