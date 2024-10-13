import Balance from "react-wrap-balancer";
import { cn } from "@/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "mx-auto  flex md:py-48 py-36  space-y-4  text-center   flex-col items-center ",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-extrabold leading-tight tracking-tight md:text-6xl lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        "max-w-[1000px]  text-lg text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full justify-center items-center space-x-4",
        className
      )}
      {...props}
    />
  );
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription, PageActions };
