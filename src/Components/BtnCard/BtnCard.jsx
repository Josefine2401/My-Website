import './BtnCard.css';

export const BtnCard = ({ btn }) => {
  return (
    <div className="button-card">
      <button className="btn-card-button">{btn}</button>
    </div>
  );
};

export default BtnCard;