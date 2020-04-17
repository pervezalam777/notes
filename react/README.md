# React Notes


## react-context-with-memo
react-context-with-memo is a small demo application build for providing state and actions to inner component without passing it through hierarchically. This also take care of memoization of component which should not render based on required property change. 

### React API used
* React.createContext and useContext 
* useReducer
* React.Memo

## Custom hook fetching data
```javascript
const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const dataFetchReducer = (state, action) => {
    switch(action.type){
        case FETCH_INIT:
            return {...state, isLoading:true};
        case FETCH_SUCCESS:
            return {...state, isLoading:false, data:action.payload};
        case FETCH_FAILURE:
            return {...state, isLoading:false, isError:true};
        default:
            return state;
    }
}
const useDataApi = (initialUrl, initialData) => {
  
  const [url, setUrl] = useState(initialUrl);
  
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: FETCH_INIT });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: FETCH_SUCCESS, payload: result.data });
        }
      } catch (error) {
        //Log error to logging system.
        if (!didCancel) {
          dispatch({ type: FETCH_FAILURE });
        }
      }
    };

    fetchData();
    
    return () => {
      didCancel = true;
    };
    
  }, [url]);
  
  return [state, setUrl];
};
```