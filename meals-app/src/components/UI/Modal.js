import React from 'react'
import ReactDOM from 'react-dom';

const Backdrop = props =>{
    return <div className={classes.backdrop}></div>
};

const ModalOverlay = prosp => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

export default function Modal(props) {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}
