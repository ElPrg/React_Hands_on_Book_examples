

// reducer

function counter(state, action)
{
//    1) console out
// counter_dispatcher ; state = undefined type = @@redux/INITc.t.3.t.a.o reducer.js:7
// ===mapStateToProps==== state === 0 Main.js:13
// ===mapDispatchToProps====
// При первом запуске и при создании объекта 
//2) При втором запуске такой вывод
// counter_dispatcher ; state = [object Object] type = increase reducer.js:13
// ===mapStateToProps==== state === 1


    console.log("counter_dispatcher ; state = " + state + " type = " + action.type);

    if (state === undefined) //Первый раз заходит сюда
    {
        return {count: 0};
    }

    var count = state.count;
    switch (action.type) 
    {
    case "increase":
    
        return {count: count + 1};
    case "decrease":
        return {count: count - 1};
    default:
        return state;
}
}
export default counter;