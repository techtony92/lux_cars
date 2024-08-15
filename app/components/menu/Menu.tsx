import {useState} from "react";
import MenuItem from "@/app/components/menu/MenuItem"
type MenuContent = {
    items:Array<string>;

}

export function Menu({items}:MenuContent){
    const [open, setOpened] = useState(false);
    return(
        <ul id="menu" onClick={event => setOpened(!open)} className={`${!open ? 'collapsed':'expanded'} `}>
            {items.map(item => (<MenuItem key={item} itemLabel={item} />))}
        </ul>
    )
}