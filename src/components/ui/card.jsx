import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = {
  base: "rounded-lg border bg-card text-card-foreground",
}

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants.base, className)}
    {...props}
   data-qoder-id="qel-div-9e32a161" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-9e32a161&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ui/card.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:10,&quot;column&quot;:3}}" style={props?.style}/>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
   data-qoder-id="qel-div-9b329ca8" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-9b329ca8&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ui/card.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:19,&quot;column&quot;:3}}"/>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
   data-qoder-id="qel-h3-a7759a29" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-h3-a7759a29&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ui/card.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;h3&quot;,&quot;loc&quot;:{&quot;line&quot;:28,&quot;column&quot;:3}}"/>
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
   data-qoder-id="qel-p-c2e47846" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-p-c2e47846&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ui/card.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;p&quot;,&quot;loc&quot;:{&quot;line&quot;:37,&quot;column&quot;:3}}"/>
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props}  data-qoder-id="qel-div-a232a7ad" data-qoder-source="{&quot;qoderId&quot;:&quot;qel-div-a232a7ad&quot;,&quot;filePath&quot;:&quot;react-vite/src/components/ui/card.jsx&quot;,&quot;componentName&quot;:&quot;Unknown&quot;,&quot;elementRole&quot;:&quot;div&quot;,&quot;loc&quot;:{&quot;line&quot;:46,&quot;column&quot;:3}}" style={props?.style}/>
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardDescription, CardContent }
