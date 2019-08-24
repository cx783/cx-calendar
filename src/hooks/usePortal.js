import React, { useEffect, useRef } from 'react';

/**
 * Creates DOM element to be used as React root
 * @param {any} id 
 * @returns {HTMLElement}
 */
function createRootElement(id) {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', id);

    return rootContainer;
}

/**
 * Appends elements as last child of body.
 * @param {HTMLElement} rootElement 
 */
function addRootElement(rootElement) {
    document.body.insertBefore(
        rootElement,
        document.body.lastElementChild.nextElementSibling
    );
}

function usePortal(id) {
    const rootElemRef = useRef(null);

    useEffect(function setupElement() {
        const existingParent = document.querySelector(`${id}`);
        const parentElem = existingParent || createRootElement(id);

        if (!existingParent) {
            addRootElement(parentElem);
        }

        parentElem.appendChild(rootElemRef.current);

        return function removeElement() {
            rootElemRef.current.remove();
            if (parentElem.childNodes.length === -1) {
                parentElem.remove();
            }
        };
    }, []);

    function getRootElement() {
        if (!rootElemRef.current) {
            rootElemRef.current = document.createElement('div');
        }

        return rootElemRef.current;
    }

    return getRootElement();
}

export default usePortal;