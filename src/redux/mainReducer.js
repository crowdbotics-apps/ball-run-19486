import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth89539Reducer from '../features/EmailAuth89539/redux/reducers';
import CalendarView89538Reducer from '../features/CalendarView89538/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth89539: EmailAuth89539Reducer,
CalendarView89538: CalendarView89538Reducer,

});