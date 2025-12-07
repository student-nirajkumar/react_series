function customeRender(reactElemnt, container) {
/*
 const domElement = document.createElement(reactElemnt.type);
    domElement.innerHTML = reactElemnt.children;

    domElement.setAttribute('href', reactElemnt.props.href);
    domElement.setAttribute('target', reactElemnt.props.target);

    container.appendChild(domElement);
    */
    const domElement = document.createElement(reactElemnt.type);
    domElement.innerHTML = reactElemnt.children;
   for (let prop in reactElemnt.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElemnt.props[prop]);
    }

     container.appendChild(domElement);




}

const reactElemnt = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
};

const mainContainer = document.querySelector('#root');

customeRender(reactElemnt, mainContainer);
