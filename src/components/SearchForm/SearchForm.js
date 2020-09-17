import React, {Component} from 'react';
import {FormField} from '@rmwc/formfield';
import {Select} from '@rmwc/select';
import {TextField} from '@rmwc/textfield';
import {Button} from '@rmwc/button';
import '@rmwc/button/styles';
import '@rmwc/formfield/styles';
import '@rmwc/select/styles';
import '@rmwc/textfield/styles';


class SearchForm extends Component {
  state = {
    selectedItem: '',
    sol: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.selectedItem & !this.state.sol) {
      return alert('Select all inputs!');
    }
    this.props.onSubmit(this.state);
  };
  handleChangeSol = ({target}) => {
    const {value} = target;
    this.setState({sol: value});
  };
  handleChangeSelect = ({target}) => {
    const {value} = target;
    this.setState({selectedItem: value});
  };
  render() {
    return (
      <FormField style={{width: '350px'}}>
        <form  style={{textAlign: 'center'}} onSubmit={this.handleSubmit}>
          <Select
            style={{width: '100%'}}
            label="Choose rover"
            name="selectedItem"
            value={this.selectedItem}
            onChange={this.handleChangeSelect}
            enhanced
            options={['curiosity', 'opportunity', 'spirit']}
          />
          <TextField
            style={{width: '100%'}}
            value={this.sol}
            onChange={this.handleChangeSol}
            label="write sol..."
          ></TextField>
          <Button style={{marginTop: '5px'}}  dense type="submit">
            find cameras ...
          </Button>
        </form>
      </FormField>
    );
  }
}

export default SearchForm;
