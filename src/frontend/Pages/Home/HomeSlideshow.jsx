import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';

import {images} from 'static/images/homeSlides';
const responsiveSrcObjects = Object.values(images);

const cycleDelay = 8000;

/**
 * exp
 */
class HomeSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.bindAllMethods();
    this.state = {
      activeIndex: 0,
      responsiveSrcObjects: responsiveSrcObjects,
      imgComps: this.props.exp ?
                <img className={'active'} src={this.props.exp.imgUrl}/> :
                this.calcImgComponents(responsiveSrcObjects, -1)
    };
    this.scrollListener = () => {
      this.forceUpdate();
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  getImgKey(index) {
    return Object.keys(this.state.imgs)[index];
  }

  getImgByIndex(index) {
    return this.state.imgs[this.getImgKey(index)];
  }

  calcImgComponents(responsiveSrcObjects, activeIndex) {
    let imgComponents = [];
    for (let i in responsiveSrcObjects) {
      let responsiveSrcObject = responsiveSrcObjects[i];
      let active = (i === activeIndex);
      imgComponents.push(
        <img className={active ? 'active' : ''}
             key={responsiveSrcObject.src}
             {...responsiveSrcObject}/>
      );
    }
    return imgComponents;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  changeImg() {
    if (this.props.exp) {
      return;
    }
    let numImgs = this.state.responsiveSrcObjects.length;
    let newIndex = (this.state.activeIndex + 1) % numImgs;
    let imgComps = this.state.imgComps;
    imgComps[this.state.activeIndex] =
      <img className={''}
           key={this.state.responsiveSrcObjects[this.state.activeIndex].src}
           {...this.state.responsiveSrcObjects[this.state.activeIndex]}/>;
    imgComps[newIndex] =
      <img className={'active'}
           key={this.state.responsiveSrcObjects[newIndex]}
           {...this.state.responsiveSrcObjects[newIndex]}/>;
    this.setState({activeIndex: newIndex, imgComps: imgComps});
    setTimeout(this.changeImg, cycleDelay);
  }

  componentDidMount() {
    setTimeout(this.changeImg, 300);
  }

  render() {
    return (
      <div className={'home-slideshow'}>
        <div className={'img-wrapper'}
             style={{transform: 'translate3d(0px, ' + ((window.scrollY || 0) / 4) + 'px, 0px)'}}>
          {this.state.imgComps}
        </div>
      </div>
    );
  }
}

HomeSlideshow = Guac(HomeSlideshow);

export default HomeSlideshow;
export {HomeSlideshow};
