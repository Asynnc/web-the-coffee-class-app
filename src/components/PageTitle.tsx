
interface PageTitleProps {
  title: string;
  description?: string;
  children?: React.ReactNode
}

export default function PageTitle({ title, description, children }: PageTitleProps) {
  return (
    <>
      <section>
        <div className="mx-auto px-4 sm:container">
          <div className="items-center justify-between md:flex">
            <div className="mb-6 w-full">
              <h1 className="mb-1 text-2xl font-semibold">
                {title}
              </h1>
              {description && (
                <p className="text-body-color text-sm font-medium">
                  {description}
                </p>
              )}
            </div>
            {children && (
              <div className="mb-6">
                {children}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}