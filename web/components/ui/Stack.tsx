function Stack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={
        "text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity" + " " + className
      }
      {...props}
    />
  )
}

export { Stack }