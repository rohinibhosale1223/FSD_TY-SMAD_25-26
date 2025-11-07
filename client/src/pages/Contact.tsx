
function Contact() {
  return (
    <section className="py-20 pt-36 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white" >Get in Touch</h2>
        <p className="text-lg text-gray-400">We'd love to hear from you.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                className="w-full px-4 py-3 bg-dark-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-dark-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom" 
                required 
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">Department</label>
            <select 
              id="department" 
              className="w-full px-4 py-3 bg-dark-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom"
            >
              <option>Choose...</option>
              <option value="1">Sales</option>
              <option value="2">Support</option>
              <option value="3">General Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
            <textarea 
              id="message" 
              rows={5} 
              className="w-full px-4 py-3 bg-dark-custom border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-custom" 
              required
            ></textarea>
          </div>

          <div className="flex items-center">
            <input 
              id="newsletterSwitch" 
              type="checkbox" 
              className="w-4 h-4 text-primary-custom bg-gray-700 border-gray-600 rounded focus:ring-primary-custom" 
              defaultChecked 
            />
            <label htmlFor="newsletterSwitch" className="ml-3 text-sm font-medium text-gray-300">
              Subscribe to our newsletter
            </label>
          </div>

          <div className="text-center pt-4">
            <button 
              type="submit" 
              className="py-3 px-8 bg-primary-custom text-black rounded-md hover:bg-opacity-90 transition-colors font-medium text-lg"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact