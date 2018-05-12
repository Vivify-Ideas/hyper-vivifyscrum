import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import snarkdown from 'snarkdown'
import { Lightbox } from 'react-modal-image'
import Icon from './icon'
import PropTypes from 'prop-types'

const ITEM_TYPES_RGB_COLORS = {
  Bug: '201, 25, 25',
  Story: '78, 173, 146',
  Improvement: '34, 190, 233',
  Task: '255, 157, 2',
  Note: '239, 211, 0',
  Idea: '243, 10, 177'
}

export default class Item extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      expanded: false
    }
  }

  parseMarkdown(markdown) {
    return snarkdown(markdown)
      .replace(
        /(src=")(?!https?:\/\/)\/?([^"]+\.(jpe?g|png|gif|bmp))"/ig,
        '$1https://vivifyscrum.com/$2"'
      )
  }

  onImagePreview(event) {
    if (event.target.tagName === 'IMG') {
      ReactDOM.render(
        (
          <Lightbox
              large={event.target.src}
              onClose={
                () => ReactDOM.unmountComponentAtNode(
                  document.getElementById('vivifyscrum-image-modal'))
              }
            />
        ),
        document.getElementById('vivifyscrum-image-modal')
      )
    }
  }

  toggleItemItemState() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  getItemRgbaColor(type, opacity = '.4') {
    return `rgba(${ITEM_TYPES_RGB_COLORS[type]}, ${opacity})`
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          flexGrow: 1,
          marginBottom: '1rem'
        }}
      >
        {this.props.children}
        <div
          style={{
            background: this.getItemRgbaColor(this.props.item.type),
            padding: '.5rem'
          }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: this.parseMarkdown(this.props.item.name)
            }}
          />
          {
            this.props.item.description && this.props.item.description !== '' &&
            (<a
              style={{
                position: 'relative',
                float: 'right'
              }}
              onClick={() => this.toggleItemItemState()}
            >
              <Icon
                name="arrow"
                style={{
                  transition: 'transform .1s ease',
                  transform: this.state.expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                  width: '1rem',
                  height: '1rem',
                  fill: '#4ead92'
                }}
              />
            </a>)
          }
        </div>

        {
          this.state.expanded &&
          (<Fragment>
            <div
              dangerouslySetInnerHTML={{
                __html: this.parseMarkdown(this.props.item.description)
              }}
              style={{
                maxWidth: '22rem',
                display: 'inline-block',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, .2)',
                padding: '.1rem'
              }}
              onClick={(e) => this.onImagePreview(e)}
            />
          </Fragment>)
        }
      </div>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.any
}
