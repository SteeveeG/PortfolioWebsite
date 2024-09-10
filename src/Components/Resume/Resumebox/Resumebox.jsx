import React, { Component } from "react";
import css from './Resumebox.module.css'
class Resumebox extends Component {
  state = {}
  render() {
    const { header, text, undercomment } = this.props;
    return (
      <div className={css.box}>
        <p className={css.header}>{header}</p>
        <p className={css.text}>{text}</p>
        <p className={css.undercomment}>{undercomment}</p>
      </div>
    );
  }
}
export default Resumebox;


