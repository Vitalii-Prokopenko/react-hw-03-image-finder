import React, { Component } from 'react';
import SearchBar from 'components/searchbar/SearchBar';
import ImageGallery from 'components/image-gallery/ImageGallery';
import Button from 'components/button/Button';
import Loader from 'components/loader/Loader';
import Modal from 'components/modal/Modal';

class App extends Component {
  state = {
    tag: '',
    showModal: true,
  };

  tagSubmitHandler = data => {
    const { tag } = data;
    this.setState({
      tag: tag,
    });
  };

  toggleModal = ({ showModal } = this.state) => {
    this.setState({
      showModal: !showModal,
    });
  };

  render() {
    const {showModal} = this.state;
    return (
      <>
        <SearchBar onSubmit={this.tagSubmitHandler} />
        <ImageGallery />
        {showModal && <Modal onClose={this.toggleModal}/>}
        <Button />
        <Loader />
      </>
    );
  }
}

export default App;
