/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { Pagination } from '@material-ui/lab';
import { addToCart } from '../../../../redux/actions/cartActions';
import './ItemList.css';
import OneItem from './OneItem/OneItem';
import Spinner from '../../../Spinner/Spinner';
import ErrorLoading from '../../../ErrorLoading/ErrorLoading';
import { filterClocks } from '../../../../redux/actions/clocksActions';

class ItemList extends React.Component {
  clockForPrice = this.props.dataClocks.map(clock => {
    return clock.price;
  });

  minPrice = Math.min(...this.clockForPrice);

  maxPrice = Math.max(...this.clockForPrice);

  state = {
    brandValue: 'All',
    gender: 'All',
    priceValue: [this.minPrice, this.maxPrice],
    brands: [
      { id: 1, brand: 'All' },
      { id: 2, brand: 'Tissot' },
      { id: 3, brand: 'MK' },
      { id: 4, brand: 'CASIO' },
    ],
    genders: [
      { id: 1, gender: 'All' },
      { id: 2, gender: 'Male' },
      { id: 3, gender: 'Female' },
    ],
    currPage: 1,
  };

  onChangePage = (e, page) => {
    this.setState({ currPage: page });
  };

  handleChange = event => {
    this.setState({ brandValue: event.target.value });
  };

  handleChangeGender = event => {
    this.setState({ gender: event.target.value });
  };

  handleChangePrice = (event, newValue) => {
    this.setState({ priceValue: newValue });
  };

  AddToCart = idClock => {
    const clock = this.props.dataClocks.find(item => item.id === idClock);
    const { id, imageClock, brandClock, vendorCode, price } = clock;
    this.props.onAddToCart(id, imageClock, brandClock, vendorCode, price);
  };

  onFilterHnadler = () => {
    const { brandValue, gender } = this.state;
    this.props.filterItems(
      gender.toLowerCase(),
      brandValue.toLowerCase(),
      this.props.forFilterData
    );
  };

  render() {
    const { dataClocks } = this.props;
    const indexOfLastPost = this.state.currPage * 8;
    const indexOfFirstPost = indexOfLastPost - 8;
    const currentArr = dataClocks.slice(indexOfFirstPost, indexOfLastPost);

    const clockItems = currentArr.map(item => {
      const { id, imageClock, brandClock, collection, vendorCode, price, rating } = item;
      return (
        <OneItem
          key={id}
          id={id}
          imageClock={imageClock}
          brandClock={brandClock}
          collection={collection}
          vendorCode={vendorCode}
          price={price}
          rating={rating}
          onAddedToCart={this.AddToCart}
        />
      );
    });

    const brandsList = this.state.brands.map(item => {
      const { id, brand } = item;
      return (
        <RadioGroup
          key={id}
          aria-label="brand"
          name={brand}
          value={this.state.brandValue}
          onChange={this.handleChange}
          className="one-radio"
        >
          <FormControlLabel key={id} value={brand} control={<Radio />} label={brand} />
        </RadioGroup>
      );
    });

    const genderList = this.state.genders.map(item => {
      return (
        <RadioGroup
          key={item.id}
          aria-label="brand"
          name={item.gender}
          value={this.state.gender}
          onChange={this.handleChangeGender}
          className="one-radio"
        >
          <FormControlLabel
            key={item.id}
            value={item.gender}
            control={<Radio />}
            label={item.gender}
          />
        </RadioGroup>
      );
    });

    if (this.props.logged === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="content">
        <div className="row">
          <div className="col-md-3 filter-block">
            <div className="card border-primary mb-3 wrapper">
              <div className="brand-wrapper">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Brand:</FormLabel>
                  {brandsList}
                </FormControl>
              </div>
              <div className="gender-wrapper">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender:</FormLabel>
                  {genderList}
                </FormControl>
              </div>
              <div className="price-wrapper">
                <FormLabel component="legend">Price:</FormLabel>
                <Slider
                  value={this.state.priceValue}
                  onChange={this.handleChangePrice}
                  valueLabelDisplay="auto"
                  min={400}
                  max={5000}
                  step={100}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={this.onFilterHnadler}>
                Search
              </button>
            </div>
          </div>
          <div className="col-md products">
            <div className="row">
              {this.props.onError ? <ErrorLoading /> : null}
              {this.props.onLoading ? <Spinner /> : null}
              {!(this.props.onLoading || this.props.onError) ? clockItems : null}
            </div>
            {this.props.dataClocks.length >= 8 && (
              <Pagination
                className="pagination__items"
                color="secondary"
                count={Math.ceil(this.props.dataClocks.length / 8)}
                onChange={(e, page) => this.onChangePage(e, page)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataClocks: state.clocksReducer.clocksData,
    onLoading: state.clocksReducer.loadingClocks,
    onError: state.clocksReducer.errorClocks,
    logged: state.authorizationReducer.logged,
    forFilterData: state.clocksReducer.forFilter,
    // currentUser: state.authorizationReducer.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (id, imageClock, brandClock, vendorCode, price) =>
      dispatch(addToCart(id, imageClock, brandClock, vendorCode, price)),
    filterItems: (gender, brand, items) => dispatch(filterClocks(gender, brand, items)),
  };
};

ItemList.propTypes = {
  dataClocks: PropTypes.array.isRequired,
  forFilterData: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onLoading: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  onError: PropTypes.bool.isRequired,
  filterItems: PropTypes.func.isRequired,
  // currentUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
