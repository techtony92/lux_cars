import { useEffect, forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import ScrollSmoother from "gsap/ScrollSmoother";
import GSDevTools from "gsap/GSDevTools";
import { useGSAP } from "@gsap/react";
import { gsapEnvironmentSettled } from "@/app/animation/landing";

const RegisterComponent = forwardRef<HTMLElement, {}>(({}, ref) => {
    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger,SplitText, ScrollSmoother, GSDevTools, useGSAP);
        gsapEnvironmentSettled(ref)
    },[ref])
    return (<></>)
})


RegisterComponent.displayName = "RegisterComponent";
export default RegisterComponent;