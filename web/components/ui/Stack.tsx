function Stack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={
        " text-xs px-2 py-0.5 rounded bg-primary rounded-md border shadow-sm opacity-90 group-hover:opacity-100" + " " + className
      }
      {...props}
    />
  )
}

export { Stack }