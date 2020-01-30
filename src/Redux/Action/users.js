import { usersCon, deleteCon, modalCon, drawCon } from "../Const/user";

// modal visible

export function modalShow({ visible, text, action, id }) {
  return {
    type: modalCon.visible,
    payload: {
      visible,
      text,
      action,
      id
    }
  };
}

// draw visible

export function drawShow(visible,id){
  return{
    type:drawCon.visible,
    payload:{
      id,
      visible
    }
  }
}

// read all data
const reqLoadFunc = () => {
  return {
    type: usersCon.request,
    payload: true
  };
};

const recLoadFunc = data => {

  return {
    type: usersCon.receive,
    payload: [...data]
  };
};

const errLoadFunc = () => {
  return {
    type: usersCon.err,
    paylaod: true
  };
};

// delete all data

const reqDeleteFunc = id => {
  return {
    type: deleteCon.request,
    payload: id
  };
};

const errDeleteFunc = () => {
  return {
    type: deleteCon.receive,
    payload: true
  };
};

export { reqLoadFunc, recLoadFunc, errLoadFunc, reqDeleteFunc, errDeleteFunc };