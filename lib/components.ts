import Pre from "@/components/ui/pre"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "@/app/docs/components/markdown/card"
import CardGrid from "@/app/docs/components/markdown/cardgrid"
import { FileTree } from "@/app/docs/components/markdown/dynamic-filetree"
import { File, Folder } from "@/app/docs/components/markdown/filetree"
import RoutedLink from "@/app/docs/components/markdown/link"
import Mermaid from "@/app/docs/components/markdown/mermaid"
import Note from "@/app/docs/components/markdown/note"
import { Step, StepItem } from "@/app/docs/components/markdown/step"

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
