const customRender = (elementReact, container) => {
    const domElement = document.createElement(elementReact.type);
    domElement.innerHTML = elementReact.children;
    domElement.setAttribute("href", elementReact.props.href);
    domElement.setAttribute("target", elementReact.props.target);
    container.appendChild(domElement);
}

const elementReact = {
    type: "a",
    props: {
        href: "https//google.com",
        target: "_blank"
    },
    children: "clicked the button"
}


const mainContainer = document.getElementById("root");

customRender(elementReact, mainContainer)