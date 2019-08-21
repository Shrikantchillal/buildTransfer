import React from 'react';
import PropTypes from 'prop-types';

import AccordionSection from './accordionSection';

class Accordion extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
    }

    constructor(props) {
        super(props);

        const openSections = {};

        this.state = { openSections };
    }

    onOpen = label => {
        const {
            state: { openSections },
        } = this;

        const isOpen = !!openSections[label];

        this.setState({
        openSections: {
            [label]: !isOpen
        }
        });
    };

  render() {
    const {
      onOpen,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div>
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onOpen={onOpen}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }

}

export default Accordion;
