import { NumericFormat } from "react-number-format";
import { formatMonthDay } from "../../../../utilities/formatMonthDay";
import { CampaignData } from "../../models/dashboard.model";
import {
  BackColorsTable,
  DateData,
} from "../../styled-components/dashboardStyled";

export const TypeDashboardData = (
  funnelData: CampaignData,
  typeDashboard: any
) => {
  let columnsToSet = [];
  console.log("funnelData---", funnelData);
  console.log("typeDashboard---", typeDashboard);

  if (typeDashboard === 1) {
    console.log("entra al case 1");
    columnsToSet = [
      {
        title: "FECHA",
        value: "FECHA",
        field: "date_start",
        render: (funnelData: CampaignData) => (
          <div className="widthDate">
            <span>{`${formatMonthDay(funnelData?.date_start)}`}</span>
          </div>
        ),
      },
      {
        // title: (
        //   <div class="tooltip">
        //     $ACV
        //     <span class="tooltiptext">
        //       ACV: Dinero promedio que gasta una persona en productos.
        //     </span>
        //   </div>
        // ),
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="ACV: Dinero promedio que gasta una persona en productos."
          >
            $ACV
          </div>
        ),
        field: "ACV",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.ACV == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.ACV.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <BackColorsTable>
              <span>{`$${funnelData?.ACV.toFixed(2)}`}</span>
            </BackColorsTable>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="B: Cantidad de personas que agendan una cita en el calendario de
            un vendedor."
          >
            #B
          </div>
        ),
        field: "B",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.B == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.B}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.B < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.B < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.B}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
                ;
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="BR: Porcentaje de personas de las que hicieron clic al final del
              vídeo que terminaron agendando. Con Aplicación Previa: Cantidad
              de personas que aplican que terminan agendando."
          >
            %BR
          </div>
        ),
        field: "BR",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.BR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.BR.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.BR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.BR < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.BR.toFixed(2)}%`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Cohort: Promedio de días desde que una persona se registra al
            funnel hasta que compra."
          >
            #Cohort
          </div>
        ),
        field: "cohort",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.cohort == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.cohort}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.cohort < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.cohort < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.cohort}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="DWS: Que cantidad de personas compran un downsell."
          >
            #DWS
          </div>
        ),
        field: "dws",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.dws == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.dws}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.dws < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.dws < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.dws}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="US: Que cantidad de compradores del producto principal compran
            el upsell o bump."
          >
            #US
          </div>
        ),
        field: "us",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.us == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.us}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.us < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.us < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.us}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="UCR: Que porcentaje de compradores del producto principal
            compran el upsell o bump."
          >
            %UCR
          </div>
        ),
        field: "UCR",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.UCR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.UCR.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.UCR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.UCR < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.UCR.toFixed(2)}%`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="DWCR: Porcentaje de personas que compran downsell sobre
            compradores, leads o Asistentes."
          >
            %DWCR
          </div>
        ),
        field: "DWCR",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.DWCR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.DWCR.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.DWCR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.DWCR < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.DWCR.toFixed(2)}%`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Revenue: Dinero total generado y a generar."
          >
            $Revenue
          </div>
        ),
        field: "revenue",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.revenue == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.revenue.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.revenue < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.revenue < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.revenue.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          // <div class="tooltip">
          //   $CAC
          //   <span class="tooltiptext">
          //     CAC: Cuánto dinero hay que invertir para adquirir un cliente.
          //   </span>
          // </div>
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title=" CAC: Cuánto dinero hay que invertir para adquirir un cliente."
          >
            $CAC
          </div>
        ),
        field: "CAC",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.CAC == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.CAC.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CAC < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CAC < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.CAC.toFixed(2)}`}</span>
            </div>
          ),
        class: "text-left",
      },
      {
        title: (
          // <div class="tooltip">
          //   %CKCR
          //   <span class="tooltiptext">
          //     CKCR: Porcentaje de personas que compran de las que visitan el
          //     checkout o carrito de compras.
          //   </span>
          // </div>
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CKCR: Porcentaje de personas que compran de las que visitan el
            checkout o carrito de compras."
          >
            %CKCR
          </div>
        ),
        field: "CKCR",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.CKCR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.CKCR.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CKCR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CKCR < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.CKCR.toFixed(2)}%`}</span>
            </div>
          ),
        class: "text-left",
      },
      {
        title: (
          // <div class="tooltip">
          //   #CKL
          //   <span class="tooltiptext">
          //     CKL: Cantidad de personas que inician el proceso de compra.
          //   </span>
          // </div>
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CKL: Cantidad de personas que inician el proceso de compra."
          >
            #CKL
          </div>
        ),
        field: "CKL",
        sign: "",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.CKL == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.CKL}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CKL < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CKL < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.CKL}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CKOR: Porcentaje de personas que visitan el checkout y se
            registran."
          >
            %CKOR
          </div>
        ),
        field: "CKOR",
        sign: "",
        sortable: true,
        class: "text-left",
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.CKOR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.CKOR.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CKOR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CKOR < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.CKOR.toFixed(2)}%`}</span>
            </div>
          ),
      },
      {
        title: (
          // <div class="tooltip">
          //   #CPCKL
          //   <span class="tooltiptext">
          //     CPCKL: Cuanto dinero debo invertir para conseguir que alguien
          //     inicie una compra.
          //   </span>
          // </div>
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPCKL: Cuanto dinero debo invertir para conseguir que alguien
            inicie una compra."
          >
            #CPCKL
          </div>
        ),
        field: "CPCKL",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.CPCKL == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.CPCKL}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CPCKL < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CPCKL < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.CPCKL}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPL: Cuánto dinero hay que invertir en publicidad para obtener
            un registro de cliente potencial."
          >
            $CPL
          </div>
        ),
        field: "CPL",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.CPL == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.CPL.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CPL < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CPL < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.CPL.toFixed(2)}`}</span>
            </div>
          ),
        class: "text-left",
      },
      {
        // title: "%CR",
        title: (
          <div id="tooltip" data-toggle="tooltip" data-placement="top" title="">
            %CR
          </div>
        ),
        field: "CR",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.CR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.CR.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CR < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.CR.toFixed(2)}%`}</span>
            </div>
          ),
        class: "text-left",
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CTA: Cantidad de personas que luego de ver el video o webinar
            hacen clic en el botón para tomar la acción que se les pide, sea
            comprar o agendar."
          >
            #CTA
          </div>
        ),
        field: "CTA",
        sign: "",
        sortable: true,
        value: "",
        class: "text-left",
        render: (funnelData: CampaignData) =>
          funnelData?.CTA == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.CTA}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.CTA < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.CTA < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.CTA}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="EPC: Cuanto dinero gano por cada clic (revenue o cash)."
          >
            $EPC
          </div>
        ),
        field: "EPC",
        sortable: true,
        class: "text-left",
        render: (funnelData: CampaignData) =>
          funnelData?.EPC == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.EPC.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.EPC < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.EPC < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.EPC.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="EPV: Cuánto dinero gano por cada visita a mi web o funnel
            (revenue o cash)."
          >
            $EPV
          </div>
        ),
        field: "EPV",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.EPV == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.EPV.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.EPV < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.EPV < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.EPV.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="FCR: Porcentaje de leads del funnel que compran un producto."
          >
            $FCR
          </div>
        ),
        field: "FCR",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.FCR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.FCR.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.FCR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.FCR < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.FCR.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          // <div class="tooltip">
          //   #ROI
          //   <span class="tooltiptext">
          //     ROI: Puede ser sobre facturación o cash. Por cuánto multiplico
          //     mi dinero invertido en anuncios.
          //   </span>
          // </div>
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="ROI: Puede ser sobre facturación o cash. Por cuánto multiplico
            mi dinero invertido en anuncios."
          >
            #ROI
          </div>
        ),
        field: "ROI",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.ROI == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.ROI}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.ROI < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.ROI < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.ROI}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
        class: "text-left",
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="cash: Dinero total cobrado."
          >
            $cash
          </div>
        ),
        field: "cash",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.cash == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.cash.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.cash < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.cash < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.cash.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="clicks: Cantidad de personas que hacen clic en el link de tu
            anuncio o link."
          >
            #clicks
          </div>
        ),
        field: "clicks",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.clicks == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.clicks}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.clicks < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.clicks < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.clicks}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Clicks Organicos: Clicks capturados mediante el tracking a
            través del script del funnel.clicks: Cantidad de personas que hacen clic en el link de tu
            anuncio o link."
          >
            #Clicks Organicos
          </div>
        ),
        field: "clicks_organic",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.clicks_organic == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.clicks_organic}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.clicks_organic < 0
                  ? "back-danger"
                  : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.clicks_organic < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.clicks_organic}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPC: Cuánto dinero hay que invertir para que alguien haga clic
            en el anuncio."
          >
            $CPC
          </div>
        ),
        field: "cpc",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.cpc == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.cpc.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.cpc < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.cpc < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.cpc.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPM: Cuánto dinero cuesta obtener 1.000 impresiones de
            publicidad."
          >
            $CPM
          </div>
        ),
        field: "cpm",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.cpm == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.cpm.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.cpm < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.cpm < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.cpm.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          <div id="tooltip" data-toggle="tooltip" data-placement="top" title="">
            #Frecuencia
          </div>
        ),
        field: "frequency",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.frequency == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.frequency}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.frequency < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.frequency < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.frequency}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Impresiones: Impresiones."
          >
            #Impresiones
          </div>
        ),
        field: "impressions",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.impressions == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.impressions}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.impressions < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.impressions < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.impressions}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Leads: Cantidad de clientes potenciales que dejan sus datos en
            un formulario."
          >
            #Leads
          </div>
        ),
        field: "leeds",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.leeds == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.leeds}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.leeds < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.leeds < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.leeds}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        // title: (
        //   <div class="tooltip">
        //     %SLTCK
        //     <span class="tooltiptext">
        //       SLTCK: Porcentaje de personas que pasan de la carta de ventas al
        //       checkout.
        //     </span>
        //   </div>
        // ),
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="SLTCK: Porcentaje de personas que pasan de la carta de ventas al
            checkout."
          >
            %SLTCK
          </div>
        ),
        field: "ctr",
        sign: "",
        sortable: true,
        class: "text-left",
        value: "",
        render: (funnelData: CampaignData) =>
          funnelData?.SLTCK == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.SLTCK.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.SLTCK < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.SLTCK < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.SLTCK.toFixed(2)}%`}</span>
            </div>
          ),
      },
      {
        // title: (
        //   <div class="tooltip">
        //     %SPCR
        //     <span class="tooltiptext">
        //       SPCR: Qué porcentaje de visitas compran en una carta de venta.
        //     </span>
        //   </div>
        // ),
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="SPCR: Qué porcentaje de visitas compran en una carta de venta."
          >
            %SPCR
          </div>
        ),
        field: "SPCR",
        sign: "",
        sortable: true,
        value: "",
        class: "text-left",
        render: (funnelData: CampaignData) =>
          funnelData?.SPCR == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.SPCR.toFixed(2)}%`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.SPCR < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.SPCR < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.SPCR.toFixed(2)}%`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Profit: Dinero restante luego de descontar costo de anuncios."
          >
            $Profit
          </div>
        ),
        field: "profit",
        sign: "",
        sortable: true,
        class: "text-left",
        render: (funnelData: CampaignData) =>
          funnelData?.profit == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.profit.toFixed(2)}`}
              </span>
            </div>
          ) : (
            // console.log("funnelData?.profit", funnelData?.profit < 0)
            <div
              className={`${
                funnelData?.profit < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.profit < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.profit.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Reach: El número de personas que ven tu contenido."
          >
            #Reach
          </div>
        ),
        field: "reach",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.reach == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.reach}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.reach < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.reach < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.reach}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Sales: Cantidad de personas que compran un producto."
          >
            #Sales
          </div>
        ),
        field: "sales",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.sales == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                <NumericFormat
                  value={funnelData?.sales}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.sales < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.sales < 0 ? "text-danger" : "text-green"
                }`}
              >
                <NumericFormat
                  value={funnelData?.sales}
                  allowLeadingZeros
                  thousandSeparator=","
                  displayType="text"
                />
              </span>
            </div>
          ),
      },
      {
        // title: (
        //   <div class="tooltip">
        //     $Inversión
        //     <span class="tooltiptext">Inversión: Inversion en anuncios.</span>
        //   </div>
        // ),
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Inversión: Inversion en anuncios."
          >
            $Inversión
          </div>
        ),
        field: "spend",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.spend == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`$${funnelData?.spend.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.spend < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.spend < 0 ? "text-danger" : "text-green"
                }`}
              >{`$${funnelData?.spend.toFixed(2)}`}</span>
            </div>
          ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Vistas: Vistas al landing page."
          >
            #Vistas
          </div>
        ),
        field: "views",
        sortable: true,
        render: (funnelData: CampaignData) =>
          funnelData?.views == 0 ? (
            <div className="back-grey">
              <span className="text-grey">
                {`${funnelData?.views.toFixed(2)}`}
              </span>
            </div>
          ) : (
            <div
              className={`${
                funnelData?.views < 0 ? "back-danger" : "back-green-table"
              }`}
            >
              <span
                className={`${
                  funnelData?.views < 0 ? "text-danger" : "text-green"
                }`}
              >{`${funnelData?.views.toFixed(2)}`}</span>
            </div>
          ),
      },
    ];
    return columnsToSet;
  } else if (typeDashboard === 2) {
    console.log("entra al case 2");
    columnsToSet = [
      {
        title: "FECHA",
        value: "FECHA",
        field: "date_start",
        render: (funnelData: CampaignData) => (
          <DateData className="dateData">
            <span>{`${formatMonthDay(funnelData?.date_start)}`}</span>
          </DateData>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="ACV: Dinero promedio que gasta una persona en productos."
          >
            $ACV
          </div>
          //   <div class="tooltip">
          //   $ACV
          //   <span class="tooltiptext">
          //     ACV: ACV: Dinero promedio que gasta una persona en productos.
          //   </span>
          // </div>
        ),
        field: "ACV",
        sign: "",
        sortable: true,
        value: "ACV",
        name: "ACV",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.ACV < 0
                ? "back-danger"
                : funnelData?.ACV > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.ACV.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
        class: "text-left",
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="AT: Cantidad de personas que se registraron asisten a ver el
          video o webinar."
          >
            #AT
          </div>
        ),
        value: "AT",
        field: "AT",
        sign: "",
        sortable: true,
        name: "AT",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.AT < 0
                ? "back-danger"
                : funnelData?.AT > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.AT}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="ATR: Porcentaje de personas que se registraron asisten a ver el
            video o webinar."
          >
            %ATR
          </div>
        ),
        field: "ATR",
        sign: "",
        sortable: true,
        value: "",
        name: "ATR",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.ATR < 0
                ? "back-danger"
                : funnelData?.ATR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.ATR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
        class: "text-left",
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Aps: Cantidad de personas que aplican para agendar."
          >
            #Aps
          </div>
        ),
        field: "Aps",
        name: "Aps",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.Aps < 0
                ? "back-danger"
                : funnelData?.Aps > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.Aps}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="B: Cantidad de personas que agendan una cita en el calendario de
            un vendedor."
          >
            #B
          </div>
        ),
        field: "B",
        name: "B",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.B < 0
                ? "back-danger"
                : funnelData?.B > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.B}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="BR: Porcentaje de personas de las que hicieron clic al final del
              vídeo que terminaron agendando. Con Aplicación Previa: Cantidad
              de personas que aplican que terminan agendando."
          >
            %BR
          </div>
        ),
        field: "BR",
        name: "BR",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.BR < 0
                ? "back-danger"
                : funnelData?.BR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.BR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Cohort: Promedio de días desde que una persona se registra al
            funnel hasta que compra."
          >
            #Cohort
          </div>
        ),
        field: "cohort",
        name: "cohort",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.cohort < 0
                ? "back-danger"
                : funnelData?.cohort > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.cohort}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="DWS: Que cantidad de personas compran un downsell."
          >
            #DWS
          </div>
        ),
        field: "dws",
        name: "dws",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.dws < 0
                ? "back-danger"
                : funnelData?.dws > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.dws}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="US: Que cantidad de compradores del producto principal compran
            el upsell o bump."
          >
            #US
          </div>
        ),
        field: "us",
        name: "us",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.us < 0
                ? "back-danger"
                : funnelData?.us > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.us}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="UCR: Que porcentaje de compradores del producto principal
            compran el upsell o bump."
          >
            %UCR
          </div>
        ),
        field: "UCR",
        name: "UCR",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.UCR < 0
                ? "back-danger"
                : funnelData?.UCR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.UCR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="DWCR: Porcentaje de personas que compran downsell sobre
            compradores, leads o Asistentes."
          >
            %DWCR
          </div>
        ),
        field: "DWCR",
        name: "DWCR",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.DWCR < 0
                ? "back-danger"
                : funnelData?.DWCR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.DWCR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Revenue: Dinero total generado y a generar."
          >
            $Revenue
          </div>
        ),
        field: "revenue",
        name: "revenue",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.revenue < 0
                ? "back-danger"
                : funnelData?.revenue > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.revenue.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="BTS: Porcentaje de ventas sobre el total de agendaciones."
          >
            %BTS
          </div>
        ),
        field: "BTS",
        name: "BTS",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.BTS < 0
                ? "back-danger"
                : funnelData?.BTS > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.BTS.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="APR: Porcentaje de personas de las que hicieron clic al final
            del vídeo que terminaron aplicando."
          >
            %APR
          </div>
        ),
        field: "Apr",
        name: "Apr",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.Apr < 0
                ? "back-danger"
                : funnelData?.Apr > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.Apr.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPB: Cuanto debo invertir para conseguir que una persona agende
            una cita."
          >
            $CPB
          </div>
        ),
        field: "CPB",
        name: "CPB",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.CPB < 0
                ? "back-danger"
                : funnelData?.CPB > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.CPB.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="LTB: Porcentaje de registrados al funnel que agendan sesión."
          >
            %LTB
          </div>
        ),
        field: "LTB",
        name: "LTB",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.LTB < 0
                ? "back-danger"
                : funnelData?.LTB > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.LTB.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="LTBD: Cantidad de días que pasan desde que una persona se
            registra al funnel hasta que agenda."
          >
            LTBD%
          </div>
        ),
        field: "ltbd",
        name: "ltbd",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.ltbd < 0
                ? "back-danger"
                : funnelData?.ltbd > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.ltbd.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="BTSD: Cantidad de días que pasan desde que una persona agenda
            hasta que compra.LTBD: Cantidad de días que pasan desde que una persona se
            registra al funnel hasta que agenda."
          >
            #BTSD
          </div>
        ),
        field: "btsd",
        name: "btsd",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.btsd < 0
                ? "back-danger"
                : funnelData?.btsd > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.btsd}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Cantidad de días que pasan desde que una asiste a la cita hasta
            que compra."
          >
            #SUTSD
          </div>
        ),
        field: "sutds",
        name: "sutds",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.sutds < 0
                ? "back-danger"
                : funnelData?.sutds > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.sutds}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="PPB: Cuanto dinero gano por cada cita (sobre facturación o
              cash)."
          >
            $PPB
          </div>
        ),
        field: "PPB",
        name: "PPB",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.PPB < 0
                ? "back-danger"
                : funnelData?.PPB > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.PPB.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="EPB: Cuánto dinero recibo por cada cita (revenue o cash)."
          >
            $EPB
          </div>
        ),
        field: "EPB",
        name: "EPB",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.EPB < 0
                ? "back-danger"
                : funnelData?.EPB > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.EPB.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CKOR: Porcentaje de personas que visitan el checkout y se
            registran."
          >
            %CKOR
          </div>
        ),
        field: "CKOR",
        name: "CKOR",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.CKOR < 0
                ? "back-danger"
                : funnelData?.CKOR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.CKOR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPAT: Cuánto nos cuesta que alguien asista."
          >
            $CPAT
          </div>
        ),
        field: "CPAT",
        name: "CPAT",
        sign: "",
        sortable: true,
        value: "",
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.CPAT < 0
                ? "back-danger"
                : funnelData?.CPAT > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.CPAT.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: "$CPAp",
        field: "CPAp",
        name: "CPAp",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.CPAp < 0
                ? "back-danger"
                : funnelData?.CPAp > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.CPAp.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
        class: "text-left",
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPL: Cuánto dinero hay que invertir en publicidad para obtener
            un registro de cliente potencial."
          >
            $CPL
          </div>
        ),
        field: "CPL",
        name: "CPL",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.CPL < 0
                ? "back-danger"
                : funnelData?.CPL > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.CPL.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
        class: "text-left",
      },
      {
        title: (
          <div id="tooltip" data-toggle="tooltip" data-placement="top" title="">
            %CR
          </div>
        ),
        field: "CR",
        name: "CR",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.CR < 0
                ? "back-danger"
                : funnelData?.CR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.CR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
        class: "text-left",
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CTA: Cantidad de personas que luego de ver el video o webinar
            hacen clic en el botón para tomar la acción que se les pide, sea
            comprar o agendar."
          >
            #CTA
          </div>
        ),
        field: "CTA",
        name: "CTA",
        sign: "",
        sortable: true,
        value: "",
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.CTA < 0
                ? "back-danger"
                : funnelData?.CTA > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.CTA}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="EPA: Cuánto dinero recibo por cada asistente (revenue o cash)."
          >
            $EPA
          </div>
        ),
        field: "EPA",
        name: "EPA",
        sign: "",
        sortable: true,
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.EPA < 0
                ? "back-danger"
                : funnelData?.EPA > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.EPA.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="EPC: Cuanto dinero gano por cada clic (revenue o cash)."
          >
            $EPC
          </div>
        ),
        field: "EPC",
        name: "EPC",
        sortable: true,
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.EPC < 0
                ? "back-danger"
                : funnelData?.EPC > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.EPC.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="EPL: Cuánto dinero gano por cada Lead o registro (revenue o
              cash)."
          >
            $EPL
          </div>
        ),
        field: "EPL",
        name: "EPL",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.EPL < 0
                ? "back-danger"
                : funnelData?.EPL > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.EPL.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="EPV: Cuánto dinero gano por cada visita a mi web o funnel
            (revenue o cash)."
          >
            $EPV
          </div>
        ),
        field: "EPV",
        name: "EPV",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.EPV < 0
                ? "back-danger"
                : funnelData?.EPV > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.EPV.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="FCR: Porcentaje de leads del funnel que compran un producto."
          >
            $FCR
          </div>
        ),
        field: "FCR",
        name: "FCR",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.FCR < 0
                ? "back-danger"
                : funnelData?.FCR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.FCR.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="LCR: Que % de personas que visitan la página de registro se
            terminan registrando."
          >
            %LCR
          </div>
        ),
        field: "LCR",
        name: "LCR",
        sign: "",
        sortable: true,
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.LCR < 0
                ? "back-danger"
                : funnelData?.LCR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.LCR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="LTA: Porcentaje de registros que hacen clic para agendar o
            comprar (acción)."
          >
            %LTA
          </div>
        ),
        field: "LTA",
        name: "LTA",
        sign: "",
        sortable: true,
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.LTA < 0
                ? "back-danger"
                : funnelData?.LTA > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.LTA.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="LTAp: Porcentaje de registrados al funnel que aplican."
          >
            %LTAp
          </div>
        ),
        field: "LTAp",
        sign: "",
        sortable: true,
        value: "",
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.LTAp < 0
                ? "back-danger"
                : funnelData?.LTAp > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.LTAp.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="LV: Cantidad de personas que visitan una página"
          >
            #LV
          </div>
        ),
        field: "LV",
        sign: "",
        sortable: true,
        class: "text-left",
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.LV < 0
                ? "back-danger"
                : funnelData?.LV > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.LV}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: "Cuenta de dinero",
        field: "account_currency",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.account_currency < 0
                ? "back-danger"
                : funnelData?.account_currency > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.account_currency.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="cash: Dinero total cobrado."
          >
            $cash
          </div>
        ),
        field: "cash",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.cash < 0
                ? "back-danger"
                : funnelData?.cash > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.cash.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="clicks: Cantidad de personas que hacen clic en el link de tu
            anuncio o link."
          >
            #clicks
          </div>
        ),
        field: "clicks",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.clicks < 0
                ? "back-danger"
                : funnelData?.clicks > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.clicks}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Clicks Organicos: Clicks capturados mediante el tracking a
            través del script del funnel. clicks: Cantidad de personas que hacen clic en el link de tu
            anuncio o link."
          >
            #Clicks Organicos
          </div>
        ),
        field: "clicks_organic",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.clicks_organic < 0
                ? "back-danger"
                : funnelData?.clicks_organic > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.clicks_organic}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPC: Cuánto dinero hay que invertir para que alguien haga clic
            en el anuncio."
          >
            $CPC
          </div>
        ),
        field: "cpc",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.cpc < 0
                ? "back-danger"
                : funnelData?.cpc > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.cpc.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="CPM: Cuánto dinero cuesta obtener 1.000 impresiones de
            publicidad."
          >
            $CPM
          </div>
        ),
        field: "cpm",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.cpc < 0
                ? "back-danger"
                : funnelData?.cpc > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.cpc.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Porcentaje de clics en el enlace en comparación con el número de impresiones."
          >
            %CTR
          </div>
        ),
        field: "ctr",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.ctr < 0
                ? "back-danger"
                : funnelData?.ctr > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.ctr.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div id="tooltip" data-toggle="tooltip" data-placement="top" title="">
            #Frecuencia
          </div>
        ),
        field: "frequency",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.frequency < 0
                ? "back-danger"
                : funnelData?.frequency > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.frequency}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Impresiones: Impresiones."
          >
            #Impresiones
          </div>
        ),
        field: "impressions",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.impressions < 0
                ? "back-danger"
                : funnelData?.impressions > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.impressions}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Leads: Cantidad de clientes potenciales que dejan sus datos en
            un formulario."
          >
            #Leads
          </div>
        ),
        field: "leeds",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.leeds < 0
                ? "back-danger"
                : funnelData?.leeds > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.leeds}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Profit: Dinero restante luego de descontar costo de anuncios."
          >
            $Profit
          </div>
        ),
        field: "profit",
        sign: "",
        sortable: true,
        class: "text-left",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.profit < 0
                ? "back-danger"
                : funnelData?.profit > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.profit.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },

      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Sales: Cantidad de personas que compran un producto."
          >
            #Sales
          </div>
        ),
        field: "sales",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.sales < 0
                ? "back-danger"
                : funnelData?.sales > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.sales}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Reach: El número de personas que ven tu contenido."
          >
            #Reach
          </div>
        ),
        field: "reach",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.reach < 0
                ? "back-danger"
                : funnelData?.reach > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.reach}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Porcentaje de personas que compran del total de asistencias. Puede ser del producto principal, de downsells, o ambas."
          >
            %SCR
          </div>
        ),
        field: "SCR",
        sign: "",
        sortable: true,
        value: "",
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.SCR < 0
                ? "back-danger"
                : funnelData?.SCR > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`${funnelData?.SCR.toFixed(2)}%`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: "$spend",
        field: "spend",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.spend < 0
                ? "back-danger"
                : funnelData?.spend > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>{`$${funnelData?.spend.toFixed(2)}`}</span>
          </BackColorsTable>
        ),
      },
      {
        title: (
          <div
            id="tooltip"
            data-toggle="tooltip"
            data-placement="top"
            title="Vistas: Vistas al landing page."
          >
            #Vistas
          </div>
        ),
        field: "views",
        sortable: true,
        render: (funnelData: CampaignData) => (
          <BackColorsTable
            className={`${
              funnelData?.views < 0
                ? "back-danger"
                : funnelData?.views > 0
                ? "back-green-table"
                : "back-grey"
            }`}
          >
            <span>
              <NumericFormat
                value={funnelData?.views}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </span>
          </BackColorsTable>
        ),
      },
    ];
    return columnsToSet;
  }
  // else if (typeDashboard === 3) {
  //   console.log("entra al case 3");
  //   columnsToSet = [
  //     {
  //       title: "Fecha",
  //       value: "FECHA",
  //       field: "date_start",
  //       render: (funnelData: CampaignData) => (
  //         <div className="widthDate">
  //           <span>{`${funnelData?.date_start}`}</span>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="ACV: Dinero promedio que gasta una persona en productos."
  //         >
  //           $ACV
  //         </div>
  //       ),
  //       field: "ACV",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ACV == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.ACV.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ACV < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ACV < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.ACV.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       // title: (
  //       //   <div class="tooltip">
  //       //     #AT
  //       //     <span class="tooltiptext">
  //       //       AT: Cantidad de personas que se registraron asisten a ver el
  //       //       video o webinar.
  //       //     </span>
  //       //   </div>
  //       // ),
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="AT: Cantidad de personas que se registraron asisten a ver el
  //         video o webinar."
  //         >
  //           #AT
  //         </div>
  //       ),
  //       field: "AT",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.AT == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.AT.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.AT < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.AT < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.AT.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="ATR: Porcentaje de personas que se registraron asisten a ver el
  //           video o webinar."
  //         >
  //           %ATR
  //         </div>
  //       ),
  //       field: "ATR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ATR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.ATR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ATR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ATR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.ATR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=" CAC: Cuánto dinero hay que invertir para adquirir un cliente."
  //         >
  //           $CAC
  //         </div>
  //       ),
  //       field: "CAC",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CAC == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CAC.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CAC < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CAC < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CAC.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKCR: Porcentaje de personas que compran de las que visitan el
  //           checkout o carrito de compras."
  //         >
  //           %CKCR
  //         </div>
  //       ),
  //       field: "CKCR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CKCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CKCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKL: Cantidad de personas que inician el proceso de compra."
  //         >
  //           #CKL
  //         </div>
  //       ),
  //       field: "CKL",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKOR: Porcentaje de personas que visitan el checkout y se
  //           registran."
  //         >
  //           %CKOR
  //         </div>
  //       ),
  //       field: "CKOR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKOR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CKOR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKOR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKOR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CKOR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPAT: Cuánto nos cuesta que alguien asista."
  //         >
  //           $CPAT
  //         </div>
  //       ),
  //       field: "CPAT",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPAT == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CPAT.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPAT < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPAT < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CPAT.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPCKL: Cuanto dinero debo invertir para conseguir que alguien
  //           inicie una compra."
  //         >
  //           #CPCKL
  //         </div>
  //       ),
  //       field: "CPCKL",
  //       sortable: true,
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPCKL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CPCKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPCKL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPCKL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CPCKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPL: Cuánto dinero hay que invertir en publicidad para obtener
  //           un registro de cliente potencial."
  //         >
  //           $CPL
  //         </div>
  //       ),
  //       field: "CPL",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CPL.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CPL.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=""
  //         >
  //           %CR
  //         </div>
  //       ),
  //       field: "CR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CTA: Cantidad de personas que luego de ver el video o webinar
  //           hacen clic en el botón para tomar la acción que se les pide, sea
  //           comprar o agendar."
  //         >
  //           #CTA
  //         </div>
  //       ),
  //       field: "CTA",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CTA == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CTA}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CTA < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CTA < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CTA}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Cohort: Promedio de días desde que una persona se registra al
  //           funnel hasta que compra."
  //         >
  //           #Cohort
  //         </div>
  //       ),
  //       field: "cohort",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cohort == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.cohort}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cohort < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cohort < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.cohort}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Revenue: Dinero total generado y a generar."
  //         >
  //           $Revenue
  //         </div>
  //       ),
  //       field: "revenue",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.revenue == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.revenue.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.revenue < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.revenue < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.revenue.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPA: Cuánto dinero recibo por cada asistente (revenue o cash)."
  //         >
  //           $EPA
  //         </div>
  //       ),
  //       field: "EPA",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPA == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPA.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPA < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPA < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPA.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPC: Cuanto dinero gano por cada clic (revenue o cash)."
  //         >
  //           $EPC
  //         </div>
  //       ),
  //       field: "EPC",
  //       sortable: true,
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPC == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPC.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPC < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPC < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPC.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPL: Cuánto dinero gano por cada Lead o registro (revenue o
  //             cash)."
  //         >
  //           $EPL
  //         </div>
  //       ),
  //       field: "EPL",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPL.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPL.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPV: Cuánto dinero gano por cada visita a mi web o funnel
  //           (revenue o cash)."
  //         >
  //           $EPV
  //         </div>
  //       ),
  //       field: "EPV",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPV == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPV.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPV < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPV < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPV.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="FCR: Porcentaje de leads del funnel que compran un producto."
  //         >
  //           $FCR
  //         </div>
  //       ),
  //       field: "FCR",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.FCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.FCR.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.FCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.FCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.FCR.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="LCR: Que % de personas que visitan la página de registro se
  //           terminan registrando."
  //         >
  //           %LCR
  //         </div>
  //       ),
  //       field: "LCR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.LCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.LCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.LCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.LCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.LCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="LTA: Porcentaje de registros que hacen clic para agendar o
  //           comprar (acción)."
  //         >
  //           %LTA
  //         </div>
  //       ),
  //       field: "LTA",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.LTA == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.LTA.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.LTA < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.LTA < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.LTA.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="ROI: Puede ser sobre facturación o cash. Por cuánto multiplico
  //           mi dinero invertido en anuncios."
  //         >
  //           #ROI
  //         </div>
  //       ),
  //       field: "ROI",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ROI == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.ROI}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ROI < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ROI < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.ROI}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="SPCR: Qué porcentaje de visitas compran en una carta de venta."
  //         >
  //           %SPCR
  //         </div>
  //       ),
  //       field: "SLTCK",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SLTCK == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SLTCK.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SLTCK < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SLTCK < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SLTCK.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       // title: (
  //       //   <div class="tooltip">
  //       //     %SPCR
  //       //     <span class="tooltiptext">
  //       //       SPCR: Qué porcentaje de visitas compran en una carta de venta.
  //       //     </span>
  //       //   </div>
  //       // ),
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="SPCR: Qué porcentaje de visitas compran en una carta de venta."
  //         >
  //           %SPCR
  //         </div>
  //       ),
  //       field: "SPCR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SPCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SPCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SPCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SPCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SPCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "SVP",
  //       field: "SVP",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SVP == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SVP.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SVP < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SVP < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SVP.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "Cuenta de dinero",
  //       field: "account_currency",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.account_currency == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.account_currency.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.account_currency < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.account_currency < 0
  //                   ? "text-danger"
  //                   : "text-green"
  //               }`}
  //             >{`${funnelData?.account_currency.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="cash: Dinero total cobrado."
  //         >
  //           $cash
  //         </div>
  //       ),
  //       field: "cash",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cash == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.cash.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cash < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cash < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cash.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="clicks: Cantidad de personas que hacen clic en el link de tu
  //           anuncio o link."
  //         >
  //           #clicks
  //         </div>
  //       ),
  //       field: "clicks",
  //       sortable: true,
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.clicks == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.clicks}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.clicks < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.clicks < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.clicks}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Clicks Organicos: Clicks capturados mediante el tracking a
  //           través del script del funnel.clicks: Cantidad de personas que hacen clic en el link de tu
  //           anuncio o link."
  //         >
  //           #Clicks Organicos
  //         </div>
  //       ),
  //       field: "clicks_organic",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.clicks_organic == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.clicks_organic}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.clicks_organic < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.clicks_organic < 0
  //                   ? "text-danger"
  //                   : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.clicks_organic}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPC: Cuánto dinero hay que invertir para que alguien haga clic
  //           en el anuncio."
  //         >
  //           $CPC
  //         </div>
  //       ),
  //       field: "cpc",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cpc == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.cpc.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cpc < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cpc < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cpc.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPM: Cuánto dinero cuesta obtener 1.000 impresiones de
  //           publicidad."
  //         >
  //           $CPM
  //         </div>
  //       ),
  //       field: "cpm",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cpm == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.cpm.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cpm < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cpm < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cpm.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Porcentaje de clics en el enlace en comparación con el número de impresiones."
  //         >
  //           %CTR
  //         </div>
  //       ),
  //       field: "ctr",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ctr == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.ctr.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ctr < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ctr < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.ctr.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=""
  //         >
  //           #Frecuencia
  //         </div>
  //       ),
  //       field: "frequency",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.frequency == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.frequency}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.frequency < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.frequency < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.frequency}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Impresiones: Impresiones."
  //         >
  //           #Impresiones
  //         </div>
  //       ),
  //       field: "impressions",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.impressions == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.impressions}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.impressions < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.impressions < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.impressions}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Leads: Cantidad de clientes potenciales que dejan sus datos en
  //           un formulario."
  //         >
  //           #Leads
  //         </div>
  //       ),
  //       field: "leeds",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.leeds == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.leeds}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.leeds < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.leeds < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.leeds}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Profit: Dinero restante luego de descontar costo de anuncios."
  //         >
  //           $Profit
  //         </div>
  //       ),
  //       field: "profit",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.profit == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.profit.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           // console.log("funnelData?.profit", funnelData?.profit < 0)
  //           <div
  //             className={`${
  //               funnelData?.profit < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.profit < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.profit.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Reach: El número de personas que ven tu contenido."
  //         >
  //           #Reach
  //         </div>
  //       ),
  //       field: "reach",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.reach == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.reach}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.reach < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.reach < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.reach}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Sales: Cantidad de personas que compran un producto."
  //         >
  //           #Sales
  //         </div>
  //       ),
  //       field: "sales",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.sales == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.sales}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.sales < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.sales < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.sales}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "$spend",
  //       field: "spend",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.spend == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.spend.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.spend < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.spend < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.spend.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Vistas: Vistas al landing page."
  //         >
  //           #Vistas
  //         </div>
  //       ),
  //       field: "views",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.views == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.views.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.views < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.views < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.views.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //   ];
  //   setDataFunnelToggle(columnsToSet);
  // } else if (typeDashboard === 4) {
  //   console.log("entra al case 4");
  //   columnsToSet = [
  //     {
  //       title: "Fecha",
  //       value: "FECHA",
  //       field: "date_start",
  //       render: (funnelData: CampaignData) => (
  //         <div className="widthDate">
  //           <span>{`${funnelData?.date_start}`}</span>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="ACV: Dinero promedio que gasta una persona en productos."
  //         >
  //           $ACV
  //         </div>
  //       ),
  //       field: "ACV",
  //       sign: "",
  //       sortable: true,
  //       value: "ACV",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ACV == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.ACV.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ACV < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ACV < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.ACV.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="AT: Cantidad de personas que se registraron asisten a ver el
  //         video o webinar."
  //         >
  //           #AT
  //         </div>
  //       ),
  //       field: "AT",
  //       value: "AT",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.AT == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.AT.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.AT < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.AT < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.AT.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="ATR: Porcentaje de personas que se registraron asisten a ver el
  //           video o webinar."
  //         >
  //           %ATR
  //         </div>
  //       ),
  //       field: "ATR",
  //       value: "ATR",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ATR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.ATR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ATR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ATR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.ATR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=" CAC: Cuánto dinero hay que invertir para adquirir un cliente."
  //         >
  //           $CAC
  //         </div>
  //       ),
  //       field: "CAC",
  //       value: "CAC",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CAC == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CAC.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CAC < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CAC < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CAC.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKCR: Porcentaje de personas que compran de las que visitan el
  //           checkout o carrito de compras."
  //         >
  //           %CKCR
  //         </div>
  //       ),
  //       field: "CKCR",
  //       value: "CKCR",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CKCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CKCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKOR: Porcentaje de personas que visitan el checkout y se
  //           registran."
  //         >
  //           %CKOR
  //         </div>
  //       ),
  //       field: "CKOR",
  //       value: "CKOR",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKOR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CKOR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKOR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKOR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CKOR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPAT: Cuánto nos cuesta que alguien asista."
  //         >
  //           $CPAT
  //         </div>
  //       ),
  //       field: "CPAT",
  //       sign: "",
  //       sortable: true,
  //       value: "CPAT",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPAT == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CPAT.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPAT < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPAT < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CPAT.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPCKL: Cuanto dinero debo invertir para conseguir que alguien
  //           inicie una compra."
  //         >
  //           #CPCKL
  //         </div>
  //       ),
  //       field: "CPCKL",
  //       value: "CPCKL",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPCKL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CPCKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPCKL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPCKL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CPCKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPL: Cuánto dinero hay que invertir en publicidad para obtener
  //           un registro de cliente potencial."
  //         >
  //           $CPL
  //         </div>
  //       ),
  //       field: "CPL",
  //       sign: "",
  //       sortable: true,
  //       value: "CPL",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CPL.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CPL.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=""
  //         >
  //           %CR
  //         </div>
  //       ),
  //       field: "CR",
  //       sign: "",
  //       sortable: true,
  //       value: "CR",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CTA: Cantidad de personas que luego de ver el video o webinar
  //           hacen clic en el botón para tomar la acción que se les pide, sea
  //           comprar o agendar."
  //         >
  //           #CTA
  //         </div>
  //       ),
  //       field: "CTA",
  //       sign: "",
  //       sortable: true,
  //       value: "CTA",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CTA == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CTA}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CTA < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CTA < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CTA}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Cohort: Promedio de días desde que una persona se registra al
  //           funnel hasta que compra."
  //         >
  //           #Cohort
  //         </div>
  //       ),
  //       field: "cohort",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cohort == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.cohort}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cohort < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cohort < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.cohort}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Revenue: Dinero total generado y a generar."
  //         >
  //           $Revenue
  //         </div>
  //       ),
  //       field: "revenue",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.revenue == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.revenue.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.revenue < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.revenue < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.revenue.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPA: Cuánto dinero recibo por cada asistente (revenue o cash)."
  //         >
  //           $EPA
  //         </div>
  //       ),
  //       field: "EPA",
  //       sign: "",
  //       sortable: true,
  //       value: "EPA",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPA == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPA.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPA < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPA < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPA.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPC: Cuanto dinero gano por cada clic (revenue o cash)."
  //         >
  //           $EPC
  //         </div>
  //       ),
  //       field: "EPC",
  //       sign: "",
  //       sortable: true,
  //       value: "EPC",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPC == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPC.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPC < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPC < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPC.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPL: Cuánto dinero gano por cada Lead o registro (revenue o
  //             cash)."
  //         >
  //           $EPL
  //         </div>
  //       ),
  //       field: "EPL",
  //       sign: "",
  //       sortable: true,
  //       value: "EPL",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPL.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPL.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPV: Cuánto dinero gano por cada visita a mi web o funnel
  //           (revenue o cash)."
  //         >
  //           $EPV
  //         </div>
  //       ),
  //       field: "EPV",
  //       sign: "",
  //       sortable: true,
  //       value: "EPV",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPV == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPV.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPV < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPV < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPV.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="FCR: Porcentaje de leads del funnel que compran un producto."
  //         >
  //           $FCR
  //         </div>
  //       ),
  //       field: "FCR",
  //       sign: "",
  //       sortable: true,
  //       value: "FCR",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.FCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.FCR.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.FCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.FCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.FCR.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="LCR: Que % de personas que visitan la página de registro se
  //           terminan registrando."
  //         >
  //           %LCR
  //         </div>
  //       ),
  //       field: "LCR",
  //       value: "LCR",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.LCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.LCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.LCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.LCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.LCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="LTA: Porcentaje de registros que hacen clic para agendar o
  //           comprar (acción)."
  //         >
  //           %LTA
  //         </div>
  //       ),
  //       field: "LTA",
  //       value: "LTA",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.LTA == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.LTA.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.LTA < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.LTA < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.LTA.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="SLTCK: Porcentaje de personas que pasan de la carta de ventas al
  //           checkout."
  //         >
  //           %SLTCK
  //         </div>
  //       ),
  //       field: "SLTCK",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       value: "SLTCK",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SLTCK == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SLTCK.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SLTCK < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SLTCK < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SLTCK.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       // title: (
  //       //   <div class="tooltip">
  //       //     %SPCR
  //       //     <span class="tooltiptext">
  //       //       SPCR: Qué porcentaje de visitas compran en una carta de venta.
  //       //     </span>
  //       //   </div>
  //       // ),
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="SPCR: Qué porcentaje de visitas compran en una carta de venta."
  //         >
  //           %SPCR
  //         </div>
  //       ),
  //       field: "SPCR",
  //       sign: "",
  //       sortable: true,
  //       value: "SPCR",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SPCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SPCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SPCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SPCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SPCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "SVP",
  //       field: "SVP",
  //       sign: "",
  //       sortable: true,
  //       value: "SVP",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SVP == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SVP.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SVP < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SVP < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SVP.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "Cuenta de dinero",
  //       field: "account_currency",
  //       sign: "",
  //       sortable: true,
  //       value: "Cuenta de dinero",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.account_currency == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.account_currency.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.account_currency < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.account_currency < 0
  //                   ? "text-danger"
  //                   : "text-green"
  //               }`}
  //             >{`${funnelData?.account_currency.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="clicks: Cantidad de personas que hacen clic en el link de tu
  //           anuncio o link."
  //         >
  //           #clicks
  //         </div>
  //       ),
  //       field: "clicks",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       value: "clicks",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.clicks == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.clicks}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.clicks < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.clicks < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.clicks}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Clicks Organicos: Clicks capturados mediante el tracking a
  //           través del script del funnel.clicks: Cantidad de personas que hacen clic en el link de tu
  //           anuncio o link."
  //         >
  //           #Clicks Organicos
  //         </div>
  //       ),
  //       field: "clicks_organic",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       value: "clicks organicos",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.clicks_organic == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.clicks_organic}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.clicks_organic < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.clicks_organic < 0
  //                   ? "text-danger"
  //                   : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.clicks_organic}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPC: Cuánto dinero hay que invertir para que alguien haga clic
  //           en el anuncio."
  //         >
  //           $CPC
  //         </div>
  //       ),
  //       field: "cpc",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cpc == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.cpc.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cpc < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cpc < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cpc.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPM: Cuánto dinero cuesta obtener 1.000 impresiones de
  //           publicidad."
  //         >
  //           $CPM
  //         </div>
  //       ),
  //       field: "cpm",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cpm == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.cpm.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cpm < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cpm < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cpm.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Porcentaje de clics en el enlace en comparación con el número de impresiones."
  //         >
  //           %CTR
  //         </div>
  //       ),
  //       field: "ctr",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ctr == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.ctr.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ctr < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ctr < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.ctr.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=""
  //         >
  //           #Frecuencia
  //         </div>
  //       ),
  //       field: "frequency",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.frequency == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.frequency}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.frequency < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.frequency < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.frequency}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Impresiones: Impresiones."
  //         >
  //           #Impresiones
  //         </div>
  //       ),
  //       field: "impressions",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.impressions == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.impressions}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.impressions < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.impressions < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.impressions}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Leads: Cantidad de clientes potenciales que dejan sus datos en
  //           un formulario."
  //         >
  //           #Leads
  //         </div>
  //       ),
  //       field: "leeds",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.leeds == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.leeds}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.leeds < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.leeds < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.leeds}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Reach: El número de personas que ven tu contenido."
  //         >
  //           #Reach
  //         </div>
  //       ),
  //       field: "reach",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.reach == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.reach}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.reach < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.reach < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.reach}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Sales: Cantidad de personas que compran un producto."
  //         >
  //           #Sales
  //         </div>
  //       ),
  //       field: "sales",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.sales == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.sales}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.sales < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.sales < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.sales}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "$spend",
  //       field: "spend",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.spend == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.spend.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.spend < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.spend < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.spend.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Vistas: Vistas al landing page."
  //         >
  //           #Vistas
  //         </div>
  //       ),
  //       field: "views",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.views == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.views.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.views < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.views < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.views.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //   ];
  //   setColumnsFunnel(columnsToSet);
  //   setDataFunnelToggle(columnsToSet);
  //   columnsToSet.forEach((col) =>
  //     setCheckedColumns((val) => [...val, col.value])
  //   );
  // } else if (typeDashboard === 5) {
  //   console.log("entra al case 5");
  //   columnsToSet = [
  //     {
  //       title: "Fecha",
  //       value: "FECHA",
  //       field: "date_start",
  //       render: (funnelData: CampaignData) => (
  //         <div className="widthDate">
  //           <span>{`${funnelData?.date_start}`}</span>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="ACV: Dinero promedio que gasta una persona en productos."
  //         >
  //           $ACV
  //         </div>
  //       ),
  //       field: "ACV",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ACV == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.ACV.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ACV < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ACV < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.ACV.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="B: Cantidad de personas que agendan una cita en el calendario de
  //           un vendedor."
  //         >
  //           #B
  //         </div>
  //       ),
  //       field: "B",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.B == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.B}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.B < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.B < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.B}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="BR: Porcentaje de personas de las que hicieron clic al final del
  //             vídeo que terminaron agendando. Con Aplicación Previa: Cantidad
  //             de personas que aplican que terminan agendando."
  //         >
  //           %BR
  //         </div>
  //       ),
  //       field: "BR",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.BR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.BR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.BR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.BR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.BR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Cohort: Promedio de días desde que una persona se registra al
  //           funnel hasta que compra."
  //         >
  //           #Cohort
  //         </div>
  //       ),
  //       field: "cohort",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cohort == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.cohort}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cohort < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cohort < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.cohort}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="DWS: Que cantidad de personas compran un downsell."
  //         >
  //           #DWS
  //         </div>
  //       ),
  //       field: "dws",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.dws == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.dws}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.dws < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.dws < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.dws}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="US: Que cantidad de compradores del producto principal compran
  //           el upsell o bump."
  //         >
  //           #US
  //         </div>
  //       ),
  //       field: "us",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.us == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.us}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.us < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.us < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.us}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="UCR: Que porcentaje de compradores del producto principal
  //           compran el upsell o bump."
  //         >
  //           %UCR
  //         </div>
  //       ),
  //       field: "UCR",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.UCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.UCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.UCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.UCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.UCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="DWCR: Porcentaje de personas que compran downsell sobre
  //           compradores, leads o Asistentes."
  //         >
  //           %DWCR
  //         </div>
  //       ),
  //       field: "DWCR",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.DWCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.DWCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.DWCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.DWCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.DWCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Revenue: Dinero total generado y a generar."
  //         >
  //           $Revenue
  //         </div>
  //       ),
  //       field: "revenue",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.revenue == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.revenue.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.revenue < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.revenue < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.revenue.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=" CAC: Cuánto dinero hay que invertir para adquirir un cliente."
  //         >
  //           $CAC
  //         </div>
  //       ),
  //       field: "CAC",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CAC == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CAC.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CAC < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CAC < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CAC.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKCR: Porcentaje de personas que compran de las que visitan el
  //           checkout o carrito de compras."
  //         >
  //           %CKCR
  //         </div>
  //       ),
  //       field: "CKCR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CKCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CKCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKL: Cantidad de personas que inician el proceso de compra."
  //         >
  //           #CKL
  //         </div>
  //       ),
  //       field: "CKL",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CKOR: Porcentaje de personas que visitan el checkout y se
  //           registran."
  //         >
  //           %CKOR
  //         </div>
  //       ),
  //       field: "CKOR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CKOR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CKOR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CKOR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CKOR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CKOR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     // {
  //     //   title: (
  //     //     <span data-tip="Canitad de personas que visitan el carrito de compras o la página para aplicar/agendar.">
  //     //       #CKV/BPV
  //     //     </span>
  //     //   ),
  //     //   field: "CKV/BPV",
  //     //   sign: "",
  //     //   sortable: true,
  //     //   value: "",
  //     //   class: "text-left",
  //     // },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPCKL: Cuanto dinero debo invertir para conseguir que alguien
  //           inicie una compra."
  //         >
  //           #CPCKL
  //         </div>
  //       ),
  //       field: "CPCKL",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPCKL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CPCKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPCKL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPCKL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CPCKL}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPL: Cuánto dinero hay que invertir en publicidad para obtener
  //           un registro de cliente potencial."
  //         >
  //           $CPL
  //         </div>
  //       ),
  //       field: "CPL",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CPL == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.CPL.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CPL < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CPL < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.CPL.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=""
  //         >
  //           %CR
  //         </div>
  //       ),
  //       field: "CR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.CR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.CR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //       class: "text-left",
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CTA: Cantidad de personas que luego de ver el video o webinar
  //           hacen clic en el botón para tomar la acción que se les pide, sea
  //           comprar o agendar."
  //         >
  //           #CTA
  //         </div>
  //       ),
  //       field: "CTA",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.CTA == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.CTA}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.CTA < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.CTA < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.CTA}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPC: Cuanto dinero gano por cada clic (revenue o cash)."
  //         >
  //           $EPC
  //         </div>
  //       ),
  //       field: "EPC",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPC == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPC.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPC < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPC < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPC.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="EPV: Cuánto dinero gano por cada visita a mi web o funnel
  //           (revenue o cash)."
  //         >
  //           $EPV
  //         </div>
  //       ),
  //       field: "EPV",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.EPV == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.EPV.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.EPV < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.EPV < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.EPV.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="FCR: Porcentaje de leads del funnel que compran un producto."
  //         >
  //           $FCR
  //         </div>
  //       ),
  //       field: "FCR",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.FCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.FCR.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.FCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.FCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.FCR.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="ROI: Puede ser sobre facturación o cash. Por cuánto multiplico
  //           mi dinero invertido en anuncios."
  //         >
  //           #ROI
  //         </div>
  //       ),
  //       field: "ROI",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ROI == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.ROI}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ROI < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ROI < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.ROI}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="SLTCK: Porcentaje de personas que pasan de la carta de ventas al
  //           checkout."
  //         >
  //           %SLTCK
  //         </div>
  //       ),
  //       field: "ctr",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SLTCK == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SLTCK.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SLTCK < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SLTCK < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SLTCK.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="SPCR: Qué porcentaje de visitas compran en una carta de venta."
  //         >
  //           %SPCR
  //         </div>
  //       ),
  //       field: "SPCR",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SPCR == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SPCR.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SPCR < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SPCR < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SPCR.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <span data-tip="Cantidad de personas que visitan una página.">
  //           #SPV
  //         </span>
  //       ),
  //       field: "SPV",
  //       sign: "",
  //       sortable: true,
  //       value: "",
  //       class: "text-left",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.SPV == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.SPV.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.SPV < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.SPV < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.SPV.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "Cuenta de dinero",
  //       field: "account_currency",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.account_currency == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.account_currency.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.account_currency < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.account_currency < 0
  //                   ? "text-danger"
  //                   : "text-green"
  //               }`}
  //             >{`${funnelData?.account_currency.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="cash: Dinero total cobrado."
  //         >
  //           $cash
  //         </div>
  //       ),
  //       field: "cash",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cash == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.cash.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cash < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cash < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cash.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="clicks: Cantidad de personas que hacen clic en el link de tu
  //           anuncio o link."
  //         >
  //           #clicks
  //         </div>
  //       ),
  //       field: "clicks",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.clicks == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.clicks}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.clicks < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.clicks < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.clicks}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Clicks Organicos: Clicks capturados mediante el tracking a
  //           través del script del funnel.clicks: Cantidad de personas que hacen clic en el link de tu
  //           anuncio o link."
  //         >
  //           #Clicks Organicos
  //         </div>
  //       ),
  //       field: "clicks_organic",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.clicks_organic == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.clicks_organic}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.clicks_organic < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.clicks_organic < 0
  //                   ? "text-danger"
  //                   : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.clicks_organic}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPC: Cuánto dinero hay que invertir para que alguien haga clic
  //           en el anuncio."
  //         >
  //           $CPC
  //         </div>
  //       ),
  //       field: "cpc",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cpc == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.cpc.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cpc < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cpc < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cpc.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="CPM: Cuánto dinero cuesta obtener 1.000 impresiones de
  //           publicidad."
  //         >
  //           $CPM
  //         </div>
  //       ),
  //       field: "cpm",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.cpm == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.cpm.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.cpm < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.cpm < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.cpm.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Porcentaje de clics en el enlace en comparación con el número de impresiones."
  //         >
  //           %CTR
  //         </div>
  //       ),
  //       field: "ctr",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.ctr == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.ctr.toFixed(2)}%`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.ctr < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.ctr < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.ctr.toFixed(2)}%`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title=""
  //         >
  //           #Frecuencia
  //         </div>
  //       ),
  //       field: "frequency",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.frequency == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.frequency}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.frequency < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.frequency < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.frequency}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Impresiones: Impresiones."
  //         >
  //           #Impresiones
  //         </div>
  //       ),
  //       field: "impressions",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.impressions == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.impressions}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.impressions < 0
  //                 ? "back-danger"
  //                 : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.impressions < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.impressions}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Leads: Cantidad de clientes potenciales que dejan sus datos en
  //           un formulario."
  //         >
  //           #Leads
  //         </div>
  //       ),
  //       field: "leeds",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.leeds == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.leeds}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.leeds < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.leeds < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.leeds}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Profit: Dinero restante luego de descontar costo de anuncios."
  //         >
  //           $Profit
  //         </div>
  //       ),
  //       field: "profit",
  //       sign: "",
  //       sortable: true,
  //       class: "text-left",
  //       value: "",
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.profit == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.profit.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           // console.log("funnelData?.profit", funnelData?.profit < 0)
  //           <div
  //             className={`${
  //               funnelData?.profit < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.profit < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.profit.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Reach: El número de personas que ven tu contenido."
  //         >
  //           #Reach
  //         </div>
  //       ),
  //       field: "reach",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.reach == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.reach}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.reach < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.reach < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.reach}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Sales: Cantidad de personas que compran un producto."
  //         >
  //           #Sales
  //         </div>
  //       ),
  //       field: "sales",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.sales == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               <NumericFormat
  //                 value={funnelData?.sales}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.sales < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.sales < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >
  //               <NumericFormat
  //                 value={funnelData?.sales}
  //                 allowLeadingZeros
  //                 thousandSeparator=","
  //                 displayType="text"
  //               />
  //             </span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: "$spend",
  //       field: "spend",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.spend == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`$${funnelData?.spend.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.spend < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.spend < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`$${funnelData?.spend.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //     {
  //       title: (
  //         <div
  //           id="tooltip"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Vistas: Vistas al landing page."
  //         >
  //           #Vistas
  //         </div>
  //       ),
  //       field: "views",
  //       sortable: true,
  //       render: (funnelData: CampaignData) =>
  //         funnelData?.views == 0 ? (
  //           <div className="back-grey">
  //             <span className="text-grey">
  //               {`${funnelData?.views.toFixed(2)}`}
  //             </span>
  //           </div>
  //         ) : (
  //           <div
  //             className={`${
  //               funnelData?.views < 0 ? "back-danger" : "back-green-table"
  //             }`}
  //           >
  //             <span
  //               className={`${
  //                 funnelData?.views < 0 ? "text-danger" : "text-green"
  //               }`}
  //             >{`${funnelData?.views.toFixed(2)}`}</span>
  //           </div>
  //         ),
  //     },
  //   ];
  //   setDataFunnelToggle(columnsToSet);
  // }
};
