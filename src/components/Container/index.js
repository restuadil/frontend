import style from "./style.module.css"

function Container ({ childern }) {
    return<div className={style.container}> {childern} </div>;
}

export default Container