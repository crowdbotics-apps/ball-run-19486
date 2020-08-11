import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth89539Saga from '../features/EmailAuth89539/redux/sagas';
import CalendarView89538Saga from '../features/CalendarView89538/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth89539Saga,
CalendarView89538Saga,
    
  ]);
}