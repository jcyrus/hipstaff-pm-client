"use client"

import React from 'react'
import ProjectHeader from "@/app/projects/ProjectHeader"

type Props = {
  params: { id: string };
}

const Project = ({ params }: Props) => {
const { id } = params;
const [activeTab, setActiveTab] = useState("Board");
const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

return (
  <div>
    {/* New Task modal */}
    {/* <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} /> */}
  </div>
)
}

export default Project