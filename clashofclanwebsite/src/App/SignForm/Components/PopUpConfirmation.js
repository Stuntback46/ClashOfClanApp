import React from 'react';
class PopUpOrder extends React.Component {

   componentDidMount() {
axios.get('api/player/'+ escape(this.props.villageId))
  .then((response)=> {
    // handle success
   this.setState({data:response.data})
   
  })
  .catch((error) =>{
    // handle error
    
    console.log(error);
    if ( error.toString()==='Error: Request failed with status code 403')
      {
        this.setState({ data:403 })
      if(localStorage.getItem('isLoggedIn')==='true')
        {  console.log("local strorage")
        localStorage.setItem('isLoggedIn','false')
          this.props.history.go('/')}
      }
      if ( error.toString()==='Error: Request failed with status code 404')
      {
        this.setState({ data:404 })
      }
  })
  .then(()=> {
    // always executed
  });

  /*fetch('api/player/'+ escape(localStorage.getItem('villageId')))
      .then(response => (response.json()))
      .then(data => Error: Request failed with status code 403)
   .catch(err=>

    this.setState({ data:404 }))*/
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
export default PopUpOrder;