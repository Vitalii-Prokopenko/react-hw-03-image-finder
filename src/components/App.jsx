import React, { Component } from 'react';
import SearchBar from 'components/searchbar/SearchBar';
import ImageGallery from 'components/image-gallery/ImageGallery';
import Button from 'components/button/Button';
import Loader from 'components/loader/Loader';
import Modal from 'components/modal/Modal';

class App extends Component {
  state = {
    tag: '',
  };

  tagSubmitHandler = data => {
    const {tag} = data;
    this.setState({
      tag: tag,
    })
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.tagSubmitHandler} />
        <ImageGallery />
        <Modal />
        <Button />
        <Loader />
      </>
    );
  }
}

export default App;
