export function reducer(state, action) {
    //console.log(action.type)
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), work: action.payload, complete: false },
      ];
    case "DELETE_TODO":
      return state.filter((ele) => ele.id !== action.payload);
    case "UPDATE_TODO":
      return state.map((el) =>
        el.id === action.payload ? { ...el, complete: !el.complete } : el
      );

    default:
      return state;
  }
}


///  ONLY FOR UNDERSTANDING
//---------------------------
// export function reducer(state, action) {
//   console.log(action.type);
//   if (action.type === "ADD_TODO") {
//     return [
//       ...state,
//       { id: Date.now(), work: action.payload, complete: false },
//     ];
//   } else if (action.type === "UPDATE_TODO") {
//     return state.map((el) =>
//       el.id === action.payload ? { ...el, complete: !el.complete } : el
//     );
//   } else if (action.type === "DELETE_TODO") {
//     return state.filter((ele) => ele.id !== action.payload);
//   } else {
//     return state;
//   }
// }
