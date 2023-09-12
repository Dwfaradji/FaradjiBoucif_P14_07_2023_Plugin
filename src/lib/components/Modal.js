import "./Modal.css";

/**
 * Modal component
 * @param id - id of the modal
 * @param show - boolean to show or hide the modal
 * @param close - function to close the modal (set show to false)
 * @param style - style of the modal
 * @param title - title of the modal
 * @param message - message of the modal
 * @returns {JSX.Element}
 * @constructor
 */
function Modal({ id, show, close, style, title, message }) {
  return (
    <>
      {show === true && (
        <div data-testid="modal" className="modal" id={id} style={style}>
          <div className="modal-content">
            <h2>{title}</h2>
            <span
              data-testid="close"
              className="modal-close-icon"
              onClick={close}
            >
              ⓧ
            </span>
            <div>{message}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
