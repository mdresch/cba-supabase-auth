"use client"

import dynamic from "next/dynamic"

export const FileTree = dynamic(
  () => import("@/app/components/markdown/filetree"),
  {
    ssr: false,
  }
)