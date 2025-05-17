import "../../../../public/styles/ServiceCard.css";

interface serviceCardProps {
  title: string;
  description: string;
}

export default function Card2(props: serviceCardProps) {
  return (
    <>
      <div className="service-item-box">
        <div className="service-item-box-header-icon">
          <div className="service-item-box-header-icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
        </div>
        <div className="service-item-box-header">
          <strong className="service-item-box-header-title">
            {props.title}
          </strong>
        </div>
        <div className="service-item-box-body">
          <span className="service-item-box-body-description">
            {props.description}
          </span>
        </div>
      </div>
    </>
  );
}
