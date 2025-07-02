import yourImage from '../assets/doom1.png'

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-yellow-400 text-lg font-semibold mb-2">Hello! I am Paras,</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-white">Aspiring networking professional with a strong foundation in</span>{' '}
            <span className="text-yellow-400">computer networks.</span>
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            and I play a lot of video games
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer">

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded shadow">
                Hire Me
            </button>
            </a>
            <a href="/Paras Shrawaney Resume.pdf" target="_blank">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded shadow">
              Download Resume
            </button></a>

          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={yourImage}
            alt="Your Profile"
            className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
