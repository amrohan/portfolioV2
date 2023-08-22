export default function HomePage() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/hero.svg"
            className="max-w-sm rounded-lg shadow-2xl w-80 h-80"
            alt="A guy holding cat"
          />
          <div className="ml-0 md:ml-5">
            <h1 className="text-4xl font-bold">Hi there!</h1>
            <p className="py-6">
              My name is Rohan Salunkhe. I am a full-stack developer and
              passionate about building various software applications.
              Currently, I am focusing on learning SvelteKit and implementing
              its features in my projects.
            </p>
            <button className="btn btn-secondary btn-sm">Resume</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <h2 className="text-lg md:text-2xl text-center">Experience</h2>
      </div>
    </div>
  );
}
