import React, { Component } from 'react'

export default class Appliances extends Component {
    container = React.createRef();
    constructor(props){
      super(props)
      this.state = {
        open:false 
     }
    }

    dropdown = () => {
        this.setState((state) => {
          return {
            open: !state.open,
          };
        });
      };    

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    
    handleClickOutside = (event) => {
        if (
          this.container.current &&
          !this.container.current.contains(event.target)
        ) {
          this.setState({
            open: false,
          });
        }
      };
  render() {
    return (
  
        <section className='flex flex-col justify-between'>
            <div onClick={this.dropdown} className='text-xl p-2 bg-gray-300 hover:shadow-lg cursor-pointer text-center mb-4 '><p>{this.props.name}</p></div>
            <div ref={this.container} className='w-screen'>
                {this.state.open  &&
               <div className='absolute left-0 right-0 bg-gray-200'>{this.props.content}</div>
                }
            </div>
        </section>
        

    
    )
  }
}
