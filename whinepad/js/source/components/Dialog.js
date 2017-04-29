/**
 * Created by eden90267 on 2017/4/29.
 */
import Button from './Button';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Dialog extends Component {
    componentWillUnmount() {
        document.body.classList.remove('DialogModalOpen');
    }

    componentDidMount() {
        if (this.props.modal) {
            document.body.classList.add('DialogModalOpen');
        }
    }

    render() {
        return (
            <div className={classNames({
                'Dialog': true,
                'DialogModal': this.props.modal
            })}>
                <div className={classNames({
                    'DialogModalWrap' : this.props.modal
                })}>
                    <div className="DialogHeader">{this.props.header}</div>
                    <div className="DialogBody">{this.props.children}</div>
                    <div className="DialogFooter">
                        {this.props.hasCancel
                            ? <span
                                className="DialogDismiss"
                                onClick={this.props.onAction.bind(this, 'dismiss')}></span>
                            : null
                        }
                        <Button
                            onClick={this.props.onAction.bind(this,
                                this.props.hasCancel ? 'confirm' : 'dismiss')}>
                            {this.props.confirmLabel}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

Dialog.propTypes = {
    header: PropTypes.string.isRequired,
    confirmLabel: PropTypes.string,
    modal: PropTypes.bool,
    onAction: PropTypes.func,
    hasCancel: PropTypes.bool
};

Dialog.defaultProps = {
    confirmLabel: 'ok',
    modal: false,
    onAction: () => {
    },
    hasCancel: true,
};

export default Dialog