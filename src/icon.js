import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends React.Component {

  renderLogo() {
    return (
      <svg
        viewBox="0 0 14.01 13.99"
        style={this.props.style}
        id={this.props.id}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M5.92,14a.58.58,0,0,1-.41-.17L.17,8.56A.59.59,0,1,1,1,7.73l4.87,4.8,7.09-9a.6.6,0,0,1,.82-.1.58.58,0,0,1,.1.82l-7.5,9.53A.52.52,0,0,1,6,14Z"/>
            <path d="M6.07,10.44a.57.57,0,0,1-.58-.57.63.63,0,0,1,.12-.37L12.8.22a.6.6,0,0,1,.82-.1.58.58,0,0,1,.1.82L6.53,10.22A.55.55,0,0,1,6.07,10.44Z"/>
          </g>
        </g>
      </svg>
    )
  }

  renderArrow() {
    return (
      <svg
        viewBox="0 0 40 43.4"
        style={this.props.style}
        id={this.props.id}
      >
        <g id="double-caret_Layer_2" data-name="Layer 2">
          <g id="double-caret_Layer_1-2" data-name="Layer 1">
            <g id="double-caret_Side-menu-update">
              <g id="double-caret_Collapse">
                <path id="double-caret_Combined-Shape" d="M0,40.08l20-20,20,20-3.31,3.31L20,26.7,3.31,43.4ZM0,20,20,0,40,20,36.69,23.3,20,6.63,3.31,23.33Z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }

  renderDownload() {
    return (
      <svg
        viewBox="0 0 512 512"
        style={this.props.style}
        id={this.props.id}
      >
        <g>
          <path d="M442.55,203.072c4.172-11.615,6.45-24.132,6.45-37.184c0-60.751-49.248-110-110-110c-34.805,0-65.829,16.169-85.985,41.4   c-12.395-6.021-26.31-9.4-41.015-9.4c-51.915,0-94,42.085-94,94c0,0.28,0.008,0.559,0.011,0.839   C68.92,189.095,31,231.062,31,281.888c0,55.229,44.771,100,100,100h63.646l-60.209-73.732h89.538v-93.102h88.667v93.102   l88.729,0.002l-60.207,73.73H381c55.229,0,100-44.771,100-100C481,249.873,465.954,221.375,442.55,203.072z"/>
          <polygon points="302.885,317.047 302.885,224.085 232.923,224.085 232.923,317.047 154.35,317.047 211.128,386.578    267.904,456.111 324.68,386.578 381.456,317.049  "/>
        </g>
      </svg>
    )
  }

  renderReload() {
    return (
      <svg
        viewBox="0 0 16 16"
        style={this.props.style}
        id={this.props.id}
      >
        <path d="M 12.007 8.01 L 12.007 8.488 L 12 8.488 C 12 10.974 9.985 12.988 7.5 12.988 C 5.015 12.988 3 10.974 3 8.488 C 3 6.17 4.759 4.284 7.012 4.037 L 7.012 6.549 L 11.519 3.775 L 7.012 1 L 7.012 3.013 C 4.203 3.26 2 5.615 2 8.488 C 2 11.526 4.462 13.988 7.5 13.988 C 10.509 13.988 12.95 11.571 12.996 8.572 L 13 8.572 L 13 8.01 L 12.007 8.01 Z"/>
      </svg>
    )
  }

  renderConfiguration() {
    return (
      <svg
        viewBox="0 0 48 48"
        style={this.props.style}
        id={this.props.id}
      >
        <path d="M0 0h48v48h-48z" fill="none"/>
        <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97l-.75-5.3c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97l-4.98-2.01c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31c-.08.64-.14 1.29-.14 1.95s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zm-14.86 5.05c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
      </svg>
    )
  }

  render() {
    let { name } = this.props
    switch (name) {
    case 'logo':
      return this.renderLogo()
    case 'arrow':
      return this.renderArrow()
    case 'download':
      return this.renderDownload()
    case 'reload':
      return this.renderReload()
    case 'configuration':
      return this.renderConfiguration()
    default:
      return <Fragment />
    }
  }

}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  style: PropTypes.object,
}
