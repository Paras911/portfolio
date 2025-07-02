export default function Contact() {
  return (
    <section className="py-20 bg-gray-950 text-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-blue-400 border-b-4 border-blue-600 inline-block mb-6">
          Contact
        </h2>
        <p className="text-lg mb-4">
          Reach out at{' '}
          <a
            href="mailto:pshrawaney1999@example.com"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            pshrawaney1999@gmail.com
          </a>{' '}
          or connect on{' '}
          <a
            href="https://www.linkedin.com/in/paras-shrawaney"
            className="text-blue-400 hover:text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>.
        </p>
      </div>
    </section>
  );
}
