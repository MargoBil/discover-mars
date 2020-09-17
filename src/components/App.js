import React, {Component} from 'react';
import fetchServises from '../servises/getApiFetch';
import SearchForm from './SearchForm/SearchForm';
import {getCameraNamesList} from '../servises/getCamerasNameList';
import {ListOfItems} from './ListOfCameras/ListOfItems';
import {PhotosList} from './PhotosList/PhotosList';
import {Typography } from '@rmwc/typography';
import s from './App.module.css';
import '@rmwc/typography/styles';

class App extends Component {
  state = {
    cameras: [],
    photos: [],
    selectedItem: '',
    selectedCamera: '',
    sol: null,
    page: 1,
    totalPages: null,
  };

  componentDidUpdate(_, nextState) {
    const {selectedItem, sol, selectedCamera, page} = this.state;
    if (
      nextState.selectedItem !== this.state.selectedItem ||
      nextState.sol !== this.state.sol
    ) {
      fetchServises.getPhotosBySelectedRover(selectedItem, sol).then(data => {
        this.setState({cameras: getCameraNamesList(data), photos: []});
      });
    }

    if (nextState.selectedCamera !== this.state.selectedCamera) {
      fetchServises
        .getAllPhotosBySelectedRoverAndCamera(selectedItem, sol, selectedCamera)
        .then(data => this.setState({totalPages: data.length}));
      fetchServises
        .getPhotosBySelectedRoverAndCamera(
          selectedItem,
          sol,
          selectedCamera,
          page,
        )
        .then(photos => {
          this.setState({photos: photos, page: 1});
        });
    }
    if (nextState.page !== this.state.page) {
      const heightSpiner = 120;
      const scroll = document.documentElement.offsetHeight - heightSpiner;
      fetchServises
        .getPhotosBySelectedRoverAndCamera(
          selectedItem,
          sol,
          selectedCamera,
          page,
        )
        .then(photos => {
          this.setState(state => ({photos: [...state.photos, ...photos]}));
          window.scrollTo({
            top: scroll,
            behavior: 'smooth',
          });
        });
    }
  }

  handleSearchForm = data => {
    const {selectedItem, sol} = data;
    const formatedSol = Number(sol);
    this.setState({selectedItem, sol: formatedSol});
  };

  handleClickOnItem = ({target: {textContent}}) => {
    const cameraName = textContent.toLowerCase();
    this.setState({selectedCamera: cameraName});
  };
  handleClickOnBtn = () => {
    this.setState(state => ({page: state.page + 1}));
  };
  render() {
    const {cameras, photos, totalPages} = this.state;
    const viewable = totalPages - photos.length > 25;
    return (
      <div className={s.wrapper}>
        <Typography use="headline6" tag="h2" style={{width: '100%', textAlign: 'center', color:'#783ee6', fontWeight: '600'}}>Experiments of the NASA expedition to Mars!</Typography>
        <SearchForm onSubmit={this.handleSearchForm} />
        {cameras.length !== 0 && (
          <ListOfItems cameras={cameras} onClick={this.handleClickOnItem} />
        )}
        {photos.length !== 0 && (
          <PhotosList
            viewable={viewable}
            photos={photos}
            onClick={this.handleClickOnBtn}
          />
        )}
      </div>
    );
  }
}

export default App;
