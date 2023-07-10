import "./promotion.css";
export default function Promotion({ title = "title", contents }) {
  return (
    <div className="promoContent">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="promos">
        {contents.map((promoItem, index) => (
          <div
            className="promo"
            key={index}
          >
            <div className="promo-title">
              <h5 className="promo-title-text">{promoItem.itemName}</h5>
              <div className="promo-line"></div>
              <div className="promo-price">
                <h5>${promoItem.itemPrice}</h5>
              </div>
            </div>

            <div className="tag">
              {promoItem.itemTag.map((tag, index) => (
                <p key={index}>
                  {tag}
                  {index !== promoItem.itemTag.length - 1 && (
                    <span>|</span>
                  )}{" "}
                </p>
              ))}
              {/* hi<span>|</span>there */}
            </div>
          </div>
        ))}

        {/* <div className="promo">
          <div className="promo-title">
            <h5 className="promo-title-text">{itemName}</h5>
            <div className="promo-line"></div>
            <div className="promo-price">
              <h5>${itemPrice}</h5>
            </div>
          </div>

          <p>
            
            hi<span>|</span>there
          </p>
        </div> */}
      </div>
    </div>
  );
}
