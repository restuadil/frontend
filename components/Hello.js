const Hello = (props) => {
    console.log(props);

//melakukan destructing pada props
const { name } = props;
//di dalam return jsx
    return (
        <div className="hello">
            <h2>Hello react</h2>
            <p>Saya {name} - Frontend Engineer</p>         
        </div>
    );
};

export default Hello ;