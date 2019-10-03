const types = Object.freeze({
  ref: 'ref',
  click: 'click',
  register: 'register'
});

function createSession(id) {
  return {id: id, events: []};
}

class Session {
  constructor(id) {
    this.id = id;
    this.events = [];
  }

  /**
   * Creates a reference object when linking from an outside source such as a LinkedIn ad or Medium post.
   *
   * @param fromUrl: advertisement that this session originated from
   */
  createRef(fromUrl) {
    this.events.push({
      type: types.ref,
      time: Date.now(),
      data: {fromUrl: fromUrl}
    });
  }

  /**
   * Creates a click object when navigating around the buttons on the main page. This will show references of user flow
   * between different pages.
   *
   * @param fromUrl: URL that the referring button is located on
   * @param toUrl: URL that the referring button is pointing to
   * @param fromButtonId: id of the button being clicked
   */
  createClick(fromUrl, toUrl, fromButtonId) {
    this.events.push({
      type: types.click,
      time: Date.now(),
      data: {fromUrl: fromUrl, toUrl: toUrl, fromButton: fromButtonId}
    });
  }

  /**
   * Creates a registration object when registration happens. The visiting ID can be cross-checked against the visitor objects.
   */
  createRegistration() {
    this.events.push({
      type: types.register,
      time: Date.now()
    });
  }

  export() {
    return {
      id: this.id,
      events: this.events
    };
  }
}

export default Session;
export {Session};