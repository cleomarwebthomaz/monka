export default function(props) {

    return (
        <div {...props}>
            <h1 className={props.position === 'center' ? 'text-center' : ''}>{props.title}</h1>
            {props.children}
        </div>
    );

}
