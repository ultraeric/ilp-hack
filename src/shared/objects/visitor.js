function optSliceString(str, maxLen) {
  str = str || '';
  return str.slice(0, maxLen);
}

function createVisitor(name=null, email=null, company=null, title=null, msg=null) {
  return {name, email, company, title, msg};
}

function cleanVisitor(visitor) {
  visitor.name = visitor.name ? visitor.name.slice(0, 50) : visitor.name;
  visitor.email = visitor.email ? visitor.email.slice(0, 50) : visitor.email;
  visitor.company = visitor.company ? visitor.company.slice(0, 50) : visitor.company;
  visitor.title = visitor.title ? visitor.title.slice(0, 50) : visitor.title;
  visitor.msg = visitor.msg ? visitor.msg.slice(0, 1000) : visitor.msg;
  return createVisitor(visitor.name, visitor.email, visitor.company, visitor.title, visitor.msg);
}

function validateVisitor(visitor) {

}

export default createVisitor;
export {createVisitor, cleanVisitor, validateVisitor};