"use client";

import { useState } from "react";

import InstructorPanel from "./InstructorPanel";
import MemberPanel from "./MemberPanel";


export default function ProfilePageComp({ role }) {
  return (
    <section>
      {role === "instructor" ? <InstructorPanel /> : <MemberPanel />}
    </section>
  );
}