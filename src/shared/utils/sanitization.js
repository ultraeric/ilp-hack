function rmResponsiveDims(obj) {
  delete obj['width'];
  delete obj['height'];
  return obj;
}

export default rmResponsiveDims;
export {rmResponsiveDims};