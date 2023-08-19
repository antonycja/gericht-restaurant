import "./promotionspage.css";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Button from "../../../components/Button";
import Promotion from "../../../components/Promotions/Promotion";
export default function PromotionsPage({ dataIndex, goToLink }) {
  const promotionImage = dataIndex.promoImg;
  const data = {
    pageTitle: "Menu that fits your palate",
    pageHeading: "Today’s Special",
    buttonText: "View More",
  };

  const goToServices = () => {
    goToLink("/services");
  };
  return (
    <>
      <div className="promotions-page">
        <div className="pageoverlay">
          <section>
            <div className="page-container">
              <PageHeader
                title={data.pageTitle}
                heading={data.pageHeading}
              />
              <div className="promotions">
                {/* right */}
                <Promotion
                  title={dataIndex.promotionLeft.promoTitle}
                  contents={dataIndex.promotionLeft.contents}
                />
                <div className="promotionImage">
                  <img
                    src={promotionImage}
                    alt="promotion image"
                  />
                </div>
                {/* left */}
                <Promotion
                  title={dataIndex.promotionRight.promoTitle}
                  contents={dataIndex.promotionRight.contents}
                />
              </div>
              <Button
                text={data.buttonText}
                btnClick={goToServices}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
