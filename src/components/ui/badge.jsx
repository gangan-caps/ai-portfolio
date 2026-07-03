import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}  data-qoder-id="qel-div-38406ea3" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-38406ea3&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ui/badge.jsx&quot;,&quot;componentName&quot;:&quot;Badge&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:23,&quot;column&quot;:5}}" style={props?.style}/>
  )
}

export { Badge, badgeVariants }
