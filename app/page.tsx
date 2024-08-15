'use client'
import Image from "next/image";
import {useRef,} from "react";
import { Menu } from "@/app/components/menu/Menu";
import GridProvider from "./components/Grid/GridProvider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { gsapEnvironmentSettled } from "./animation/landing";
import RegisterComponent from "@/app/components/RegisterComponent/RegisterComponent";


export default function Home() {
  const componentRoot = useRef<HTMLElement>(null)
 
  return (
    <>
      <main ref={componentRoot} id="smooth-wrapper">
        <div id="smooth-content">
            <RegisterComponent  ref={componentRoot}/>
            <Menu items={["Mercedes","Cadillac","BMW", "Tesla"]}/>
            <section id="landing">
              <GridProvider id="backgroundGrid" />
              <div id="landingCTA">
              <h1 id="mainHeading">Luxury Rentals</h1>
              <div id="iconBTN"></div>
              </div>
            </section>
        </div>
      </main>
    </>
  );
}
