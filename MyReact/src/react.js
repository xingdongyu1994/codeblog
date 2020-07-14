const ELEMENT_TEXT = Symbol.for('ELEMENT_TEXT');

function createElement(type, config, ...children) {
  console.log('本公告服务', children);
  return {
    type,
    props: {
      ...config,
      children: children.map((item) => {
        // 看是文本还是react div元素
        return typeof item === 'object'
          ? item
          : {
              type: ELEMENT_TEXT,
              props: { text: item, children: [] },
            };
      }),
    },
  };
}

const React = {
  createElement,
};

export default React;
