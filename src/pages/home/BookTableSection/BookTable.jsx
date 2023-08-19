import Button from "../../../components/Button";
import InputBox from "../../../components/InputBox/InputBox";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "./booktable.css";

export default function BookTable({goToLink}) {
  const details = {
    title: "Reservations",
    heading: "Book A Table",
    buttonText: "Book Now",
  };

  const optionList = [
    {
      Guests: [
        { value: "1 Person", label: "1 Person" },
        { value: "2 Persons", label: "2 Persons" },
        { value: "3 Persons", label: "3 Persons" },
        { value: "4 Persons", label: "4 Persons" },
        { value: "5 Persons", label: "5 Persons" },
      ],
    },
    {
      Date: [
        { value: "Monday", label: "Monday" },
        { value: "Tuesday", label: "Tuesday" },
        { value: "Wednesday", label: "Wednesday" },
        { value: "Thursday", label: "Thursday" },
        { value: "Friday", label: "Friday" },
      ],
    },
    {
      Time: [
        { value: "09:00", label: "09:00" },
        { value: "12:00", label: "12:00" },
        { value: "15:00", label: "15:00" },
        { value: "18:00", label: "18:00" },
        { value: "21:00", label: "21:00" },
      ],
    },
  ];

  const goToContact = () => {goToLink("/contact")}
  return (
    <>
      <section className="BookTable">
        <div className="page-container">
          <PageHeader
            title={details.title}
            heading={details.heading}
          />
          <div className="dropDownLists">
            {optionList.map((options, index) => (
              <InputBox
                key={Object.keys(options)[0]}
                optionList={Object.values(options)[0]}
                inputFor={Object.keys(options)[0]}
              />
            ))}
          </div>

          <Button text={details.buttonText} btnClick={goToContact}/>
        </div>
      </section>
    </>
  );
}
