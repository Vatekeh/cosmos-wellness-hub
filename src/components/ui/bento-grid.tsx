
import { cn } from "@/lib/utils"
import React from "react"

export type BentoGridProps = {
  className?: string
  children?: React.ReactNode
}

export const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

BentoGrid.displayName = "BentoGrid"

export type BentoGridItemProps = {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, title, description, header, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
        {...props}
      >
        {header && <div className="rounded-t-xl">{header}</div>}
        <div className="px-6 py-4 group-hover/bento:translate-x-1 transition duration-200">
          {icon && <div className="mb-4">{icon}</div>}
          {title && <h3 className="font-semibold text-xl">{title}</h3>}
          {description && (
            <div className="text-sm text-muted-foreground">
              {description}
            </div>
          )}
        </div>
        {children && <div>{children}</div>}
      </div>
    )
  }
)

BentoGridItem.displayName = "BentoGridItem"
