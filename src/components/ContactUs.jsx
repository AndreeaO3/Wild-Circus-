import React from 'react'
import Modal from 'react-modal';
 
import './ContactUs.scss'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

// Modal.setAppElement('#yourAppElement')



class ContactUs extends React.Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          name: '',
          email: '',
          performance: '',
          age: '',
          quantity: 0,
          flash: ''
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
   
      openModal() {
        this.setState({modalIsOpen: true});
      }
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
        console.log(this.state)
    }

     
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        fetch("/bookTicket",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .catch(err => this.setState({
                flash: err.message
            }))
    }

    render () {
    return (

        <div>
        <button onClick={this.openModal}>Book Ticket</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
 
          <h2 ref={subtitle => this.subtitle = subtitle}>For organized groups and school trips, call us at: 
          +40742082455</h2>
          <div className="flex">
          <iframe title ="map"className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124879.02775050314!2d2.2733550234868845!3d48.81527297112019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51151b04400001%3A0x5e8e4026b1a5e55f!2sWild+Code+School+Training+D%C3%A9veloppeur+Web%2FMobile!5e0!3m2!1sen!2sfr!4v1563718936044!5m2!1sen!2sfr"
        width="400" height="300" style={{'border':0}} allowfullscreen></iframe> 
          {/* <div>I am a modal</div> */}

          
          <form className='cont'>
          
            <label for="name"> Full Name:</label>
            <input 
            value={this.state.name}
            onChange={this.handleChange('name')} />
            <label for="email">Email Address:</label>
            <input
            value={this.state.email}
            onChange={this.handleChange('email')} />
            <label for="day">Performance Day:</label>
            <select 
            value={this.state.performance}
            onChange={this.handleChange('performance')} 
            id="first-choice">
            <option selected value="base">Please Select Day</option>
            <option value="day1">Monday</option>
            <option value="day2">Tuesday</option>
            <option value="day3">Wednesday</option>
            <option value="day4">Thursday</option>
            <option value="day5">Friday</option>
            <option value="day6">Saturday</option>
            <option value="day7">Sunday</option>
            </select>
            <label for="age">Age:</label>
            <select id="second-choice"
            value={this.state.age}
            onChange={this.handleChange('age')}>
            <option selected value="base">
              Please Select Age</option>
            <option value="age1">Adult</option> 
            <option value="age2">Under 12 years old</option> 
            </select>
            <label for="ticket">Quantity:</label>
            <select id="third-choice"
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}>
            <option selected value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <button 
            onClick={this.handleSubmit}>Make booking </button>
            <button onClick={this.closeModal}>Close</button>
            
          </form>
          </div>
        </Modal>
      </div>
         /* <div id="mini-modal">
        <div className="flex">    
       <iframe className="map"  
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124879.02775050314!2d2.2733550234868845!3d48.81527297112019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51151b04400001%3A0x5e8e4026b1a5e55f!2sWild+Code+School+Training+D%C3%A9veloppeur+Web%2FMobile!5e0!3m2!1sen!2sfr!4v1563718936044!5m2!1sen!2sfr"
         width="400" height="300" style={{'border':0}} allowfullscreen></iframe>
         <h3>Contact Us</h3> 
        <section id="contact">
        <div class="cont">
       <form action="#" method="post">
         <div>
           <label for="name">Name:</label>
           <input id="name" name="user_name" type="text" placeholder="Name"/>
         </div>
         <div>
           <label for="mail">Mail:</label>
           <input id="mail" name="user_mail" type="email" placeholder="Example@.com"/>
         </div>
         <div>
           <label for="msg">Message:</label>
           <textarea id="msg" name="user_message"></textarea>
         </div>
         <div class="button">
           <button type="submit">Send message</button>
         </div>
         </form>
         </div>
       </section>

       </div>
      </div>  */




    )
}}


export default ContactUs