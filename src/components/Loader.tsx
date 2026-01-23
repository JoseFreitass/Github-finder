import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.spinner}></div>
            <p>Buscando usuário...</p>
        </div>
    );
}

export default Loader;
