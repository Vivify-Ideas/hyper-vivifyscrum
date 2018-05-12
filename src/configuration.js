import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Input, Label, ButtonOutline, Toolbar, NavLink, Container } from 'rebass'
import { getBoardAuthConfig } from './utilities'

export default class Configuration extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = getBoardAuthConfig()
  }

  saveConfigAndExit() {
    localStorage.setItem(
      'vivifyscrum_config', JSON.stringify(this.state))
    this.props.toggleConfigurationPage()
  }

  handleChange(name, event) {
    let change = {}
    change[name] = event.target.value
    this.setState(change)
  }

  render() {
    return (
      <Fragment>
        <Toolbar>
          <NavLink>
            Configuration
          </NavLink>
        </Toolbar>
        <Container>
          <Label>
          Board Code
          </Label>
          <Input
            placeholder="Enter Board Code"
            value={this.state.code}
            onChange={(e) => this.handleChange('code', e)}
          />

          <Label>
          User email
          </Label>
          <Input
            placeholder="Enter your email"
            value={this.state.email}
            onChange={(e) => this.handleChange('email', e)}
          />

          <Label>
          Board API token
          </Label>
          <Input
            placeholder="Enter Board API token"
            value={this.state.token}
            onChange={(e) => this.handleChange('token', e)}
          />

          <Label>
          Filter By Assignee
          </Label>
          <Input
            placeholder="Enter Assignee Name partial to track Items"
            value={this.state.filterByAssignee}
            onChange={(e) => this.handleChange('filterByAssignee', e)}
          />

          <ButtonOutline
            children='Save and Go Back'
            style={{
              color: '#FFF',
              marginTop: '2rem'
            }}
            onClick={this.saveConfigAndExit.bind(this)}
          />
        </Container>

      </Fragment>
    )
  }

}

Configuration.propTypes = {
  toggleConfigurationPage: PropTypes.func.isRequired
}
