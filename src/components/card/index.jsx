import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import "./Card.css";

const Card = ({ datos, primaryColor, onClick, onDelete, onEdit }) => {
  const { title, photo } = datos;

  const handleClick = () => {
    onClick();
    const bannerElement = document.getElementById("banner");
    if (bannerElement) {
      bannerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="card"
      style={{ cursor: "pointer", "--primary-color": primaryColor }}
    >
      <figure className="cardHeader">
        <img
          src={photo}
          alt={title}
          onClick={handleClick}
          className="cardImage"
        />
        <figcaption className="cardIcons">
          <div
            className="card-icon-wrapper card-icon-delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <RiDeleteBin2Line className="cardIcon" />
            <span className="cardIconText">BORRAR</span>
          </div>
          <div
            className="card-icon-wrapper card-icon-edit"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(datos);
            }}
          >
            <RiEdit2Line className="cardIcon" />
            <span className="cardIconText">EDITAR</span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};


export default Card;
