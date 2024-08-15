const customRender = (elementReact, container) => {
    // const domElement = document.createElement(elementReact.type);
    // domElement.innerHTML = elementReact.children;
    // domElement.setAttribute("href", elementReact.props.href);
    // domElement.setAttribute("target", elementReact.props.target);
    // container.appendChild(domElement);

    //try for-in loop

    const domElement = document.createElement(elementReact.type);
    domElement.innerHTML = elementReact.children;

    for (const prop in elementReact.props) {
        domElement.setAttribute(prop, elementReact.props[prop])
    }

    container.appendChild(domElement);
}

const elementReact = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "clicked the button"
}


const mainContainer = document.getElementById("root");

customRender(elementReact, mainContainer)