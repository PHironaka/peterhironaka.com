import React from 'react';
import PropTypes from 'prop-types'


class ProjectLinks extends React.Component {
  render() {
    if (!!this.props.link || !!this.props.repo) {
      return (
        <StyledProjectLinksList>
          {this.props.link && (
            <StyledProjectLink>
              <a href={this.props.link} target="_blank">
                {this.props.link.length > 40 ? 'Link' : this.props.link}
              </a>
            </StyledProjectLink>
          )}

        </StyledProjectLinksList>
      );
    } else {
      return null;
    }
  }
}

export default ProjectLinks;