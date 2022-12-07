const Modal = ({ open, closeModal }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal__container">
        <h2 className="modal__title">Modal in React</h2>
        <div className="modal__content">
          <p>
            Landing Page Salon Figma Template. It is Fully Prototyping All the
            Buttons Have different interactions along with the flexing of other
            content on top of it try it for yourself to see more features it's
            free to use and enjoy.
          </p>
        </div>
        <button className="modal__close" onClick={closeModal}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default Modal;
