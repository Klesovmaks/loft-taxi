import React from 'react';

export default class Registration extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.nav('map');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" size="28" />
        <label htmlFor="name">Как вас зовут:</label>
        <input type="name" id="name" size="28" />
        <label htmlFor="password">Придумайте пароль:</label>
        <input type="password" id="password" size="28" />
        <input type="submit" value="Зарегистрироваться" />
      </form>
    );
  }
}
