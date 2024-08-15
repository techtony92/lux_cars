import Link from "next/link";

type MenuItem = {
    itemLabel:string;
    className?:string;
    url?:string;
}

function MenuItem({itemLabel, className, url}:MenuItem){
    return (
        <li className="menuItem">
            <Link href={"/" ?? url} className={className}>{itemLabel}</Link>
        </li>
    )
}


export default MenuItem;