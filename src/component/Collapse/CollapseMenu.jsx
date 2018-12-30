import React from 'react';
import {Link} from 'react-router-dom';
import './Collapse.css';
class ListItem extends React.Component {
  componentDidMount () {
    console.log(this.listItem);
  }
  render() {
    let className = this.props.className ? this.props.className : ''
    let lineHeight = 28;
    return (
      <div className={(this.props.active ? 'active' : 'disabled' + ` ${className} list-wrapper`)}>
        <div onClick={this.props.onClick} className="list-title">{this.props.items.title}</div>
        <ul className={"item-wrapper"} style={{
          height: this.props.active ? lineHeight * this.props.items.children.length : 0
        }}>
          {
            this.props.items.children.map((item, index) =>
            (<li key={index} className="list-item">
              <Link to={item.path} className="item-link">{item.name}</Link>
            </li>))
            }
        </ul>
      </div>
    );
  }
}

class CollapseMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      menuList: this.props.menuList.map(item => {
        item.active = false;
        return item;
      }),
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler (index, e) {
    this.setState(state => {
      state.menuList.forEach((item, i) => {
        if (i === index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      return state;
    })
  }
  render () {
    let className = this.props.className ? this.props.className : '';

    let listItems = this.state.menuList.map((item, index) => {
      let listItemClass = '';
      if (index === 0) {
        listItemClass += ' first-item';
      }
      if (index + 1 === this.state.menuList.length) {
        listItemClass += ' last-item';
      } else {
        listItemClass = '';
      }
      return (
        <ListItem
        className={listItemClass}
        key={item.title}
        active={item.active}
        items={item}
        onClick={this.onClickHandler.bind(this, index)}/>
      )
    });
    return (
      <div className={className + " collapse-menu"}>
        {listItems}
      </div>
    )
  }
}

CollapseMenu.defaultProps = {
  menuList: [
    {
      title: 'test',
      children: [
        {name: 'sub-title1', path: '/test'},
        {name: 'sub-title2', path: '/home'}
      ]
    }
  ]
}

export default CollapseMenu;