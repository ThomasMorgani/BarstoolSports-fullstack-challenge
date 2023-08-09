type CardProps = {
  children: React.ReactNode
  classes: string
  title?: string
}
export default function Card({ classes, title, children }: CardProps) {
  return (
    <article className={`bg-white p-4 rounded-lg ${classes}`}>
      {title && <h2 className='text-2xl text-primary mb-2'>{title}</h2>}
      {children}
    </article>
  )
}
