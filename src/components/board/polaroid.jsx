import { cn } from '../../lib/utils'

// A polaroid frame. Pass `src` when I have a real photo; without it, a placeholder shows.
function Polaroid({ caption, src, alt, rotate = 0, className, cursor, tape = 'bg-sticky-blue/70' }) {
  return (
    <figure
      data-cursor={cursor}
      className={cn(
        'relative bg-card p-2.5 pb-8 shadow-float transition-transform hover:z-10 hover:scale-[1.03]',
        className
      )}
      style={{ rotate: `${rotate}deg` }}
    >
        {/* square area for photo */}
      <div className="grid aspect-square place-items-center overflow-hidden bg-muted text-center text-muted-foreground">
        {src ? (
          <img src={src} alt={alt ?? caption} loading="lazy" className="size-full object-cover" />
        ) : (
          <span className="px-2 font-hand text-xl leading-tight">
            {caption}
            <br />
            photo here
          </span>
        )}
      </div>

      <figcaption className="mt-1.5 text-center font-hand text-xl">{caption}</figcaption>

      {/* Tape at the top */}
      <span
        aria-hidden="true"
        className={cn('absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 rotate-2', tape)}
      />
    </figure>
  )
}

export default Polaroid