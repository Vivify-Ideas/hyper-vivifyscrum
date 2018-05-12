import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'
import { Truncate } from 'rebass'

export default class Column extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false
    }
  }

  toggleColumnVisibility() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div
        id="vivifyscrum-column"
        style={{
          position: 'absolute',
          width: '22rem',
          right: this.state.visible ? 0 : '-22.3rem',
          height: '100%',
          background: 'rgba(255, 255, 255, .1)'
        }}
      >
        <a>
          <Icon name="logo"
                style={{
                  width: '1.8rem',
                  height: '1.8rem',
                  position: 'absolute',
                  left: '-2.5rem',
                  fill: '#4ead92'
                }} />
        </a>

        <a
          onClick={this.toggleColumnVisibility.bind(this)}
        >
          <Icon
            name="arrow"
            style={{
              transition: 'transform .1s ease',
              transform: this.state.visible ?
                'rotate(90deg)' : 'rotate(270deg)',
              width: '1.2rem',
              height: '1.2rem',
              position: 'absolute',
              left: '-2rem',
              bottom: '1rem',
              fill: '#4ead92'
            }}
          />
        </a>
        {
          this.props.board &&
            (<div
              style={{
                background: 'rgba(255, 255, 255, .2)',
                padding: '.5rem',
                marginBottom: '1rem',
                maxWidth: '18rem'
              }}
             >
              <Truncate>
                <span>{this.props.board.code} - {this.props.board.name}</span>
              </Truncate>
            </div>)
        }
        <div
          style={{
            height: 'calc(100% - 2rem)',
            overflowY: 'auto'
          }}
        >
        {
          this.props.children
        }
        </div>
      </div>
    )
  }
}

Column.propTypes = {
  children: PropTypes.any,
  board: PropTypes.object
}
