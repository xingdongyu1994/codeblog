const ELEMENT_TEXT = "ELEMENT_TEXT"

function createElement(type, config, ...children) {
  return {
    type,
    props: {
      ...config,
      children: children.map((item) => {
        // 看是文本还是react div元素
        return typeof item === 'object' ?
          item : {
            type: ELEMENT_TEXT,
            props: {
              text: item,
              children: []
            },
          };
      }),
    },
  };
}

const React = {
  createElement,
};

export default React;