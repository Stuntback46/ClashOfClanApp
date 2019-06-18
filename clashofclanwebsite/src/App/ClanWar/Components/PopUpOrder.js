import React from 'react';
class PopUpOrder extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Instructions</h1>
          <textarea rows="6" className="col-sm-12" type='text' value={this.props.text} onChange={this.props.onChange}></textarea>
          <br/>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
export default PopUpOrder;