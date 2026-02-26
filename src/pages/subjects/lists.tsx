import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import React from "react";

export default function SubjectsList() {
  return (
    <ListView>
      <Breadcrumb />
      <h1 className="page-title">Subjects</h1>
    </ListView>
  );
}
