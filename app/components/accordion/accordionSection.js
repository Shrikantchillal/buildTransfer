import React from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onOpen: PropTypes.func.isRequired
    };

    onOpen = () => {
        this.props.onOpen(this.props.label);
    };

    render() {
        const {
          onOpen,
            props: { isOpen, label },
          } = this;
        return (
            <div
            style={{
              background: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '4px'
            }}
          >
            <div onClick={onOpen} style={{ cursor: 'pointer', padding: 5 }}>
              {label}
              <div style={{ float: 'right' }}>
                {!isOpen && <span>&#9650;</span>}
                {isOpen && <span>&#9660;</span>}
              </div>
            </div>
            {isOpen && (
              <div
                style={{
                  background: '#fff',
                  marginTop: 10,
                  padding: '10px 20px',
                }}
              >
                {this.props.children}
              </div>
            )}
          </div>
        );
    }

}

export default AccordionSection;