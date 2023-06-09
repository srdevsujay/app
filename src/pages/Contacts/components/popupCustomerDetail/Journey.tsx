import React from "react";
import venta from "../../../../assets/images/venta.svg";
import clickIcon from "../../../../assets/images/click.svg";
import telephone from "../../../../assets/images/telephone.svg";
import ojo from "../../../../assets/images/ojo.png";
import _ from "lodash";
import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { FormatNumber } from "../../../../utilities/FormatNumber";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useAppSelector } from "../../../../hooks/appDispatch";
import {
  Recorrido,
  Accordion,
} from "../../styled-components/customerDetail.Styled";
import { Tooltip } from "@mui/material";

const Journey = ({ currentJourney, time_Zone }: any) => {
  return (
    <Accordion>
      {_.orderBy(
        currentJourney,
        ["date", "time", "tag"],
        ["desc", "desc", "asc"]
      )?.map((journey, index) => (
        <Recorrido className="recorrido" key={index}>
          <span className="separator-route"></span>
          {/* <div className="img-recorrido"> */}
          <div
            className={
              journey.tag !== ""
                ? journey.tag.substr(0, 1) === "@"
                  ? "back-source-tag-recorrido img-recorrido"
                  : journey.tag.substr(0, 1) === "!"
                  ? "back-action-tag-recorrido img-recorrido"
                  : journey.tag.substr(0, 1) === "#"
                  ? "back-telephone-tag-recorrido img-recorrido"
                  : "back-sale-tag-recorrido img-recorrido img-recorrido"
                : journey.event_name === "Click on Pop Up" ||
                  journey.event_name === "Click on Video" ||
                  journey.event_name === "Click on Purchase" ||
                  journey.event_name === "Click on Reservation"
                ? "back-source-tag-recorrido img-recorrido"
                : journey.event_name === "Manual Sale"
                ? "back-sale-tag-recorrido img-recorrido"
                : journey.event_name === "Click on schedule"
                ? "back-telephone-tag-recorrido img-recorrido"
                : journey.event_name === "Page View" ||
                  journey.event_name === "Page Checkout"
                ? "back-view-tag-recorrido img-recorrido"
                : ""
            }
          >
            {
              journey.tag !== "" ? (
                journey.tag.substr(0, 1) === "@" ? (
                  <img src={clickIcon} alt="" className="venta" />
                ) : journey.tag.substr(0, 1) === "!" ? (
                  <CheckCircleOutlinedIcon
                    style={{
                      color: "#F08303",
                      fontSize: "17px",
                      marginTop: "2px",
                      marginRight: "4px",
                    }}
                  />
                ) : journey.tag.substr(0, 1) === "#" ? (
                  <img src={telephone} alt="" className="venta" />
                ) : (
                  <img src={venta} alt="" className="venta" />
                )
              ) : journey.event_name === "Click on Pop Up" ||
                journey.event_name === "Click on Video" ||
                journey.event_name === "Click on Purchase" ||
                journey.event_name === "Click on Reservation" ? (
                <img src={clickIcon} alt="" className="venta" />
              ) : // <img src={ clickIcon } alt="" className='clickIcon'/>
              // journey?.tag.substring(1,0) === "$"
              journey.event_name === "Manual Sale" ? (
                <img src={venta} alt="" className="venta" />
              ) : journey.event_name === "Click on schedule" ? (
                <img src={telephone} alt="" className="venta" />
              ) : journey.event_name === "Page View" ||
                journey.event_name === "Page Checkout" ? (
                <img src={ojo} alt="" className="venta" />
              ) : (
                ""
              )

              // <CheckCircleOutlinedIcon style={{color: "#F08303"}} />
            }
          </div>
          <div
            className={
              // journey?.tag.substring(1,0) === "@" ? "back-source" : journey?.tag.substring(1,0) === "$" ? "back-sale" : "back-action"} key={`${index}`
              journey.tag !== ""
                ? journey.tag.substr(0, 1) === "@"
                  ? "back-source"
                  : journey.tag.substr(0, 1) === "!"
                  ? "back-action"
                  : journey.tag.substr(0, 1) === "#"
                  ? "back-telephone"
                  : "back-sale"
                : journey.event_name === "Click on Pop Up" ||
                  journey.event_name === "Click on Video" ||
                  journey.event_name === "Click on Purchase" ||
                  journey.event_name === "Click on Reservation"
                ? "back-source"
                : journey.event_name === "Manual Sale"
                ? "back-sale"
                : journey.event_name === "Click on schedule"
                ? "back-telephone"
                : journey.event_name === "Page View" ||
                  journey.event_name === "Page Checkout"
                ? "back-view"
                : ""
            }
          >
            <div className="d-flex align-items-center content-recorrido">
              <span>{formattTimeZone(journey.date, time_Zone)}</span>
              <span>|</span>
              {/* <span>{journey.ts}</span> */}
              <span className="event_name">
                {journey.tag !== ""
                  ? journey.tag.substr(0, 1) === "@"
                    ? "Click en"
                    : journey.tag.substr(0, 1) === "!"
                    ? "Objetivo de"
                    : journey.tag.substr(0, 1) === "#"
                    ? "Agendó"
                    : "Compra de"
                  : journey.event_name === "Click on Pop Up"
                  ? "Click en"
                  : journey.event_name === "Click on Video"
                  ? "Click en"
                  : journey.event_name === "Click on Purchase"
                  ? "Click en"
                  : journey.event_name === "Click on Reservation"
                  ? "Click en"
                  : journey.event_name === "Manual Sale"
                  ? "Compra de"
                  : journey.event_name === "Click on schedule"
                  ? "Agendó"
                  : journey.event_name === "Page View"
                  ? "Visita"
                  : journey.event_name === "Page Checkout"
                  ? "Pago"
                  : ""}
              </span>
              {journey.event_name === "Manual Sale" ||
              journey.tag.substr(0, 1) === "$" ? (
                <p style={{ marginBottom: "0" }}>
                  <span style={{ marginLeft: "5px" }}>{journey.product}</span>
                  <span>
                    <FormatNumber number={journey?.price} />
                  </span>
                </p>
              ) : journey.event_name === "Click on schedule" ||
                journey.tag.substr(0, 1) === "#" ? (
                // <span class="hovertext" data-hover={journey.url}>
                //   {journey.tag.substr(1)}
                // </span>
                <span>{journey.tag.substr(1)}</span>
              ) : journey.event_name === "Click on schedule" ||
                journey.tag.substr(0, 1) === "@" ? (
                // <span class="hovertext" data-hover={journey.url}>
                //   {journey.tag.substr(1)}
                // </span>
                <span>{journey.tag.substr(1)}</span>
              ) : journey.event_name === "Click on schedule" ||
                journey.tag.substr(0, 1) === "!" ? (
                // <span class="hovertext" data-hover={journey.url}>
                //   {journey.tag.substr(1)}
                // </span>
                <span>{journey.tag.substr(1)}</span>
              ) : (
                <span>{journey.url.substr(7)}</span>
              )}
            </div>
            <div className="tag-recorrido">
              {journey.tag.length === 0 ? (
                ""
              ) : (
                <div
                  className={
                    // journey?.tag.substring(1,0) === "@" ? "back-source_detail_user" : journey?.tag.substring(1,0) === "$" ? "back-sale_detail_user" : "back-action_detail_user"
                    journey.tag !== ""
                      ? journey.tag.substr(0, 1) === "@"
                        ? "back-source_detail_user"
                        : journey.tag.substr(0, 1) === "!"
                        ? "back-action_detail_user"
                        : journey.tag.substr(0, 1) === "#"
                        ? "back_telephone_detail_user"
                        : "back-sale_detail_user"
                      : journey.event_name === "Click on Pop Up" ||
                        journey.event_name === "Click on Video" ||
                        journey.event_name === "Click on Purchase" ||
                        journey.event_name === "Click on Reservation"
                      ? "back-source_detail_user"
                      : journey.event_name === "Manual Sale"
                      ? "back-sale_detail_user"
                      : journey.event_name === "Click on schedule"
                      ? "back_telephone_detail_user"
                      : journey.event_name === "Page View" ||
                        journey.event_name === "Page Checkout"
                      ? "back_view_detail_user"
                      : ""
                  }
                >
                  {journey.tag !== "" ? (
                    journey.tag.substr(0, 1) === "@" ? (
                      <img src={clickIcon} alt="" className="venta" />
                    ) : journey.tag.substr(0, 1) === "!" ? (
                      <CheckCircleOutlinedIcon
                        style={{
                          color: "#F08303",
                          fontSize: "17px",
                          marginTop: "2px",
                          marginRight: "4px",
                        }}
                      />
                    ) : journey.tag.substr(0, 1) === "#" ? (
                      <img src={telephone} alt="" className="venta" />
                    ) : (
                      <img src={venta} alt="" className="venta" />
                    )
                  ) : journey.event_name === "Click on Pop Up" ||
                    journey.event_name === "Click on Video" ||
                    journey.event_name === "Click on Purchase" ||
                    journey.event_name === "Click on Reservation" ? (
                    <img src={clickIcon} alt="" className="venta" />
                  ) : // <img src={ clickIcon } alt="" className='clickIcon'/>
                  // journey?.tag.substring(1,0) === "$"
                  journey.event_name === "Manual Sale" ? (
                    <img src={venta} alt="" className="venta" />
                  ) : journey.event_name === "Click on schedule" ? (
                    <img src={telephone} alt="" className="venta" />
                  ) : journey.event_name === "Page View" ||
                    journey.event_name === "Page Checkout" ? (
                    <img src={ojo} alt="" className="venta" />
                  ) : (
                    ""
                  )}
                  <span
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      fontFamily: "Helvetica-NeueL-Title",
                      marginLeft: "5px",
                    }}
                  >
                    {journey?.tag.substr(1)}
                  </span>
                </div>
              )}
              {journey.adset_name === null ? (
                ""
              ) : journey.adset_name !== "" ? (
                <div
                  className={
                    // journey?.tag.substring(1,0) === "@" ? "back-source_detail_user" : journey?.tag.substring(1,0) === "$" ? "back-sale_detail_user" : "back-action_detail_user"
                    journey.tag !== ""
                      ? journey.tag.substr(0, 1) === "@"
                        ? "back-source_detail_user ml-2"
                        : journey.tag.substr(0, 1) === "!"
                        ? "back-action_detail_user ml-2"
                        : journey.tag.substr(0, 1) === "#"
                        ? "back_telephone_detail_user ml-2"
                        : "back-sale_detail_user ml-2"
                      : journey.event_name === "Click on Pop Up" ||
                        journey.event_name === "Click on Video" ||
                        journey.event_name === "Click on Purchase" ||
                        journey.event_name === "Click on Reservation"
                      ? "back-source_detail_user ml-2"
                      : journey.event_name === "Manual Sale"
                      ? "back-sale_detail_user ml-2"
                      : journey.event_name === "Click on schedule"
                      ? "back_telephone_detail_user ml-2"
                      : journey.event_name === "Page View" ||
                        journey.event_name === "Page Checkout"
                      ? "back_view_detail_user ml-2"
                      : ""
                  }
                >
                  <Tooltip
                    title={
                      <>
                        <span>{`CP: ${journey.campaign} / CA: ${journey.adset_name}`}</span>
                      </>
                    }
                    placement="top"
                  >
                    <span
                      style={{
                        color: "#000",
                        fontSize: "12px",
                        fontFamily: "Helvetica-NeueL-Title",
                        marginLeft: "5px",
                      }}
                    >
                      {journey?.ad_name}
                    </span>
                  </Tooltip>
                </div>
              ) : journey.ct === "" ? (
                ""
              ) : (
                <div
                  className={
                    // journey?.tag.substring(1,0) === "@" ? "back-source_detail_user" : journey?.tag.substring(1,0) === "$" ? "back-sale_detail_user" : "back-action_detail_user"
                    journey.tag !== ""
                      ? journey.tag.substr(0, 1) === "@"
                        ? "back-source_detail_user ml-2"
                        : journey.tag.substr(0, 1) === "!"
                        ? "back-action_detail_user ml-2"
                        : journey.tag.substr(0, 1) === "#"
                        ? "back_telephone_detail_user ml-2"
                        : "back-sale_detail_user ml-2"
                      : journey.event_name === "Click on Pop Up" ||
                        journey.event_name === "Click on Video" ||
                        journey.event_name === "Click on Purchase" ||
                        journey.event_name === "Click on Reservation"
                      ? "back-source_detail_user"
                      : journey.event_name === "Manual Sale"
                      ? "back-sale_detail_user"
                      : journey.event_name === "Click on schedule"
                      ? "back_telephone_detail_user"
                      : journey.event_name === "Page View" ||
                        journey.event_name === "Page Checkout"
                      ? "back_view_detail_user "
                      : ""
                  }
                >
                  <span
                    // className="hovertext"
                    // data-hover={`${journey.ad_name} - ${journey.campaign}`}
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      fontFamily: "Helvetica-NeueL-Title",
                      marginLeft: "5px",
                    }}
                  >
                    {journey?.ct}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Recorrido>
      ))}
    </Accordion>
  );
};

export default Journey;
