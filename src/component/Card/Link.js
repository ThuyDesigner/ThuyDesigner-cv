import classNames from "classnames";

const Link =({children, addClass="", href=""}) =>{
    return(
        <div><a href={href} className={classNames("card-link",addClass)}>{children}</a></div>
    )
}
export default Link;