import ArrowButton from '../../common/ArrowButton'

export default function ResourcesHero() {
  return (
    <section className="py-48 px-6"> {/* <-- taller section */}
      <div className="max-w-7xl mx-auto">
        {/* Text + buttons */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-bold text-6xl md:text-8xl"> {/* <-- bigger text */}
            Blockchain <em className="not-italic text-brand-accent">Resources</em>
          </h1>

          <p className="max-w-2xl mt-8 text-xl md:text-2xl"> {/* <-- bigger paragraph */}
            Make an informed decision. You’re in the right spot for tools and
            information.
          </p>

          {/* Stack buttons vertically */}
          <div className="mt-12 flex flex-col items-start gap-6"> {/* <-- more space */}
            {['Tutorials', 'Whitepapers', 'Brand Assets'].map(label => (
              <ArrowButton key={label} href="#" classname='w-full p-4 text-xl'>
                {label}
              </ArrowButton>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}