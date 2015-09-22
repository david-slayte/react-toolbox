/* global React */

import Card from '../../components/card';

export default React.createClass({
  displayName: 'CardTest',

  onClick () {
    console.log('onClick', arguments);
  },

  onActionClick () {
    console.log('onClick', arguments);
  },

  render () {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    const legend = 'Lorem Ipsum is simply dummy text';
    const actions = [
      { label: 'Save', icon: 'add', onClick: this.onActionClick },
      { label: 'Close', onClick: this.onActionClick }];

    return (
      <section>
        <h2>Cards</h2>
        <h3>Basic properties</h3>

        <Card title='Default Card' />
        <Card title='Default Card loading' loading />
        <Card title='Default Card with text' text={text} />
        <Card title='Default Card with legend' legend={legend} />
        <Card title='Default Card with actions' actions={actions} />
        <Card title='Default Card with text and image' text={text} image='http://cdn.tapquo.com/photos/soyjavi.jpg' />
        <Card title='Default Card with text, color and onClick event' text={text} color='#e91e63' onClick={this.onClick} />
        <Card title='Default Card loading with text, color and onClick event' text={text} color='#e91e63' onClick={this.onClick} loading />
        <h3>Sizes using type property</h3>
        <Card type='small' title='Small Card with text and onClick event' text={text} color='#00bcd4' onClick={this.onClick} />
        <Card type='square' title='Square Card with text and onClick event' text={text} color='#00bcd4' onClick={this.onClick} />
        <Card type='wide' title='Wide card with text and onClick event' text={text} color='#00bcd4' onClick={this.onClick} />
      </section>
    );
  }
});
