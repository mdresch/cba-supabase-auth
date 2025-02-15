import Pre from "@/components/ui/pre"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "@/app/components/markdown/card"
import CardGrid from "@/app/components/markdown/cardgrid"
import { FileTree } from "@/app/components/markdown/dynamic-filetree"
import { File, Folder } from "@/app/components/markdown/filetree"
import RoutedLink from "@/app/components/markdown/link"
import Mermaid from "@/app/components/markdown/mermaid"
import Note from "@/app/components/markdown/note"
import { Step, StepItem } from "@/app/components/markdown/step"

export const components = {
  a: RoutedLink,
  Card,
  CardGrid,
  FileTree,
  Folder,
  File,
  Mermaid,
  Note,
  pre: Pre,
  Step,
  StepItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
}
