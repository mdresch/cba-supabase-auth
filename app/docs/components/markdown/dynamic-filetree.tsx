"use client"

import dynamic from "next/dynamic"

export const FileTree = dynamic(
  () => import("@/app/docs/components/markdown/filetree"),
  {
    ssr: false,
  }
)
