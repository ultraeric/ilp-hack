
import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';

import drop from 'static/images/frame/drop.svg';
import logo from 'static/images/logos/fs-logo-full.png';

class _Backdrop extends React.Component {
    constructor() {
        super();
        this.bindAllMethods();
        this.scrollListener = () => {this.forceUpdate();};
        window.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
    }

    render() {
        return (
            <div className={'backdrop-container'}>
                <img className={'centered'}
                     style={{transform: 'translate3d(0px, ' + ((window.scrollY || 0) / 10) + 'px, 0px)'}}
                     src={logo}/>
                <div className={'backdrop-area'}>
                    <img className={'drop left-drop'}
                         style={{transform:'translate3d(0px, ' + (-(window.scrollY || 0) / 10) + 'px, 0px)'}}
                         src={drop}/>
                    <img className={'drop rotate180 right-drop'}
                         style={{transform: 'scale3d(-1, -1, 1) translate3d(0px, ' + ((window.scrollY || 0) / 10) + 'px, 0px)'}}
                         src={drop}/>
                </div>
            </div>
        );
    }
}

_Backdrop = Guac(_Backdrop);

export default _Backdrop;
export {_Backdrop};