import phone from "../../../../assets/images/phone.svg";
import IPs from "../../../../assets/images/IPs.svg";
import emailIcon from "../../../../assets/images/email.svg";
import { useAppSelector } from "../../../../hooks/appDispatch";

const Data = ({ phonesandips, emails, emailCustomerDetail }: any) => {
  const { email } = useAppSelector((state) => state.user.user);

  return (
    <div className="accordion2 nt-child-ips">
      {phonesandips?.map((traffic: any, index: any) => (
        <div className="item2 mt-4" key={`${index}`}>
          <div className="title2 mb-2" style={{ paddingLeft: "20px" }}>
            <div className="row mb-3">
              <div className="12">
                <img src={IPs} style={{ width: 15, borderRadius: "50%" }} />
                <span className="title-ips">IPS</span>
              </div>
              <div className="col-sm-12">
                <span className="titleAccordeon2 ips">
                  {traffic.traffic_source_ip}
                </span>
              </div>
            </div>
            <div className="row mb-3">
              <div className="12">
                <img
                  src={emailIcon}
                  style={{ width: 15, borderRadius: "50%" }}
                />
                <span className="title-ips">E-MAIL</span>
              </div>
              <div className="col-sm-12">
                <span className="titleAccordeon2 ips">
                  {emailCustomerDetail}
                </span>
              </div>
              {emails.map((email: any) => (
                <div className="col-sm-12">
                  <span className="titleAccordeon2 ips">{email.email}</span>
                </div>
              ))}
            </div>
            <div className="row mb-3">
              <div className="12">
                <img src={phone} style={{ width: 15, borderRadius: "50%" }} />
                <span className="title-ips">TELEFONO</span>
              </div>
              <div className="col-sm-12">
                <span className="titleAccordeon2 ips">
                  {traffic.phone ? "" : "No hay telefonos registrados"}
                </span>
                {/* {traffic.phone ? <hr className="hr-width"></hr> : <h4 className="color-h4 mt-3">No hay telefonos registrados.</h4>} */}
              </div>
            </div>
            {traffic.traffic_source_ip ? (
              ""
            ) : (
              <h4 className="color-h4 mt-3">No hay IPs registradas.</h4>
            )}
          </div>
        </div>
      ))}
      {phonesandips.length === 0 && (
        <h4 className="color-h4 ip-empty">No hay IPs registradas.</h4>
      )}
    </div>
  );
};

export default Data;
