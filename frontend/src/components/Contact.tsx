export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-24 bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-50">
          <span className="text-emerald-400 font-mono text-2xl mr-2">04.</span> 
          Get In Touch
        </h2>
        <p className="text-slate-400 mb-12 leading-relaxed">
          I am currently open to new opportunities in software development and data science. 
          Whether you have a question, a project proposal, or just want to say hi, my inbox is open!
        </p>

        <form className="max-w-xl mx-auto text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-emerald-400 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-mono text-emerald-400 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="hello@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-mono text-emerald-400 mb-2">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button 
            type="button" 
            className="w-full border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold py-3 px-8 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>

        <footer className="mt-24 pt-8 border-t border-slate-800 text-slate-500 text-sm font-mono flex flex-col items-center">
          <div className="flex gap-6 mb-4">
            <a href="https://github.com/UdaySGawhankar" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/uday-gawhankar-059836238" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
          <p>Designed & Built by Uday Gawhankar</p>
        </footer>
      </div>
    </section>
  );
}