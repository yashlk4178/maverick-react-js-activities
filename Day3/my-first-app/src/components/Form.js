import React, { Component } from 'react'

export  class Form extends Component {
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log('form is submitted')
    }
    handleInput=(event)=>{
        console.log(event.target.value);
    }
  render() {
    return (
      <div className='container-fluid'>
          <form onSubmit={this.handleSubmit}>
              <div>
                  Username<input type='text' name='un' autoComplete='off' onChange={this.handleInput}></input>
              </div>
              <div>
              Username<input type='password' name='pw' autoComplete='off' onChange={this.handleInput}></input> 
              </div>
              <div>
              <input type='submit' value='login'></input> 
              </div>
          </form>
      </div>
    )
  }
}

export default Form;