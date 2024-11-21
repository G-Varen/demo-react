import Button from "./button";

const Modal = () => {
    return (
        <div>
            <Button>Open Modal</Button>
            <div>
                <div className="modal-box">
                    <div className="modal-msg">
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sed, voluptates.</p>
                    </div>
                    <div className="btn-group">
                        <Button type="success">Confirm</Button>
                        <Button type="danger">Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;