
const Contact = () => {

  
  const handleFormSubmit = (e) => {
    e.preventDefault();  

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact us</h2>
    <div className='contact-wrapper container'>
      <form onSubmit={handleFormSubmit}>
           <input type="text" 
           className='form-control'
           required
           autoComplete='false'
           placeholder='Enter your name'
           name='username'/>

            <input type="email" 
           required
           className='form-control'
           autoComplete='false'
           placeholder='Enter your email'
           name='email'/>

           <textarea name="message"
           rows="10"
             className='form-control'
              autoComplete='false'
              required
             placeholder='Enter your message'>
          </textarea>
          <button type='submit' className="buton">send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact;