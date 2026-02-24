"use client";
import InstructorPanel from "./InstructorPanel";
import MemberPanel from "./MemberPanel";

export default function ProfilePageComp({ role }) {
  return (
    <section>
      {role === "instructor" && <InstructorPanel />}
      {role === "member" && <MemberPanel />}
      {!role && <p>Role not assigned.</p>}
    </section>
  );
}