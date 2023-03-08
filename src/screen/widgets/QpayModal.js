import axios from "axios";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAllFromCart } from "../../store/slices/cart-slice";

function QpayModal({ show, onHide, base64Img, invoince, id }) {
  const dispatch = useDispatch();
  const onCloseModal = () => {
    onHide();
  };
  const onRefresh = useCallback((invoince) => {
    axios
      .get(
        `https://altanzaan.org/api/v1/products/check/challbacks/${invoince}/${id}`
      )
      .then((res) => {
        if (res.data.success) {
          onCloseModal();
          dispatch(deleteAllFromCart());
          cogoToast.success(
            "Төлбөр амжилттай хийгдлээ заасан хаягаар хүргэлтэд гарахдаа холбогдох болно.",
            { position: "top-center" }
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body">
        <div className="col-lg-12 align-items-center justify-conent-center"  >
        <img
          alt="Base64"
          src={`data:image/png;base64,${base64Img}`}
          width={400}
          height={400}
        />
        <div className="pro-details-cart btn-hover">
          <button onClick={() => onRefresh(invoince)}> Төлбөр шалгах </button>
        </div>
        </div>
      </div>
    </Modal>
  );
}

QpayModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
  base64Img: PropTypes.string,
  invoince: PropTypes.string,
  id: PropTypes.string,
};

export default QpayModal;
