const initialState = {
  loading: false,
  items: [],
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'profile/load/start':
      return {
        ...state,
        loading: true
      }
    case 'profile/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export const loadProfile = (id) => {
    return (dispatch) => {
      dispatch({
        type: 'profile/load/start'
      });
      fetch('https://api.intocode.ru:8001/api/contacts')
        .then(res =>res.json())
        .then((json) => {
         dispatch({
           type: 'profile/load/success',
           payload: json
         })
        })
    }
}

// тут экшн креэйторы

// тут санки
