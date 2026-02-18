"use client"
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

import "./frontPageHeader.css";
import LogoComp from "../Logo";

export default function FrontPageHeader() {
    return (
        <section className="frontPageHeaderSec">

                 <div className="front-page-backgoundBox">

                     <LogoComp />

                     <Link className="HomeLoginBtn" href="/login">Log ind her</Link>

                     <Link className="ScrollDownBtn" href="/#TeamTypes"><MdOutlineKeyboardDoubleArrowDown /></Link>

                 </div>

        </section>
    )
}