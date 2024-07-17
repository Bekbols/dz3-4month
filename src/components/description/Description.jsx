import classes from "./description.module.css";

function Description({data}) {
    return (
        <div>
            <h1 className={classes.title}>{data.title}</h1>
            <p className={classes.subtitle}>{data.description}</p>
        </div>
    );
}

export default Description