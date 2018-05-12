import { Fragment } from 'React'
import PropTypes from 'prop-types'
import api from 'vivify-cli/src/api.js'
import mapper from 'vivify-cli/src/mapper.js'
import Column from './column'
import Item from './item'
import Icon from './icon'
import Configuration from './configuration'
import { startAnimation } from './animations'
import { getBoardAuthConfig } from './utilities'

exports.decorateTerms = (Term, { React }) => {
  class HyperVivifyScrum extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        board: null,
        items: [],
        isConfigurationPage: false
      }
      this.onDecorated = this.onDecorated.bind(this);
    }

    onDecorated(terms) {
      this.terms = terms;
      // Don't forget to propagate it to HOC chain
      if (this.props.onDecorated) {
        this.props.onDecorated(terms);
      }
    }

    filterItems(prepareBoardData) {
      let { filterByAssignee } = getBoardAuthConfig()
      return prepareBoardData.columns
        .map((column) => column.items)
        .reduce((accumulate = [], current) => [ ...accumulate, ...current ])
        .filter((item) =>
          (item.assignees
            .map(assignee => assignee.name.toLowerCase())
            .join(';')
            .indexOf(filterByAssignee.toLowerCase()) > -1)
          && (!item.done_at || item.done_at === '')
        )
    }

    getItems() {
      startAnimation('#animation-icon')
      return api.getBoardApiRequest(getBoardAuthConfig())
        .then(({ data }) => {
          return mapper.prepareBoardData(data);
        }).then((prepareBoardData) => {
          this.setState({
            board: prepareBoardData,
            items: this.filterItems(prepareBoardData)
          })
        })
    }

    toggleConfigurationPage() {
      this.setState({
        isConfigurationPage: !this.state.isConfigurationPage
      })
    }

    render() {
      return (
        <Term
          {...this.props}
          onDecorated={this.onDecorated}
          customChildren={(
            <Fragment>
              <Column
                board={this.state.board}
              >
                {
                  this.state.isConfigurationPage ?
                   (<Configuration
                      toggleConfigurationPage={this.toggleConfigurationPage.bind(this)}
                    />) :
                   (<Fragment>
                    <a
                      onClick={this.getItems.bind(this)}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0
                      }}
                    >
                      <Icon
                        id="animation-icon"
                        name={ !this.state.board ? 'download' : 'reload' }
                        style={{
                          width: '1.8rem',
                          height: '1.8rem',
                          fill: '#4ead92'
                        }}
                      />
                    </a>

                    <a
                      onClick={this.toggleConfigurationPage.bind(this)}
                      style={{
                        position: 'absolute',
                        right: '2rem',
                        top: 0
                      }}
                    >
                      <Icon
                        name="configuration"
                        style={{
                          width: '1.8rem',
                          height: '1.8rem',
                          fill: '#4ead92'
                        }}
                      />
                    </a>
                    {
                      this.state.items.map((item) => {
                        return (
                          <Item
                            item={item}
                            key={item.id}
                          >
                          </Item>
                        )
                      })
                    }
                  </Fragment>)
                }
              </Column>
              <div id="vivifyscrum-image-modal"></div>
            </Fragment>
          )}
        />
      )
    }
  }

  HyperVivifyScrum.propTypes = {
    onDecorated: PropTypes.any
  }

  return HyperVivifyScrum
}
