import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import GSDevTools from "gsap/GSDevTools";
import  ScrollSmoother  from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { ForwardedRef } from "react";

export function gsapEnvironmentSettled(componentRoot: ForwardedRef<HTMLElement>){

        const DomQuery = gsap.utils.selector(componentRoot);
        const subRoot = DomQuery("#smooth-content");
        console.log(subRoot);

}