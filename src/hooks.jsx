import {useState, useRef} from  'react';


export default  function hooks() {
    var hooksref = useRef();

    const [hooks, setplayer] = useState("");
    function handleButtonClick() {
        setplayer(hooksref.current.value)
        hooksref.current.value="ddddwddwd"
    }
    return (
        <section id="player">
        <h2>welcome to {hooks ?? "user"}</h2> 
        <p>
            <input ref={{}} /></p></section>
    )
}
