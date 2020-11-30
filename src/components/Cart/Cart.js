import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

class Cart extends React.Component {
  render() {
    if (this.props.isOpen === true) {
      return (
        <div className="modal show">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.onCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table table-hover">
                  <tbody>
                    <tr className="table-light">
                      <td>
                        <img
                          src="https://cdn21vek.by/img/galleries/1009/136/preview_b/t0984073605200_tissot_5cda9f1025c3f.png"
                          alt="cart-clock"
                          className="clock-cart"
                        />
                      </td>
                      <td>Tissot</td>
                      <td>T098.407.36.052.00</td>
                      <td>1500$</td>
                      <td>
                        <i className="far fa-trash-alt" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <p className="total-title">Total: 452$</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.props.onCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

Cart.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Cart;
